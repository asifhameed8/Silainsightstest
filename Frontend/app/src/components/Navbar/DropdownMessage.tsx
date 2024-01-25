import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_NOTIFICATIONS, GET_UNSEEN_COUNTS, MARK_ALL_NOTIFICATION_AS_SEEN, MARK_NOTIFICATION_AS_SEEN } from 'src/graphql/notifications';

interface IData {
    title: string;
    href: string;
}
interface Iprops {
    btnClass?: string;
    listData?: IData[];
    ParentClass?: string;
}

const DropdownMessage = ({ btnClass, listData, ParentClass }: Iprops) => {
    const router = useRouter();
    /*eslint-disable*/
    const { data: counts, refetch: refetchCount } = useQuery(GET_UNSEEN_COUNTS);

    const { refetch } = useQuery(GET_ALL_NOTIFICATIONS, {
        variables: {
            query: {},
            limit: 10,
            cursor: null
        }
    });
    /*eslint-disable*/
    const [markAsRead] = useMutation(MARK_NOTIFICATION_AS_SEEN, {
        refetchQueries: [GET_UNSEEN_COUNTS, GET_ALL_NOTIFICATIONS],
        onCompleted: () => {
            refetch();
        }
    });

    const [markAllAsRead] = useMutation(MARK_ALL_NOTIFICATION_AS_SEEN, {
        refetchQueries: [GET_UNSEEN_COUNTS, GET_ALL_NOTIFICATIONS],
        onCompleted: () => {
            refetch();
        }
    });

    return (
        <>
            <Menu as="div" className={`${ParentClass} relative`}>
                <Menu.Button className="group">
                    <i
                        className={`${btnClass} icon-more relative block rotate-90 py-2 text-[4px] hover:text-secondary dark:text-chinesesilver dark:hover:text-primary `}
                    ></i>
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
                    <Menu.Items className="DropDownShadow absolute right-0 z-30 mt-1 w-[224px] origin-top-right cursor-pointer overflow-hidden rounded-md bg-white dark:bg-bgDark">
                        {listData?.map((item, i) => (
                            <Menu.Item key={i + 'c'}>
                                {({ active }) => (
                                    <div
                                        onClick={() => {
                                            if (i == 0) {
                                                markAllAsRead();
                                            } else {
                                                router.push(item.href);
                                                close();
                                            }
                                        }}
                                        key={i}
                                        className={clsx(
                                            i == listData.length - 1 ? '' : 'border-b border-lightBorder dark:border-borderColor',
                                            `flex items-center gap-3 px-4 py-3 hover:bg-lightHover dark:hover:bg-dark`
                                        )}
                                    >
                                        <a key={item.title} href="#" className={clsx(active ? '' : '', 'block text-sm dark:text-white')}>
                                            {item.title}
                                        </a>
                                    </div>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};
export default DropdownMessage;
