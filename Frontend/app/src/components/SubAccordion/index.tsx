import React from 'react';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';

interface IProps {
    children: React.ReactNode;
    title: string;
    classNames?: string;
}
const SubAccordion = ({ children, title, classNames }: IProps) => {
    return (
        <Disclosure as="div" key="" className="overflow-hidden ">
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={`${classNames} 
                         relative flex w-full items-center justify-between  px-3  py-1 hover:bg-lightHover dark:hover:bg-dark`}
                    >
                        <p className={`  ${open ? 'font-bold' : '  font-semibold'} text-sm  dark:text-secondary `}>{title}</p>
                        <IoIosArrowDown className={`${open ? 'rotate-180 transform' : ''} h-4 w-4 dark:text-secondary`} />
                    </Disclosure.Button>
                    <Disclosure.Panel as="div" className="">
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default SubAccordion;
