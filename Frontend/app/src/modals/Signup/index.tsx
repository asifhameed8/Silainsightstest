import { Button } from '@components/Button';
import Input from '@components/Forms/Input';
import { CodeResponse } from '@react-oauth/google';
import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GOOGLE_LOGIN_MUTATION, SIGNUP_MUTATION, IS_USERNAME_AVAILABLE, IS_EMAIL_AVAILABLE } from 'src/graphql/auth';
import { login, setUser } from 'src/store/reducers/auth.reducer';
import { toast } from 'react-toastify';
import GoogleLogin from '@modals/Login/GoogleLogin';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from 'src/schema/schema';
import { useRouter } from 'next/router';
import InputError from '@components/Forms/InputError';
import Link from 'next/link';
import { LockFilledIcon, SimpleEmailIcon, UserFilledIcon, UserNameIcon } from '@components/_Icons/FilledIcon';
import FormCheck from '@components/Forms/FormCheck';
import TwitterLogin from '@modals/Login/TwitterLogin';
import useTranslation from 'next-translate/useTranslation';

interface IProps {
    setPopup?: Function;
    setHandleState?: Function;
    landing?: boolean;
}
type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userName: string;
    terms: boolean;
};

const SignUp = ({ setPopup, setHandleState, landing }: IProps) => {
    const { t } = useTranslation('common');

    /* eslint-disable */
    const [checkToggle, setCheckToggle] = useState(false);
    const showAntdModal = () => {
        landing ? setHandleState(2) : setHandleState(10);
    };
    let referral = localStorage.getItem('referral');
    // --------------------------------
    // const [termsStatus,setTermsStatus]=useState('')

    const dispatch = useDispatch();
    /* eslint-disable */
    const [isUsernameAvailableQuery, { data: userData }] = useLazyQuery(IS_USERNAME_AVAILABLE);
    /* eslint-disable */
    const [isEmailAvailableQuery, { data: IsEmail }] = useLazyQuery(IS_EMAIL_AVAILABLE);

    const router = useRouter();
    const [signupMutation, { loading }] = useMutation(SIGNUP_MUTATION, {
        onCompleted: (data) => {
            if (!data.signup.user) {
                if (data.signup?.access_token) {
                    localStorage.setItem('jwt', data.signup?.access_token);
                    setHandleState(7);
                }
                toast.success(data.signup?.message);
            } else {
                // dispatch(setUser(data.signup.user?.user));
                // dispatch(login(data.signup.user?.access_token));
                toast.success(data.signup?.message);

                !landing && setPopup(false);
                router.push('/');

                // modal.remove();
            }
        },
        onError: (error) => {
            if (error.message?.includes('E11000')) {
                toast.error(error.message);
            } else {
                toast.error(error.message);
            }
        }
    });

    //-------------------useForm form handling------------------

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(SignUpSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userName: '',
            terms: false
        },
        mode: 'onChange'
    });

    const onSubmit = (data: FormValues) => {
        if (!data.terms) return toast.warning('Please agree to the terms');
        if (userData?.isUsernameAvailable?.success === true) return toast.warning('Username already exist');
        if (IsEmail?.isEmailAvailable?.success === true) return toast.warning('Email already exist');
        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            userName: data.userName,
            ...(referral && { referral: JSON.parse(referral) })
        };
        signupMutation({ variables: { data: payload } });
    };

    // ----------------- Google Login -------------------

    const [googleLoginMutation] = useMutation(GOOGLE_LOGIN_MUTATION, {
        onCompleted: (data) => {
            dispatch(login(data?.loginByGoogle?.access_token));
            if (data?.loginByGoogle?.notAffiliated) {
                localStorage.setItem('jwt', data.loginByGoogle?.access_token);
                setHandleState(7);
            } else {
                dispatch(setUser(data?.loginByGoogle?.user));
            }
            // dispatch(setUser(data?.loginByGoogle?.user));

            !landing && setPopup(false);
            // modal.remove();
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const googleLogin = (data: CodeResponse) => {
        googleLoginMutation({ variables: { token: data.code } });
    };

    useEffect(() => {
        const userName = getValues('userName');
        const userEmail = getValues('email');
        const delayDebounceFn = setTimeout(() => {
            // const isAvailable = data?.isUsernameAvailable?.success;
            // const emailAvailable = IsEmail?.isEmailAvailable?.success
            errors?.userName?.message === '' ? '' : isUsernameAvailableQuery({ variables: { userName: userName } });
            errors?.email?.message === '' ? '' : isEmailAvailableQuery({ variables: { email: userEmail } });
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    }, [watch('userName'), watch('email')]);

    return (
        <div
            className={`${
                landing ? '' : 'grid grid-cols-1 sm:w-[38rem] md:w-[45.125rem] md:grid-cols-2 lg:w-[54.25rem]'
            }  w-full gap-6 py-6 pt-4 sm:px-4 sm:py-2.5 `}
        >
            <div className="flex flex-col justify-center">
                <h2 className={`text-center text-xl font-semibold text-black dark:text-white`}>
                    {t('signUp.welcome')} <span className="font-bold text-primary"> {t('signUp.starts')}</span>
                </h2>
                {/* <p className="mb-2 text-center text-sm font-bold text-white">{t('signUp.dec')}</p> */}
                <div className="mt-3">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2 gap-2 ">
                            <Input
                                register={register}
                                name={'firstName'}
                                placeholder={t('signUp.first_name')}
                                size="sm"
                                error={errors.firstName && errors.firstName.message?.toString()}
                                autoFocus={false}
                                AddIcon={<UserFilledIcon />}
                                className="h-12"
                            />
                            <Input
                                register={register}
                                placeholder={t('signUp.last_name')}
                                name={'lastName'}
                                size="sm"
                                error={errors.lastName && errors.lastName.message?.toString()}
                                autoFocus={false}
                                AddIcon={<UserFilledIcon />}
                                className="h-12"
                            />
                        </div>
                        <div className="mt-2 ">
                            <Input
                                autoComplete="new-userName"
                                register={register}
                                placeholder={t('signUp.username')}
                                name={'userName'}
                                size="sm"
                                error={
                                    errors.userName
                                        ? errors.userName.message?.toString()
                                        : userData?.isUsernameAvailable?.success === true
                                        ? 'Username already taken'
                                        : ''
                                }
                                autoFocus={false}
                                AddIcon={<UserNameIcon />}
                                className="h-12"
                            />
                        </div>
                        <div className="mt-2">
                            <Input
                                register={register}
                                autoComplete="new-email"
                                placeholder={t('signUp.email')}
                                name={'email'}
                                size="sm"
                                type="email"
                                error={
                                    errors.email
                                        ? errors.email.message?.toString()
                                        : IsEmail?.isEmailAvailable?.success === true
                                        ? 'Email already taken'
                                        : ''
                                }
                                autoFocus={false}
                                AddIcon={<SimpleEmailIcon />}
                                className="h-12"
                            />
                        </div>
                        <div className="mt-2 ">
                            <Input
                                autoComplete="new-password"
                                register={register}
                                placeholder={t('signUp.password')}
                                name={'password'}
                                size="sm"
                                type="password"
                                autocapitalize="off"
                                autoFocus={false}
                                AddIcon={<LockFilledIcon />}
                                className="h-12"
                            />
                            <InputError error={errors.password && errors.password.message?.toString()} />
                        </div>
                        <div className="mt-2.5">
                            <div className="mb-3 flex items-center gap-x-2">
                                <i
                                    className={`icon-check ${
                                        watch('password') == '' ? 'text-davygrey' : watch('password').length >= 8 ? 'text-[#1FFF86]' : 'text-red-500'
                                    }`}
                                ></i>
                                <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} font-display text-xs font-semibold`}>
                                    {t('signUp.validation_1')}
                                </p>
                            </div>

                            <div className="mb-3 flex items-center gap-x-2">
                                <i
                                    className={`icon-check ${
                                        watch('password') == ''
                                            ? 'text-davygrey'
                                            : /(?=.*[A-Z])/.test(getValues('password'))
                                            ? 'text-[#1FFF86]'
                                            : 'text-red-500'
                                    }`}
                                ></i>
                                <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} font-display text-xs font-semibold`}>
                                    {t('signUp.validation_2')}
                                </p>
                            </div>
                            <div className="mb-3 flex items-center gap-x-2">
                                <i
                                    className={`icon-check ${
                                        watch('password') == ''
                                            ? 'text-davygrey'
                                            : /(?=.*\d)/.test(watch('password'))
                                            ? 'text-[#1FFF86]'
                                            : 'text-red-500'
                                    }`}
                                ></i>
                                <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} font-display text-xs font-semibold`}>
                                    {t('signUp.validation_3')}
                                </p>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <i
                                    className={`icon-check ${
                                        watch('userName') == ''
                                            ? 'text-davygrey'
                                            : userData?.isUsernameAvailable?.success == false && !errors.userName
                                            ? 'text-[#1FFF86]'
                                            : 'text-red-500'
                                    }`}
                                ></i>
                                <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} font-display text-xs font-semibold`}>
                                    {t('signUp.validation_4')}
                                </p>
                            </div>

                            <div className="mt-3 flex items-center gap-2">
                                <Controller name="terms" control={control} render={({ field }) => <FormCheck {...field} label={''} />} />
                                <p
                                    className={`${
                                        landing ? 'text-white' : 'text-black dark:text-white'
                                    } font-display text-xs font-semibold leading-0`}
                                >
                                    {t('signUp.agree')}
                                    <a href="https://docs.mintstargram.tech/" target="_blank" className=" font-display  font-bold text-primary">
                                        {t('signUp.terms_conditions')}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <Button className="mt-3 w-full " type="submit" isLoading={loading}>
                            {t('signUp.create_account')}
                        </Button>
                    </form>
                </div>

                <div className=" mt-3 flex h-[18px] w-full justify-center py-2">
                    <div className="w-[36%] border-t border-borderColor"></div>
                    <span
                        className={`${landing ? 'text-white' : 'text-black dark:text-white'} h3 flex w-[25%] items-center justify-center xs:w-[35%]`}
                    >
                        {t('signUp.or')}
                    </span>
                    <div className="w-[36%] border-t border-borderColor"></div>
                </div>

                <div className="mt-3">
                    <GoogleLogin onSuccess={googleLogin} />
                    {/* <div className={` mt-3 flex h-[38px] cursor-pointer items-center  justify-center gap-x-3 rounded-md bg-bgDark`}>
                        <TwitterIcon />
                        <p className={`h3 text-white `}>X-formally Twitter</p>
                    </div> */}
                </div>
                <TwitterLogin setState={setHandleState} />
                <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} h3 mt-4 text-center`}>
                    {t('signUp.already_account')}
                    <button
                        className="ml-2 cursor-pointer font-display font-bold text-primary"
                        onClick={() => {
                            landing ? setHandleState(1) : setHandleState(10);
                        }}
                    >
                        {t('signUp.login')}
                    </button>
                </p>
                {landing ? (
                    ''
                ) : (
                    <p className={`${landing ? 'text-white' : 'text-black dark:text-white'} h3 mt-4 text-center`}>
                        {t('signUp.BySign')} <a className="cursor-pointer font-display text-primary">{t('signUp.Terms')} </a>
                        <Link
                            href="https://docs.mintstargram.tech/organization/data-protection"
                            target="_blank"
                            className="cursor-pointer font-display   text-primary"
                        >
                            {t('signUp.DataProtection')}
                        </Link>
                        <span className={`${landing ? 'text-white' : 'text-black dark:text-white'}`}> {t('Landing.and')}</span>{' '}
                        <Link href="https://docs.mintstargram.tech/" target="_blank" className="cursor-pointer font-display   text-primary">
                            {t('signUp.CookiesPolicy')}
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default SignUp;
