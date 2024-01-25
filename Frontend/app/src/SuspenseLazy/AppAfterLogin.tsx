import type { AppProps } from 'next/app';
import ChainContextProvider from '@context/ChainContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'src/store/selectors';
import { memo, useEffect } from 'react';
import { fetchUser, login, logout, setUser } from 'src/store/reducers/auth.reducer';
import { cryptoKey } from '@utils/functions';
import MainLayout from 'src/hashtaglayout/MainLayout';
import { useRouter } from 'next/router';

const AppAfterLogin = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const { user, isAuth } = useSelector(authSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const user = localStorage.getItem('user');
        if (jwt && user) {
            console.log('called');

            try {
                const decryptedUserData = CryptoJS.AES.decrypt(user, cryptoKey.key).toString(CryptoJS.enc.Utf8);
                dispatch(setUser(JSON.parse(decryptedUserData)));

                dispatch(fetchUser());
                dispatch(login(jwt));
            } catch (error) {
                console.log(error, 'error');

                if (error?.message?.includes('Malformed UTF-8')) {
                    dispatch(logout());
                    // handleLogOut()
                }
            }
        }
    }, []);

    return (
        <ChainContextProvider>
            <MainLayout>
                <Component {...pageProps} />
                {router.pathname == '/_error' || router.pathname == '/404' || router.pathname == '/500' || router.pathname == '/301' ? (
                    ''
                ) : (
                    <>{isAuth && user && <></>}</>
                )}
            </MainLayout>
        </ChainContextProvider>
    );
};

export default memo(AppAfterLogin);
