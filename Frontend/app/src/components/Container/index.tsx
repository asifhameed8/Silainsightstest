import clsx from 'clsx';

interface Iprops {
    classNames?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

interface SsProps {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

const sizeStyles: SsProps = {
    xs: 'mx-auto px-5 md:w-[75rem]',
    sm: 'mx-auto px-4 max-w-[440px] lg:max-w-[1432px]',
    md: 'mx-auto px-4 md:max-w-[1620px]',
    lg: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'
};

export function Container({ size = 'sm', classNames, ...props }: Iprops) {
    return <div className={clsx(sizeStyles[size], classNames)} {...props} />;
}
