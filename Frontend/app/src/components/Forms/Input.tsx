import { clsx } from 'clsx';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { userSelector } from 'src/store/selectors';
import InputError from './InputError';

interface SsProps {
    sm: string;
    lg: string;
    md: string;
}

interface IProps {
    placeholder: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    type?: string;
    spanClass?: string;
    name: string;
    autocapitalize?: string;
    error?: string | null;
    rest?: React.InputHTMLAttributes<HTMLInputElement>;
    // eslint-disable-next-line no-unused-vars
    register?: UseFormRegister<any>;
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onkeydown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onkeyup?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    max?: number | string | undefined;
    min?: number | string | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    step?: string;
    prefix?: string;
    pattern?: string;
    title?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    icon?: {};
    defaultValue?: string;
    autoComplete?: string;
    AddIcon?: any;
}

const sizeStyles: SsProps = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
};

const readOnlyInner = false;

const Input: React.FC<IProps> = ({
    placeholder,
    size = 'md',
    className,
    value,
    onChange,
    onBlur,
    autocapitalize = 'on',
    type,
    register,
    icon,
    max,
    min,
    step,
    pattern,
    title,
    disabled,
    error,
    name,
    onkeydown,
    onkeyup,
    autoFocus,
    defaultValue,
    maxLength,
    minLength,
    AddIcon,
    ...rest
}) => {
    const [inputType, setInputType] = useState(type || 'text');
    const typeHandler = () => {
        let crr = inputType == 'text' ? 'password' : 'text';
        setInputType(crr);
    };
    const user = useSelector(userSelector);

    /* const [readOnlyInner, setReadOnly] = useState(false); */

    return (
        <div className=" relative">
            {AddIcon && (
                <div className="absolute top-0 left-0 flex h-12 w-[38px] items-center justify-center overflow-hidden  rounded-l-md dark:bg-bgDark">
                    {' '}
                    {AddIcon}
                </div>
            )}

            <div className="relative w-full">
                {type == 'password' && (
                    <i
                        onClick={typeHandler}
                        className={`${
                            inputType == 'password' ? 'icon-hide' : 'icon-views'
                        } absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-secondary`}
                    ></i>
                )}
                {icon && (
                    <i
                        onClick={typeHandler}
                        className={`${icon} absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-secondary`}
                    ></i>
                )}
                <input
                    type={inputType}
                    /* onClick={() => {
                    console.log('on click input', readOnlyInner);
                    if (readOnlyInner) {
                        setReadOnly(false);
                    }
                }} */
                    className={clsx(
                        className,
                        sizeStyles[size],
                        AddIcon && '!pl-[3rem]',
                        user
                            ? `border-lightBorder text-black focus:border-black dark:border-borderColor dark:text-white ${
                                  !readOnlyInner ? 'dark:focus:border-primary' : ''
                              }`
                            : `border-borderColor text-white ${!readOnlyInner ? 'focus:border-primary' : ''}`,
                        ' focus:shadow-outline block w-full rounded-md border bg-transparent placeholder:text-secondary focus:outline-none focus:ring-0 disabled:!text-secondary'
                    )}
                    readOnly={readOnlyInner}
                    autoFocus={autoFocus}
                    pattern={pattern}
                    max={max}
                    step={step}
                    title={title}
                    min={min}
                    value={value}
                    maxLength={maxLength}
                    minLength={minLength}
                    name={name}
                    onChange={onChange}
                    onKeyDown={onkeydown}
                    onBlur={onBlur}
                    onKeyUp={onkeyup}
                    {...(register !== undefined && { ...register(name) })}
                    placeholder={placeholder}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    {...rest}
                    autoCapitalize={autocapitalize}
                />
                {error && <InputError error={error} />}
                {/* {regex && regex.test(value) && 'error'} */}
            </div>
        </div>
    );
};

export default Input;
