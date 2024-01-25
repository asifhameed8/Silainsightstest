import React from 'react';

interface Iprops {
    name: string;
    parentClass?: string;
    className?: string;
    hideIcon?: boolean;
    sort?: boolean;
}
const NameWithSortIcon = ({ name, className, hideIcon, sort, parentClass }: Iprops) => {
    return (
        <div className={`${parentClass ? parentClass : ''} flex items-center justify-center gap-2`}>
            <span className={`${className ? className : ''} text-xs text-lightText dark:text-white`}>{name}</span>
            <div className="flex flex-col">
                {hideIcon ? ' ' : <i className={`${sort ? 'rotate-180' : null} icon-sort cursor-pointer text-[6px] hover:text-primary`}></i>}
            </div>
        </div>
    );
};

export default NameWithSortIcon;
