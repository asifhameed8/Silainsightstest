import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { IUser } from 'src/interfaces';
interface IData {
    title: string;
    icon: string;
    disable?: boolean;
    function?: Function;
}
interface Iprops {
    btnClass?: string;
    listData?: IData[];
    ParentClass?: string;
    setBlock: (block: boolean) => void;
    user: IUser;
    block?: boolean;
    mobile?: boolean;
}

const DropdownProfile = ({ btnClass, listData, ParentClass, user, setBlock, block, mobile }: Iprops) => {
    return (
        <>
            <Menu as="div" className={`${ParentClass} relative `}>
                <Menu.Button className="group">
                    {mobile ? (
                        <i className={`${btnClass} icon-more relative block rotate-90 text-[3.4px] dark:text-chinesesilver`}></i>
                    ) : (
                        <div className=" flex  h-[2.125rem] w-[2.125rem] items-center justify-center rounded-md  border-lightBorder hover:bg-primary/20 dark:border-borderColor sm:border">
                            <i
                                className={`${btnClass} icon-more relative block rotate-90 py-2 text-[3.4px] hover:text-secondary dark:text-chinesesilver dark:hover:text-primary `}
                            ></i>
                        </div>
                    )}
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={`${
                            mobile
                                ? 'fixed inset-x-0 bottom-0 h-[207px]  w-full bg-gray17  pt-6'
                                : 'absolute right-0 w-[224px] origin-top-right bg-white dark:bg-bgDark'
                        } DropDownShadow !z-50 mt-1 cursor-pointer overflow-hidden rounded-md `}
                    >
                        {listData?.map(
                            (item, i) =>
                                !item?.disable && (
                                    <Menu.Item key={i + 'c'}>
                                        {({ active }) => (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    i == 1 && setShow(true);
                                                    item?.function && item.function();
                                                    if (i == 0) {
                                                        setState(1);
                                                        setPopup(true);
                                                    }
                                                }}
                                                className={clsx(
                                                    i == listData.length - 1 ? '' : 'border-b border-lightBorder dark:border-borderColor',
                                                    `flex items-center gap-3 px-4 py-3 hover:bg-lightHover dark:hover:bg-dark`
                                                )}
                                            >
                                                <i className={`text-secondary ${item.icon}`}></i>
                                                <a key={item.title} href="#" className={clsx(active ? '' : '', 'block text-sm dark:text-white')}>
                                                    {item.title}
                                                </a>
                                            </div>
                                        )}
                                    </Menu.Item>
                                )
                        )}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};
export default DropdownProfile;
