import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from 'src/services/graphql';
import { ThemeProvider } from 'next-themes';
import NiceModal from '@ebay/nice-modal-react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { authSelector } from 'src/store/selectors';
import { logout, setUser, login, fetchUser } from 'src/store/reducers/auth.reducer';
import axios from 'axios';
import { VERIFY_EMAIL_MUTATION } from 'src/graphql/auth';
import { print } from 'graphql';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
// import { REFETCH_USER_MUTATION } from 'src/graphql/user';
import withSocket from 'src/hoc/withSocket';
import { IUser } from 'src/interfaces';
import ReferralContextProvider from '@context/ReferralContextProvider';

const Providers = ({ children }: { children: React.ReactNode; pageProps: AppProps; user: IUser | null }) => {
    const dispatch = useDispatch();
    const { user, jwt: access_token } = useSelector(authSelector);
    const params = useSearchParams();

    // ------------- VERIFY EMAIL ----------------

    let userId = params?.get('userId');
    let token = params?.get('token');
    let referral = params?.get('ref');

    let source = process.env.NEXT_PUBLIC_MARKETPLACE_SOURCE;

    if (!source && process.env.NEXT_PUBLIC_URL) {
        try {
            const url = new URL(process.env.NEXT_PUBLIC_URL);
            source = url.host;
        } catch (e) {
            console.log(e);
        }
    }

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
                            // password protection
                            // dispatch(setUser(data.data.verifyEmail.loginResult.user));
                            // dispatch(login(data.data.verifyEmail.loginResult.access_token));
                            localStorage.setItem('jwt', data.data.verifyEmail.loginResult.access_token);
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
        if (referral) {
            localStorage.setItem('referral', JSON.stringify(referral));
        }
    }, [userId]);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const user = localStorage.getItem('user');
        if (jwt && user) {
            dispatch(setUser(JSON.parse(user)));
            dispatch(fetchUser());
            dispatch(login(jwt));
        }
    }, []);

    // ------- TOKEN LOGOUT ----------

    useEffect(() => {
        // dispatch(getAuth());
        if (access_token) {
            const decoded = jwt.decode(access_token) as JwtPayload;
            const currentTime = Date.now() / 1000;

            if (decoded?.exp && decoded?.exp < currentTime) {
                dispatch(logout());
            }
        }
    }, []);

    // -------- TAN STACK --------

    let queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 6,
                retry: false,
                refetchOnReconnect: false,
                refetchOnWindowFocus: false
            }
        }
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ApolloProvider client={initializeApollo()}>
                    <ThemeProvider attribute="class " defaultTheme="dark">
                        <ReferralContextProvider>
                            <ReferralContextProvider>
                                <NiceModal.Provider>{children}</NiceModal.Provider>
                            </ReferralContextProvider>
                        </ReferralContextProvider>
                    </ThemeProvider>

                    <ToastContainer />
                </ApolloProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default withSocket(Providers);
