import Input from '@components/Forms/Input';
import { Button } from '@components/Button';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GOOGLE_LOGIN_MUTATION, LOGIN_MUTATION } from 'src/graphql/auth';
import { login, setUser } from 'src/store/reducers/auth.reducer';
import { toast } from 'react-toastify';
import { CodeResponse } from '@react-oauth/google';
import GoogleLogin from './GoogleLogin';
import NiceModal from '@ebay/nice-modal-react';
import TwoFALogin from '@modals/AuthenticationFactor/2FALogin';
import Link from 'next/link';
import { EmailFilledIcon, LockFilledIcon } from '@components/_Icons/FilledIcon';
// import TwitterIcon from '@components/_Icons/TwitterIcon';
import TwitterLogin from './TwitterLogin';
import useTranslation from 'next-translate/useTranslation';
import { useCookies } from 'react-cookie';

interface IProps {
    setState?: Function;
    setPopup?: Function;
    setData?: Function;
    data?: { email: string };
    landing?: boolean;
}

const Login = ({ setState, setPopup, setData, data, landing }: IProps) => {
    const { t } = useTranslation('common');
    // eslint-disable-next-line no-unused-vars
    const [_, setCookie] = useCookies();

    // -------------------------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // -------------------------------------

    const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted: (data) => {
            setCookie('jwt', data?.login?.access_token);
            setCookie('user', data?.login?.user?._id);
            dispatch(login(data?.login?.access_token));
            if (data?.login?.twoFa) {
                NiceModal.show(TwoFALogin);
                !landing && setPopup && setPopup(false);
                return;
            }
            // dispatch(setUser(data?.login?.user));
            // password protection
            if (data?.login?.notAffiliated) {
                localStorage.setItem('jwt', data.login?.access_token);
                setState && setState(7);
            } else {
                dispatch(setUser(data?.login?.user));
            }
            !landing && setPopup && setPopup(false);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        if (!email || !password) return toast.warning('Type email and password');
        loginMutation({ variables: { email, password } });
    };
    const atForget = () => {
        setState && (landing ? setState(3) : setState(9));
        setData && setData({ ...data, email: email });
    };

    // ----------------- Google Login -------------------

    const [googleLoginMutation] = useMutation(GOOGLE_LOGIN_MUTATION, {
        onCompleted: (data) => {
            dispatch(login(data?.loginByGoogle?.access_token));

            if (data?.loginByGoogle?.twoFa) {
                NiceModal.show(TwoFALogin);
                !landing && setPopup && setPopup(false);
                return;
            }
            // password protection
            if (data?.loginByGoogle?.notAffiliated) {
                localStorage.setItem('jwt', data.loginByGoogle?.access_token);
                setState && setState(7);
            } else {
                dispatch(setUser(data?.loginByGoogle?.user));
            }
            // dispatch(setUser(data?.loginByGoogle?.user));

            !landing && setPopup && setPopup(false);
            // modal.remove();
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const googleLogin = async (data: CodeResponse) => {
        await googleLoginMutation({ variables: { token: data.code } });
    };

    return (
        <div className={`${landing ? '' : 'sm:w-[38rem] md:w-[45.125rem] lg:w-[54.25rem]'} w-full pb-6 pt-4 sm:px-4  sm:pb-16 lg:py-4 `}>
            <div className={` ${landing ? '' : 'grid grid-cols-1 gap-6 sm:grid-cols-2'} `}>
                <div className="mt-3 flex flex-col justify-center">
                    <form action="" onSubmit={handleSubmit} className="space-y-3">
                        <h1 className={`text-center text-xl font-semibold text-black dark:text-white`}>{t('login.welcome')}</h1>
                        {/* <p className="my-3 text-center text-sm font-bold text-white">{t('login.dec')}</p> */}
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder={t('login.email')}
                            name={'email'}
                            size="sm"
                            AddIcon={<EmailFilledIcon />}
                            autocapitalize="none"
                            autoFocus={false}
                            className="h-12"
                        />
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder={t('login.password')}
                            name={'password'}
                            size="sm"
                            type="password"
                            autocapitalize="off"
                            autoFocus={false}
                            className="h-12"
                            AddIcon={<LockFilledIcon />}
                        />
                        <div className="flex items-center justify-end">
                            {/* <div className="flex items-center gap-x-1.5">
                                <FormCheck className="flex items-center gap-2" label="Remember me" labelClass="text-xs text-secondary" />
                            </div> */}
                            <button className=" cursor-pointer font-display text-xs font-bold text-primary" type="button" onClick={atForget}>
                                {t('login.forgot_password')}
                            </button>
                        </div>
                        <Button isLoading={loading} className="h-[38px] w-full" type="submit">
                            {t('login.login')}
                        </Button>
                    </form>

                    <div className="my-3 flex h-[18px] w-full justify-center py-2">
                        <div className="w-[35%] border-t border-borderColor"></div>
                        <span className={`h3 flex w-[8%] items-center justify-center font-semibold text-black dark:text-white `}>
                            {t('login.or')}
                        </span>
                        <div className="w-[35%] border-t border-borderColor"></div>
                    </div>
                    <GoogleLogin onSuccess={googleLogin} />
                    <TwitterLogin setState={setState} />
                    {/* <div className={` mt-3 flex h-[38px] cursor-pointer items-center  justify-center gap-x-3 rounded-md bg-bgDark`}>
                        <TwitterIcon />
                        <p className={`h3 text-white `}>X-formally Twitter</p>
                    </div> */}

                    <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} h3 mt-4 text-center `}>
                        {t('login.dont_account')}
                        {/* Don&apos;t have an account?  */}
                        <button
                            className="ml-2 cursor-pointer font-display font-bold  text-primary"
                            onClick={() => {
                                setState && (landing ? setState(2) : setState(11));
                            }}
                        >
                            {t('login.create_account')}
                        </button>
                    </p>
                    <p className="mt-6 hidden text-center text-sm font-semibold sm:block ">
                        {t('login.year')} <Link href="/"> Example.Tech</Link> {t('login.copy_rights')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
