import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState, memo } from 'react';
import { useApolloClient } from '@apollo/client';
import { authSelector } from 'src/store/selectors';
import { Menu } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/store/reducers/auth.reducer';
import UserAvatar from '@components/UserAvatar';
import SocketContext from 'src/contexts/SocketContext';
import { Sockets } from 'src/hoc/withSocket';
import { LOGOUT_FROM_ADMIN } from 'src/services/socket/events';
interface Iprops {
    mobile?: boolean;
    isProfile?: boolean;
}
const ProfileDropDown = ({ mobile, isProfile }: Iprops) => {
    // const { handleLogOut } = useDynamicContext();

    const { user } = useSelector(authSelector);
    const sockets: Sockets = useContext(SocketContext);
    const [popup, setPopup] = useState(false);
    const [state, setState] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter();
    const apolloClient = useApolloClient();
    const [menuOpen, setMenuOpen] = useState(false);

    const logoutFunc = () => {
        dispatch(logout());
        apolloClient.resetStore();
        router.push('/');
        // localStorage.removeItem('ShowAddToHomeScreen')
    };

    // ----------------- LOGOUT FROM ADMIN -----------------------

    useEffect(() => {
        if (sockets.namespace2) {
            sockets.namespace2.on(LOGOUT_FROM_ADMIN, (data) => {
                if (data?.data) {
                    if (data?.data == user._id) {
                        logoutFunc();
                    }
                } else if (typeof data == 'string') {
                    if (data == user._id) {
                        logoutFunc();
                    }
                }
            });
        }

        return () => {
            if (sockets.namespace2) {
                sockets.namespace2.off(LOGOUT_FROM_ADMIN);
            }
        };
    }, [sockets]);

    // ------------------ NOTIFICATION SETTINGS ------------------

    useEffect(() => {
        if (user && router.query?.email_settings == 'true') {
            setPopup(true);
            setState(2);
        }

        return () => {
            if (router.query?.email_settings == 'true') {
                const newPathObject = {
                    pathname: router.pathname,
                    query: ''
                };
                router.push(newPathObject, undefined, { shallow: true });
            }
        };
    }, [router.query?.email_settings]);

    // ----------------- CONTENT CREATER ----------------

    return (
        <>
            <Menu as="div" className="relative leading-0">
                <Menu.Button>
                    {isProfile ? (
                        <i className="icon-settings text-lg text-white"></i>
                    ) : (
                        <>
                            <Link href={`/@${user?.userName}`}>
                                <div className="block 2xl:hidden">
                                    <UserAvatar user={user} height={36} width={36} />
                                </div>
                                <div className="hidden items-center gap-2 2xl:flex" onClick={() => setMenuOpen(!menuOpen)}>
                                    <UserAvatar user={user} height={36} width={36} />
                                    <h3 className="text-sm font-bold text-black dark:text-white">{user?.userName}</h3>
                                    {/* <i className={` ${menuOpen ? ' rotate-180' : ''} icon-dropdownTick text-[8px]`}></i> */}
                                </div>
                            </Link>
                        </>
                    )}
                </Menu.Button>
            </Menu>
        </>
    );
};

export default memo(ProfileDropDown);
