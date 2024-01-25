import React from 'react';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';

interface IProps {
    children: React.ReactNode;
    title: string;
    classNames?: string;
    hide?: boolean;
    icon?: string;
}

const Accordion = ({ children, title, classNames, hide, icon }: IProps) => {
    return (
        <Disclosure
            as="div"
            defaultOpen={true}
            key=""
            className={`overflow-hidden border-none sm:border ${hide ? 'border-[#8DC640]' : 'border-lightBorder  dark:border-borderColor'}  rounded`}
        >
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={`${classNames} relative flex w-full items-center justify-between border-b border-lightBorder bg-lightBg p-3 dark:border-borderColor dark:bg-gray17`}
                    >
                        <div className="flex items-center gap-x-2">
                            <i className={clsx(icon, 'text-xs dark:text-white')}></i>
                            <h2 className={`text-sm ${hide ? ' text-black dark:text-white' : 'dark:text-white'} font-bold`}>{title}</h2>
                        </div>
                        <IoIosArrowDown className={`${open ? 'rotate-180 transform' : ''} h-4 w-4 dark:text-secondary`} />
                    </Disclosure.Button>
                    <Disclosure.Panel as="div">{children}</Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Accordion;
