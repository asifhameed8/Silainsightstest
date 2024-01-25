import clsx from 'clsx';
import React, { useCallback, useEffect } from 'react';
import { debounce, throttle } from 'lodash';
interface IProps {
    className?: string;
    query?: string;
    disabled?: boolean;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    onKeyDown?: Function;
    Placeholder?: string;
    parentClass?: string;
    onFocus?: Function;
    onChange?: Function;
}

const Search = ({ onKeyDown, className, Placeholder, parentClass, setQuery, onFocus, onChange = () => null, disabled }: IProps) => {
    // This function will be run every 300ms at most, even if onChange is triggered more often
    const throttledSetQuery = useCallback(
        throttle((value: string) => {
            setQuery?.(value);
        }, 300),
        []
    );

    // This function will be run 300ms after the user has stopped typing
    const debouncedSetQuery = useCallback(
        debounce((value) => {
            setQuery?.(value);
        }, 300),
        []
    );

    // Decide here whether to use the throttled or debounced function
    const handleQueryChange = (e: { target: { value: any } }) => {
        // Call one of the functions here depending on your requirements
        // throttledSetQuery(e.target.value);
        onChange(e);
        debouncedSetQuery(e.target.value);
    };

    // Cancel any pending function calls when the component unmounts
    useEffect(() => {
        return () => {
            throttledSetQuery.cancel();
            debouncedSetQuery.cancel();
        };
    }, [throttledSetQuery, debouncedSetQuery]);

    return (
        <>
            <label htmlFor="default-search" className="sr-only mb-2 text-sm font-semibold text-gray-900 ">
                Search
            </label>
            <div className={clsx(parentClass, 'relative')}>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="icon-search text-sm text-[#6B7280]"></i>
                </div>
                <input
                    disabled={disabled ? disabled : false}
                    type="search"
                    id="default-search"
                    // value={query}
                    className={clsx(
                        className,
                        'block h-full w-full rounded-md border border-transparent  bg-lightBg py-3  pr-2 pl-8 text-sm text-white  outline-none placeholder:text-[#6B7280]  focus:border-lightText focus:ring-0 focus:ring-lightText disabled:cursor-not-allowed disabled:bg-[#e9ecef]  dark:bg-gray17    dark:focus:border-primary dark:focus:ring-primary'
                    )}
                    onChange={handleQueryChange}
                    onFocus={(e) => (onFocus ? onFocus(e) : {})}
                    onKeyDown={onKeyDown}
                    // onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                    placeholder={`${Placeholder ? Placeholder : 'Search'}`}
                    required
                />
            </div>
        </>
    );
};

export default Search;
