import { clsx } from 'clsx';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
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
    error?: string | null;
    rest?: React.InputHTMLAttributes<HTMLInputElement>;
    // eslint-disable-next-line no-unused-vars
    register?: UseFormRegister<any>;
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    max?: number | Date | string;
    min?: number | Date | string;
    step?: string;
    prefix?: string;
    pattern?: string;
    title?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    icon?: string | {};
    maxLength?: number | undefined;
    minLength?: number | undefined;
    defaultValue?: string;
    rows?: number;
    cols?: number;
    AddIcon?: any;
    parentClass?: string;
}

const sizeStyles: SsProps = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
};

const Textarea: React.FC<IProps> = ({
    placeholder,
    size = 'md',
    className,
    parentClass,
    value,
    onChange,
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
    maxLength,
    minLength,
    rows,
    cols,
    AddIcon,
    ...rest
}) => {
    const [inputType, setInputType] = useState(type || 'text');
    const typeHandler = () => {
        let crr = inputType == 'text' ? 'password' : 'text';
        setInputType(crr);
    };

    return (
        <div className={`${parentClass ? parentClass : ''} w-full`}>
            <div className="relative w-full">
                {icon ? (
                    <i
                        onClick={typeHandler}
                        className={`${icon}  absolute  right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-davygrey`}
                    ></i>
                ) : AddIcon ? (
                    <div className="absolute top-0 left-0  flex h-full w-[42px]  items-center justify-center overflow-hidden rounded-l-md  dark:bg-bgDark">
                        {AddIcon}
                    </div>
                ) : (
                    ''
                )}
                <textarea
                    type={inputType}
                    className={clsx(
                        className,
                        sizeStyles[size],
                        ` ${
                            AddIcon && 'pl-[3.3rem]'
                        }  focus:shadow-outline relative z-30 block w-full rounded-md border border-lightBorder bg-transparent  text-black placeholder:text-secondary focus:border-black focus:outline-none focus:ring-0 dark:border-borderColor dark:text-white  dark:focus:border-primary`
                    )}
                    pattern={pattern}
                    max={max}
                    rows={rows}
                    cols={cols}
                    step={step}
                    title={title}
                    min={min}
                    maxLength={maxLength}
                    minLength={minLength}
                    value={value}
                    name={name}
                    onChange={onChange}
                    {...(register !== undefined && { ...register(name) })}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...rest}
                />
                {/* {regex && regex.test(value) && 'error'} */}
            </div>

            {error && <InputError error={error} />}
        </div>
    );
};

export default Textarea;
