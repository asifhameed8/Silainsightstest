import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { HYDRATE } from 'next-redux-wrapper';
import { REFETCH_USER_MUTATION } from 'src/graphql/user';
// import { initializeApollo } from 'src/services/graphql';
import Cookies from 'js-cookie';
import { print } from 'graphql';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import { cryptoKey } from '@utils/functions';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
    user: null,
    jwt: Cookies.get('jwt') || null,
    isAuth: false,
    onlineUsers: []
});

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setOnlineUsers(state, action) {
            return {
                ...state,
                onlineUsers: action.payload
            };
        },
        setUser(state, action) {
            if (action.payload) {
                const encryptedUserData = CryptoJS.AES.encrypt(JSON.stringify(action.payload), cryptoKey.key).toString();
                typeof window !== 'undefined' && window.localStorage.setItem('user', encryptedUserData);
                Cookies.set('user', action.payload._id, {
                    sameSite: 'None',
                    secure: true
                });
                return {
                    ...state,
                    user: action.payload,
                    userLoading: false,
                    isAuth: true
                };
            }
        },
        userLoading(state) {
            return {
                ...state,
                userLoading: true
            };
        },

        login(state, action) {
            if (action.payload) {
                typeof window !== 'undefined' && window.localStorage.setItem('jwt', action.payload);
                // Cookies.set('jwt', action.payload);
                Cookies.set('jwt', action.payload, {
                    sameSite: 'None',
                    secure: true
                });
            }
        },
        logout(state) {
            localStorage.removeItem('user');
            localStorage.removeItem('jwt');
            localStorage.removeItem('referral');
            localStorage.removeItem('highestScore');

            // logout from dynamic
            localStorage.removeItem('dynamic_auth_mode');
            localStorage.removeItem('dynamic_authenticated_user');
            localStorage.removeItem('dynamic_authentication_token');
            // ---- logout from dynamic -----
            Cookies.remove('user');
            Cookies.remove('jwt');
            const controller = new AbortController();
            controller.abort();
            // window.location.href = '/';
            return {
                ...state,
                jwt: null,
                user: null,
                isAuth: false
            };
        },
        setAuth(state, action) {
            state.auth = action.payload;
        },
        clearAuth(state) {
            state.auth = null;
        },
        setSettings(state, action) {
            const encryptedUser = localStorage.getItem('user');
            const decreptedUserData = CryptoJS.AES.decrypt(encryptedUser, cryptoKey.key).toString(CryptoJS.enc.Utf8);
            let user = JSON.parse(decreptedUserData);

            let updatedUser = { ...user, settings: { ...user.settings, ...action.payload } };
            if (updatedUser) {
                let againEncrept = CryptoJS.AES.encrypt(JSON.stringify(updatedUser), cryptoKey.key).toString();
                localStorage.setItem('user', againEncrept);
            }
            return {
                ...state,
                user: user ? { ...user, settings: { ...user.settings, ...action.payload } } : state.user
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
                ...action.payload.auth
            };
        });
    }
});

export const { setOnlineUsers, setUser, userLoading, login, logout, setAuth, clearAuth, setSettings } = userSlice.actions;

export default userSlice.reducer;

// Thunk Actions

// export const fetchUser = () => async (dispatch) => {
//     dispatch(userLoading());
//     const jwt = localStorage.getItem('jwt');
//     if (!jwt) {
//         dispatch(logout());
//         return;
//     }

//     try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`, {
//             headers: {
//                 Authorization: `Bearer ${jwt}`
//             }
//         });
//         dispatch(setUser(response.data?.data));
//     } catch (error) {
//         dispatch(logout());
//     }
// };

export const fetchUser = (perameters) => async (dispatch) => {
    // const jwt = localStorage.getItem('jwt');
    const jwt = localStorage.getItem('dynamic_authentication_token') ? JSON.parse(localStorage.getItem('dynamic_authentication_token')) : null;
    if (!jwt) {
        dispatch(logout());
        return;
    }

    try {
        // const client = initializeApollo();
        const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}`,
            {
                query: print(REFETCH_USER_MUTATION),
                variables: perameters?.referral
                    ? {
                          referral: perameters.referral
                      }
                    : {}
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );

        //  await client.mutate({
        //     mutation: REFETCH_USER_MUTATION,
        //     context: {
        //         headers: {
        //             Authorization: `Bearer ${jwt}`
        //         }
        //     }
        // });
        if (data?.data?.refetchUser?.user) {
            dispatch(setUser(data?.data?.refetchUser.user));
        }
        if (data?.errors && data?.errors?.length > 0 && data?.errors[0]?.message) {
            if (
                data?.errors[0]?.message == 'You are blocked from administrative' ||
                data?.errors[0]?.message == 'You are banned from administrative'
            ) {
                toast.error(data?.errors[0]?.message);
            }
            // handleLogOut()
        }
    } catch (error) {
        // Handle error if necessary
        console.error('Error fetching user data:', error);
        dispatch(logout());
    }
};

export const createUser = () => async (dispatch) => {
    dispatch(userLoading());
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`);
        dispatch(setUser(response.data?.data));
    } catch (error) {
        dispatch(logout());
    }
};

export const updateUser = () => async (dispatch) => {
    dispatch(userLoading());
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
        dispatch(logout());
        return;
    }

    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch(setUser(response.data?.data));
    } catch (error) {
        dispatch(logout());
    }
};

export const getAuth = () => async (dispatch) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        dispatch(setAuth(token));
    } else {
        dispatch(clearAuth());
    }
};

// Selectors
export const user = userAdapter.getSelectors((state) => state.user);
