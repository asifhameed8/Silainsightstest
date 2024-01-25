import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
import '../src/styles/icomoon.css';
import '@rainbow-me/rainbowkit/styles.css';
import localFont from 'next/font/local';
import { wrapper } from 'src/store/index';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { Router } from 'next/router';
import ThemeProvider from 'src/contexts/ThemeContext';
import { authSelector } from 'src/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from 'src/services/graphql';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NiceModal from '@ebay/nice-modal-react';
import AppAfterLogin from 'src/SuspenseLazy/AppAfterLogin';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { VERIFY_EMAIL_MUTATION } from 'src/graphql/auth';
import { print } from 'graphql';
import { login, setUser } from 'src/store/reducers/auth.reducer';
import LandingModule from 'src/modules/landing/LandingModule';

const proxima = localFont({
    src: [
        {
            path: '../public/assets/fonts/ProximaNova-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/assets/fonts/ProximaNova-Semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../public/assets/fonts/ProximaNova-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../public/assets/fonts/ProximaNova-Regular.woff2',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-proxima'
});
const inter = localFont({
    src: [
        {
            path: '../public/assets/fonts/Inter-Regular.ttf',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-inter'
});

interface Props extends AppProps {
    isAuthSSR: boolean;
}
function MyApp({ Component, pageProps, isAuthSSR }: Props) {
    const { user } = useSelector(authSelector);
    const router = useRouter();

    useEffect(() => {
        Router.events.on('routeChangeStart', () => {
            NProgress.start();
        });
        Router.events.on('routeChangeComplete', () => {
            NProgress.done();
        });
        Router.events.on('routeChangeError', () => {
            NProgress.done();
        });
        return () => {
            Router.events.off('routeChangeStart', NProgress.start);
            Router.events.off('routeChangeComplete', NProgress.done);
            Router.events.off('routeChangeError', NProgress.done);
        };
    }, []);

    const isAuthenticated: boolean = typeof window === 'undefined' ? isAuthSSR : Cookies.get('jwt') && Cookies.get('user') ? true : false;

    // useEffect(() => {
    //     const currentPath = router.pathname;

    //     if (document.body) {
    //         document.body.dataset.page = currentPath;
    //     }
    // }, [router.pathname]);

    // ------------- VERIFY EMAIL ----------------

    const params = useSearchParams();
    const dispatch = useDispatch();

    let userId = params?.get('userId');
    let token = params?.get('token');

    const verifyEmail = () => {
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}`, {
                query: print(VERIFY_EMAIL_MUTATION),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            })
            .then((response) => {
                const data = response?.data;
                if (data?.data && data?.data?.verifyEmail?.success) {
                    if (token) {
                        if (user) {
                            dispatch(setUser({ ...user, isEmailVerified: true }));
                            dispatch(login(token));
                            toast.success(data.data.verifyEmail.message);
                        } else {
                            toast.success(data.data.verifyEmail.message);
                            dispatch(setUser(data.data.verifyEmail.loginResult.user));
                            dispatch(login(data.data.verifyEmail.loginResult.access_token));
                            localStorage.setItem('jwt', data.data.verifyEmail.loginResult.access_token);

                            const newPathObject = {
                                pathname: router.pathname,
                                query: ''
                            };
                            router.push(newPathObject, undefined, { shallow: true });
                        }
                    }
                } else if (data.errors) {
                    toast.error(data.errors[0].message);
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    useEffect(() => {
        userId && token && verifyEmail();
    }, [userId]);

    return (
        <>
            <ThemeProvider>
                <main className={`${proxima.variable} ${inter?.variable} ${user ? 'bg-[#F4F4F4] dark:bg-bgcolor' : 'bg-bgcolor'}  font-display `}>
                    <ApolloProvider client={initializeApollo()}>
                        {!isAuthenticated ? (
                            <AppAfterLogin Component={Component} pageProps={pageProps} />
                        ) : (
                            <NiceModal.Provider>
                                <LandingModule />
                                <ToastContainer />
                            </NiceModal.Provider>
                        )}
                    </ApolloProvider>
                </main>
            </ThemeProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext: any) => {
    // Call your function here before rendering the app
    const cookies = cookie.parse(appContext.ctx.req?.headers.cookie || '');
    const appProps = await App.getInitialProps(appContext);
    const { jwt, user } = cookies;
    if (jwt && user) {
        return {
            ...appProps,
            isAuthSSR: true
        };
    }
    return { ...appProps, isAuthSSR: false };
};

export default wrapper.withRedux(MyApp);
