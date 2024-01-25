import React from 'react';
import clsx from 'clsx';

interface IProps {
    className?: string;
    icon?: string;
    children: React.ReactNode;
    style?: string;
}

const ModalTopBar = ({ className, icon, children, style }: IProps) => {
    return (
        <div className={clsx(className, 'rounded-t-md border-b border-lightBorder bg-lightBg px-4  py-6 dark:border-borderColor dark:bg-gray17')}>
            <div className="flex items-center gap-2">
                <i className={clsx(icon, 'leading-0 text-black dark:text-chinesesilver')}></i>
                <h2 className={clsx(style, 'font-display text-sm font-semibold text-black dark:text-chinesesilver')}>{children} </h2>
            </div>
        </div>
    );
};

export default ModalTopBar;
