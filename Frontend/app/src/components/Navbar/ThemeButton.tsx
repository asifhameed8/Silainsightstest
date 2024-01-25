import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useCookies } from 'react-cookie';
import { authSelector } from 'src/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { EDIT_PROFILE } from 'src/graphql/user';
import { setUser } from 'src/store/reducers/auth.reducer';
import Cookies from 'js-cookie';

const ThemeButton = ({ active }: any) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [toggleTimeout, setToggleTimeout] = useState<any>(null);
    const [, setCookie] = useCookies(['theme']);
    const { user } = useSelector(authSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.backgroundTheme) {
            setTheme(user.backgroundTheme);
            // Cookies.set('theme', user.backgroundTheme, {
            //     sameSite: 'None',
            //     secure: true
            // });
            setCookie('theme', user.backgroundTheme); // Set the default theme cookie if it doesn't exist
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user?.backgroundTheme) {
            setTheme(user.backgroundTheme);
            Cookies.set('theme', user.backgroundTheme, {
                sameSite: 'None',
                secure: true
            });
            // setCookie('theme', user.backgroundTheme); // Set the default theme cookie if it doesn't exist
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const [editProfileMu] = useMutation(EDIT_PROFILE, {
        onCompleted: (data) => {
            if (data.editProfile) {
                dispatch(setUser({ ...user, ...data.editProfile }));
            }
        }
    });

    const toggleTheme = (theme: string) => {
        setTheme(theme);
        // setCookie('theme', theme); // Set the default theme cookie if it doesn't exist
        Cookies.set('theme', theme, {
            sameSite: 'None',
            secure: true
        });
        clearTimeout(toggleTimeout);
        let temp = setTimeout(() => user && editProfileMu({ variables: { data: { backgroundTheme: theme } } }), 1300);
        setToggleTimeout(temp);
    };

    return (
        //     className="h-8 rounded-md !border-transparent bg-primary/25 py-2.5 px-4 text-xs font-semibold leading-0 text-primary hover:!bg-primary/30"
        // >
        //     }
        // </Button>
        <div
            className={`${active ? '' : ''} flex cursor-pointer items-center gap-2 py-2.5 px-4 hover:bg-lightHover dark:hover:bg-dark`}
            onClick={() => toggleTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <BsFillSunFill className="flex-shrink-0 cursor-pointer text-base text-secondary" />
            ) : (
                <BsFillMoonFill className="flex-shrink-0 cursor-pointer text-base text-secondary" />
            )}
            {/* <i className="icon-logout flex-shrink-0 cursor-pointer text-base text-secondary" /> */}
            <p className="text-sm text-black dark:text-white ">{resolvedTheme === 'dark' ? 'Light Theme' : 'Dark Theme'} </p>
        </div>
    );
};

export default ThemeButton;
