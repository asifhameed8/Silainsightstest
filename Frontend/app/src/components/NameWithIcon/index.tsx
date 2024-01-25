import VerifiedIcon from '@components/_Icons/VerifiedIcon';
import Link from 'next/link';
import React from 'react';
interface Iprops {
    classNames?: string;
    IconClass?: string;
    name?: String;
    link?: string;
    isVerified?: Boolean;
}
const NameWithIcon = ({ link, classNames, IconClass, name, isVerified }: Iprops) => {
    return (
        <div className="AtNameHover inline-block">
            <div className="flex flex-grow items-center gap-1 truncate">
                {link ? (
                    <Link href={link}>
                        <p className={`${classNames ? classNames : ''} max-w-[5rem] truncate text-xs font-bold text-black dark:text-white`}>{name}</p>
                    </Link>
                ) : (
                    <p className={`${classNames ? classNames : ''} max-w-[5rem] truncate text-xs font-bold text-black dark:text-white`}>{name}</p>
                )}
                <span className="leading-0">{isVerified && <VerifiedIcon classNames={IconClass} />}</span>
            </div>
        </div>
    );
};

export default NameWithIcon;
