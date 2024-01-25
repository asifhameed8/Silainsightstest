import { Fragment, ReactNode } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import FormCheck from './FormCheck';
import ArbiscanIcon from '@components/_Icons/ArbiscanIcon';
import ArbitrumIcon from '@components/_Icons/ArbitrumIcon';

interface IData {
    icon?: ReactNode;
    name: string | number;
    key: string | number;
}

interface IProps {
    selected: IData | null | undefined;
    // eslint-disable-next-line no-unused-vars
    setSelected: (value: IData | null) => void;
    Data: IData[];
    iconClass?: string;
    placeholder?: string;
    dropStyle?: string;
    className?: string;
    InteractiveFilter?: boolean;
    ChainIcon?: boolean;
    Arbitrum?: any;
}

export default function SelectComponent({
    Data,
    iconClass,
    placeholder,
    selected,
    setSelected,
    InteractiveFilter,
    dropStyle,
    className,
    Arbitrum
}: // ChainIcon
IProps) {
    return (
        <Listbox as="div" value={selected} onChange={setSelected}>
            <div className="relative">
                <Listbox.Button
                    className={`${className}  relative flex  w-full items-center justify-between rounded-md  bg-white py-2 pl-3 pr-14 text-left text-sm focus:outline-none  dark:bg-gray17`}
                >
                    <div
                        className={clsx(placeholder ? 'text-secondary' : 'text-black dark:text-white', `flex items-center gap-2 truncate`)}
                        title={selected?.name || placeholder}
                    >
                        {/* {ChainIcon && selected?.name === 'ETH' && <EthIcon classNames="h-5 w-5" />} */}
                        {selected?.name && Arbitrum ? <ArbitrumIcon classNames="h-5 w-5 " /> : <ArbiscanIcon classNames="h-5 w-5 " />}
                        {selected?.name || placeholder}
                    </div>
                    <span className="pointer-events-none absolute inset-y-1/2 right-2 flex items-center ">
                        <i className={`${iconClass ? iconClass : ''} text-xl text-secondary`} aria-hidden="true">
                            <IoIosArrowDown />
                        </i>
                    </span>
                </Listbox.Button>

                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options
                        className={`${dropStyle} AtScrollHide DropDownShadow absolute z-10 mt-1 max-h-[20.5rem] w-full overflow-auto rounded-md 
                                 bg-white py-1 text-sm focus:outline-none  dark:bg-bgDark`}
                    >
                        {Data.map((item: IData, Idx: number) => {
                            return (
                                <Listbox.Option
                                    key={item.name + 'aaa'}
                                    className={({ active }: { active: boolean }) =>
                                        `relative cursor-pointer select-none  py-1.5 px-3 ${
                                            active ? 'bg-lightHover dark:bg-dark' : ''
                                        } first-letter:first-line:marker:
                                            ${Idx == Data.length - 1 ? '' : 'border-b border-lightBorder dark:border-borderColor'}
                                            `
                                    }
                                    value={item}
                                >
                                    {InteractiveFilter ? (
                                        <div className="flex items-center justify-between gap-2 truncate  text-secondary dark:text-white">
                                            {item.name}
                                            <FormCheck label="" />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 truncate  text-secondary dark:text-white">
                                            {Arbitrum ? <ArbitrumIcon classNames="h-5 w-5 " /> : <ArbiscanIcon classNames="h-5 w-5 " />}
                                            {item.name}
                                        </div>
                                    )}
                                </Listbox.Option>
                            );
                        })}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
