import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { IoMdClose } from 'react-icons/io';
import localFont from 'next/font/local';
interface IProps {
    className?: string;
    children: React.ReactNode;
    show: boolean;
    icon?: string;
    // eslint-disable-next-line no-unused-vars
    hide: (value: boolean) => void;
    parentClass?: string;
    hideCloseButton?: boolean;
    responsiveParent?: string;
    gParentClass?: string;
    iconClass?: string;
    onClose?(): void;
}

const proxima = localFont({
    src: [
        {
            path: '../../public/assets/fonts/ProximaNova-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/assets/fonts/ProximaNova-Semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../public/assets/fonts/ProximaNova-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/assets/fonts/ProximaNova-Regular.woff2',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-proxima'
});

export default function BasicModal({
    show,
    gParentClass,
    hide,
    children,
    className,
    icon,
    parentClass,
    responsiveParent,
    onClose,
    iconClass,
    hideCloseButton = false
}: IProps) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog
                as="div"
                className={`${gParentClass} ${responsiveParent} fixed inset-0 z-[1000] flex transform items-center justify-center transition-all`}
                onClose={() => {
                    hide(false);
                    if (onClose) onClose();
                }}
            >
                <div className="AtScrollHide flex h-screen min-h-screen w-full items-center overflow-auto px-4 py-4 text-center sm:block sm:p-0">
                    <Transition.Child>
                        <Dialog.Overlay className="transition-opacity-0 fixed inset-0 bg-black/80" />
                    </Transition.Child>
                    <span className="hidden align-middle sm:inline-block sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        className={`AtScrollHide my-auto w-full transform rounded-md bg-transparent sm:absolute sm:top-1/2 sm:left-1/2 sm:mx-0 sm:flex sm:h-screen sm:w-auto sm:-translate-y-1/2 sm:-translate-x-1/2 sm:items-center sm:justify-center sm:overflow-y-auto sm:transition-all ${parentClass}`}
                        enter={`${!parentClass && 'sm:transition sm:transform sm:duration-200 sm:ease-linear'} `}
                        enterFrom={`${!parentClass && 'sm:translate-y-0'}`}
                        enterTo={`${!parentClass && 'sm:-translate-y-1/2'} `}
                        leave={`sm:transition sm:transform sm:duration-200 sm:ease-linear'`}
                    >
                        <div
                            className={`${className} ${proxima.className} modol-shadow inline-block w-full transform rounded-md bg-white text-left align-middle transition-all dark:bg-bgcolor md:w-auto xs:w-full`}
                        >
                            <div className={` ${icon} absolute top-[1.438rem] right-4 z-30`}>
                                {!hideCloseButton && show && (
                                    <IoMdClose
                                        className={`${iconClass} h-6 w-6 cursor-pointer hover:text-gray-500 dark:text-chinesesilver`}
                                        aria-hidden="true"
                                        onClick={() => {
                                            hide(false);
                                            if (onClose) onClose();
                                        }}
                                    />
                                )}
                            </div>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}