import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProfileDropDown from './ProfileDropdown';
import { Container } from '@components/Container';
import { useSelector } from 'react-redux';
import { useThemeContext } from 'src/contexts/ThemeContext';
import { authSelector } from 'src/store/selectors';
import ImageComponent from '@components/ImageComponent';
import OutSideClick from 'react-outside-click-handler';
import UserAvatar from '@components/UserAvatar';
import useTranslation from 'next-translate/useTranslation';
const MobileNavigation = [
    {
        name: 'Home',
        href: '/',
        icon: 'icon-home',
        id: 'home'
    },
    {
        name: 'Search',
        href: '/search',
        icon: 'icon-search'
    },
    {
        name: 'Marketplace',
        href: '/explore',
        icon: 'icon-marketplace'
    },
    {
        name: 'Stage',
        href: '#',
        icon: 'icon-microon'
    }
];
interface Iprops {
    show?: boolean;
}
export default function Navbar({ show }: Iprops) {
    const { t } = useTranslation('common');

    const Navigation = [
        {
            name: t('header.home'),
            href: '/',
            icon: 'icon-home'
        }
    ];
    const router = useRouter();
    const [connect, setConnect] = useState(false);
    const theme = useThemeContext();
    const [popup, setPopup] = useState(false);
    const [state, setState] = useState(0);
    const [navbar, setNavbar] = useState(false);
    const { user } = useSelector(authSelector);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        const handleScroll = () => {
            if (window.scrollY > 0 && isIOS == true) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;

            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return (
        <>
            <div
                className={`${router.pathname == '/metaverse' ? '' : 'mb-2 md:mb-5'} ${
                    router.pathname == '/' || show == true ? '' : 'hidden sm:block '
                } 
                    ${scrollDirection === 'down' ? 'top-0 xs:-top-24' : 'top-0'}
                    relative !z-50 h-[86px] bg-white duration-300 sm:sticky xs:sticky  ${
                        show ? 'dark:bg-[#242F3D] xs:dark:bg-bgcolor' : 'dark:bg-bgDark xs:dark:bg-bgcolor'
                    }
                    ${router.pathname == '/private' && '!hidden'}
                    `}
            >
                <Container>
                    <nav className="py-4">
                        <div className="mx-auto justify-between md:flex md:items-center">
                            <div className="flex w-full items-center justify-center md:block md:w-[24.68rem] md:justify-between">
                                <Link legacyBehavior href="/">
                                    {theme === 'dark' ? (
                                        <>
                                            <Link href="/" className=" hidden items-center gap-1 sm:flex">
                                                <ImageComponent
                                                    src="/assets/images/logo.svg"
                                                    figclassname="h-[48px] w-[216px] "
                                                    fill
                                                    alt="MintStargram"
                                                    priority
                                                    className="cursor-pointer object-contain"
                                                />
                                                <div className=" flex h-4 flex-shrink-0 items-center justify-center rounded bg-secondary p-1 text-xs font-bold text-white xs:hidden">
                                                    BETA
                                                </div>
                                            </Link>
                                            <Link href={`${process.env.NEXT_PUBLIC_URL}/`}>
                                                <ImageComponent
                                                    src="/assets/images/mobilelogo.svg"
                                                    figclassname="h-[24px] w-[24px] mt-3.5 sm:hidden block"
                                                    fill
                                                    alt="MintStargram"
                                                    priority
                                                    className="cursor-pointer object-contain"
                                                />
                                            </Link>
                                        </>
                                    ) : (
                                        <ImageComponent
                                            src="/assets/images/lightLogo.svg"
                                            figclassname="h-[48px] w-[216px]"
                                            priority
                                            fill
                                            alt="MintStargram"
                                            className="mt-0.5 cursor-pointer object-contain"
                                        />
                                    )}
                                </Link>
                                <div className="hidden">
                                    <button
                                        className="borderr-borderColor flex h-7 w-7 items-center justify-center rounded-md border p-1.5 text-primary outline-none focus:border focus:border-secondary sm:h-9 sm:w-9"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <i className="icon-close text-xs text-secondary"></i>
                                        ) : (
                                            <i className="icon-grid text-xs text-primary"></i>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div
                                className={`w-full justify-center overflow-hidden duration-300 ease-linear md:flex md:w-[37.5rem] ${
                                    navbar ? 'h-[34vh] pt-2 md:h-auto md:pb-0 md:pt-0 ' : 'mt-0  h-0  md:h-auto'
                                }`}
                            >
                                <div className="flex flex-col gap-6 md:flex-row md:items-end ">
                                    {Navigation?.map((item, i) => (
                                        <Link
                                            href={item.name == 'Metaverse' ? (user ? '/metaverse' : '#') : item.href}
                                            key={i + 'm'}
                                            onClick={() => {
                                                if (item.name == 'Metaverse' && !user) {
                                                    setPopup(true);
                                                    setState(10);
                                                } else {
                                                    return;
                                                }
                                            }}
                                        >
                                            <ul className="group ">
                                                <li
                                                    className={`${
                                                        router.pathname == item.href
                                                            ? ' bg-primary/25 font-bold text-black dark:text-primary'
                                                            : 'font-semibold text-lightPlaceholder dark:text-white'
                                                    } flex w-full items-center gap-x-2 rounded-md p-2 text-center text-base group-hover:bg-primary/25 group-hover:text-primary  md:w-auto`}
                                                >
                                                    <i
                                                        className={`${item.icon} ${
                                                            router.pathname == item.href
                                                                ? ' text-black dark:text-primary'
                                                                : 'text-lightPlaceholder dark:text-white'
                                                        }  text-[16px] ${i === 2 && 'text-[22px]'} ${
                                                            i == 3 && 'text-[20px]'
                                                        } group-hover:text-primary`}
                                                    ></i>
                                                    {item.name}
                                                </li>
                                            </ul>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="absolute top-6 right-4 flex w-[92%] items-center justify-end gap-3 md:relative md:top-0 md:right-0 md:w-[27rem] md:gap-3"
                                onClick={() => setConnect(!connect)}
                            >
                                {user ? (
                                    <>
                                        <div className="hidden md:block">
                                            <ProfileDropDown />
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </nav>
                </Container>
            </div>
            <div
                id="app-main-footer-mobile"
                className={`${scrollDirection === 'down' ? ' bg-bgDark/50 backdrop-blur-[6px]' : 'bg-bgDark'} ${scrolling ? '!pb-12' : ''}
                 app-main-footer-mobile fixed bottom-0 !z-[100] block w-full border-t border-borderColor px-6 pb-9 pt-3 duration-300 md:hidden`}
            >
                <OutSideClick onOutsideClick={() => {}}>
                    {/* ***************************** Stage dropdown ************************************ */}

                    {/* ***************************** Menue Bar ************************************ */}
                    <div className={`flex items-center justify-between gap-5 ${router.pathname == '/private' && 'hidden'}`}>
                        {MobileNavigation?.map((item, i) => (
                            <Link
                                href={item.href}
                                key={i + 'm'}
                                className={`${item.name === 'Stage' ? 'stage-icon-mobile-view' : ''}  ${
                                    item.name === 'CreatPost' ? 'post-feed-create-icon-active' : ''
                                } leading-0`}
                            ></Link>
                        ))}

                        {user && (
                            <Link href={`/@${user?.userName}`} as={`/@${user?.userName}`}>
                                <UserAvatar user={user} height={24} width={24} />
                            </Link>
                        )}
                    </div>
                </OutSideClick>
            </div>
        </>
    );
}
