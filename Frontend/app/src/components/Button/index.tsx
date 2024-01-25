import clsx from 'clsx';
// import { ImSpinner9 } from 'react-icons/im';
import { BsProps, IButtonProps, SsProps, VsProps } from './button.interface';
import React, { forwardRef } from 'react';
import ImageComponent from '@components/ImageComponent';

const baseStyles: BsProps = {
    solid: 'inline-flex justify-center items-center font-display font-bold rounded-md shadow-sm disabled:cursor-not-allowed',
    outline: 'inline-flex justify-center items-center outline-none font-display font-bold border rounded-md disabled:cursor-not-allowed'
};

const variantStyles: VsProps = {
    solid: {
        primary:
            'text-white border border-primary bg-primary hover:bg-primary/80 active:bg-primary/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-primary',
        secondary:
            'text-white border border-lightBorder dark:border-borderColor bg-lightBg dark:bg-secondary hover:bg-lightBg/80 dark:hover:bg-secondary/80  active:bg-lightBg/90 dark:active:bg-secondary/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-lightBg dark:disabled:hover:bg-secondary',
        danger: 'text-white border border-danger bg-danger hover:bg-danger/80 active:bg-danger/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-danger',
        info: 'text-white border border-info bg-info hover:bg-info/80 active:bg-info/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-info'
    },
    outline: {
        primary:
            'border-primary text-primary hover:border-primary/70 hover:bg-primary/10 active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent',
        secondary:
            'border-primary text-primary hover:border-primary/70 hover:bg-primary/10 active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent'
    }
};

const sizeStyles: SsProps = {
    sm: 'px-2.5 py-1 text-xs font-display',
    md: 'px-4 py-1.5 text-sm font-display',
    lg: 'px-7 py-2 text-base font-display'
};
export const Button = forwardRef(
    (
        { variant = 'solid', color = 'primary', size = 'md', className, type, disabled, isLoading, children, loaderClass, ...props }: IButtonProps,
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    baseStyles[variant],
                    variantStyles[variant][color],
                    sizeStyles[size],
                    className,
                    isLoading && 'relative !cursor-wait !text-transparent hover:!text-transparent'
                )}
                type={type ? type : 'button'}
                disabled={disabled ? true : false}
                {...props}
            >
                {isLoading && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                        {/* <ImSpinner9 className={clsx('animate-spin text-sm ', loaderClass)} /> */}
                        <ImageComponent
                            figclassname={`flex-shrink-0 h-4 w-4 animate-spin text-sm ${loaderClass}`}
                            src={'/assets/images/mintstargram.svg'}
                            className="object-cover"
                            alt=""
                            fill
                        />
                    </div>
                )}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
