import { useLazyQuery, useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import Input from '@components/Forms/Input';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { EDIT_PROFILE } from 'src/graphql/user';
import { setUser } from 'src/store/reducers/auth.reducer';
import { userSelector } from 'src/store/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditProfileSchema } from 'src/schema/schema';
import Textarea from '@components/Forms/Textarea';
import { IS_USERNAME_AVAILABLE } from 'src/graphql/auth';
import { Discord, Facebook, Instagram, Tiktok, Twitter, WebIcon, Youtube } from '@components/TransparentIcon';
import useTranslation from 'next-translate/useTranslation';
import router from 'next/router';
import { useUserUpdateRequest } from '@dynamic-labs/sdk-react-core';

type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    facebook: string;
    instagram: string;
    twitter: string;
    discord: string;
    youtube: string;
    tiktok: string;
    web: string;
    bio: string;
};
interface ValueProps {
    name: string;
    icon: object;
}
const EditProfile = ({ setPopup }: { setPopup: Function }) => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    /* eslint-disable */
    const [userNameError, setUserNameError] = useState('');
    const [iconFlow, setIconFlow] = useState(false);

    const Icons = [
        { name: 'Facebook', icon: <Facebook /> },
        { name: 'Instagram', icon: <Instagram /> },
        { name: 'Tiktok', icon: <Tiktok /> },
        { name: 'Twitter', icon: <Twitter /> },
        { name: 'Youtube', icon: <Youtube /> },
        { name: 'Discord', icon: <Discord /> },
        { name: 'web', icon: <WebIcon />, placeholder: process.env.NEXT_PUBLIC_URL }
    ];
    const keysWithValues = Object.entries(user || {}).filter(([, value]) => value !== null && value !== undefined && value !== '');
    const keys = keysWithValues.map(([key]) => key);
    const socialItems = Icons.filter((item) => keys.includes(item?.name?.toLowerCase()));

    const [addSocial, setAddSocial] = useState(
        socialItems?.length > 0
            ? socialItems
            : [
                  { name: 'Twitter', icon: <Twitter /> },
                  { name: 'Instagram', icon: <Instagram /> }
              ]
    );
    const addValue = (value: ValueProps) => {
        if (!addSocial.some((item: any) => item.name === value.name)) {
            setAddSocial((prevValues: any) => [...prevValues, value]);
        }
    };

    const deleteSocialItem = ({ name }: ValueProps) => {
        const arr = addSocial.filter((x) => x.name !== name);
        setValue(name?.toLowerCase(), '');
        setAddSocial(arr);
    };

    const filteredIcons = Icons.filter((icon) => !addSocial.some((item) => item.name === icon.name));

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        watch,
        setError,
        setValue
    } = useForm<FormValues>({
        resolver: yupResolver(EditProfileSchema),
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            facebook: user.facebook ? user?.facebook.split('https://www.facebook.com/')[1] : '',
            instagram: user.instagram ? user?.instagram.split('https://www.instagram.com/')[1] : '',
            twitter: user.twitter ? user?.twitter.split('https://www.x.com/')[1] : '',
            discord: user.discord ? user?.discord.split('https://discord.gg/')[1] : '',
            youtube: user.youtube ? user?.youtube.split('https://www.youtube.com/')[1] : '',
            tiktok: user.tiktok ? user?.tiktok.split('https://www.tiktok.com/')[1] : '',
            web: user.web,
            bio: user.bio
        }
    });

    const [editProfileMu, { loading }] = useMutation(EDIT_PROFILE, {
        onCompleted: (data) => {
            if (data.editProfile) {
                dispatch(setUser({ ...user, ...data.editProfile }));
                setPopup(false);
            }
            if (data.editProfile.userName && data.editProfile.userName !== user.userName) {
                router.push(`/@${data.editProfile.userName}`);
            }
        },
        onError: (error) => {
            if (error.message === 'Username already in use!') {
                setUserNameError(error.message);
            } else {
                toast.error(error.message);
            }
        }
    });

    const { updateUser } = useUserUpdateRequest();

    const submit = async (data: FormValues) => {
        // if(errors.userName && errors.userName.message?.toString() && userNameError) return toast.error('Username already in use');
        let payload = {
            ...data,
            ...(!!data.facebook && { facebook: `https://www.facebook.com/${data.facebook}` }),
            ...(!!data.instagram && { instagram: `https://www.instagram.com/${data.instagram}` }),
            ...(!!data.youtube && { youtube: `https://www.youtube.com/${data.youtube}` }),
            ...(!!data.twitter && {
                twitter: data.twitter.includes('twitter.com/') ? data.twitter : `https://www.x.com/${data.twitter}`
            }),
            ...(!!data.tiktok && { tiktok: `https://www.tiktok.com/${data.tiktok}` }),
            ...(!!data.discord && { discord: `https://discord.gg/${data.discord}` })
        };

        try {
            await updateUser({ username: data.userName, firstName: data.firstName, lastName: data.lastName });
            editProfileMu({ variables: { data: payload } });
            setUserNameError('');
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    const [isUsernameAvailableQuery] = useLazyQuery(IS_USERNAME_AVAILABLE, {
        onCompleted: (d) => {
            if (d?.isUsernameAvailable?.success) {
                setError('userName', { message: 'UserName Aready Taken' });
                setUserNameError('UserName Aready Taken');
            } else {
                setError('userName', { message: '' });
                setUserNameError('');
            }
        }
    });

    useEffect(() => {
        const userName = watch('userName');
        const delayDebounceFn = setTimeout(() => {
            if (watch('userName') !== user.userName) {
                isUsernameAvailableQuery({ variables: { userName: userName } });
            }
        }, 1500);
        return () => clearTimeout(delayDebounceFn);
    }, [watch('userName')]);
    const { t } = useTranslation('common');

    return (
        <div className="w-full rounded-md border border-lightBorder dark:border-borderColor sm:w-[33.25rem]">
            <div className="rounded-t-md border-b border-lightBorder bg-lightBg px-4 pt-6 pb-[1.391rem] dark:border-borderColor dark:bg-gray17">
                <div className="flex items-center gap-3">
                    <i className="icon-calender text-base dark:text-chinesesilver"></i>
                    <h2 className="font-display text-sm font-bold dark:text-chinesesilver">{t('profile.edit_profile')}</h2>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(submit)}>
                <div className="px-3 py-6">
                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            register={register}
                            error={errors.firstName && errors.firstName.message?.toString()}
                            placeholder={t('signUp.first_name')}
                            name={'firstName'}
                            autoFocus={false}
                            className="rounded-md py-2.5 placeholder:text-xs"
                            AddIcon={<i className={`icon-members`}></i>}
                        />
                        <Input
                            register={register}
                            error={errors.lastName && errors.lastName.message?.toString()}
                            placeholder={t('signUp.last_name')}
                            name={'lastName'}
                            className="rounded-md py-2.5 placeholder:text-xs"
                            AddIcon={<i className={`icon-members`}></i>}
                        />
                    </div>
                    <div className="relative mt-3">
                        <Input
                            register={register}
                            error={errors.userName && errors.userName.message?.toString()}
                            placeholder={t('signUp.username')}
                            name={'userName'}
                            maxLength={14}
                            // disabled={!Boolean(daysDifference >= 7)}
                            className="rounded-md py-2.5 placeholder:text-xs"
                            onChange={(e) => {}}
                            onkeydown={() => {
                                if (getValues('userName').length < 2) {
                                    setUserNameError('');
                                }
                            }}
                            AddIcon={
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.255 1.71882H10.3726V0.588235C10.3726 0.263373 10.1093 0 9.78439 0H6.21576C5.8909 0 5.62753 0.263373 5.62753 0.588235V1.71882H2.74517C1.77212 1.71882 0.980469 2.51047 0.980469 3.48353V18.2353C0.980469 19.2084 1.77212 20 2.74517 20H13.255C14.228 20 15.0197 19.2084 15.0197 18.2353V3.48353C15.0197 2.51047 14.228 1.71882 13.255 1.71882ZM6.804 1.17647H9.19616V3.35294C9.19616 4.01243 8.65957 4.54902 8.00008 4.54902C7.34059 4.54902 6.804 4.01243 6.804 3.35294V1.17647ZM13.8432 18.2353C13.8432 18.5596 13.5793 18.8235 13.255 18.8235H2.74517C2.42082 18.8235 2.15694 18.5596 2.15694 18.2353V3.48353C2.15694 3.15918 2.42082 2.89529 2.74517 2.89529H5.62753V3.35294C5.62753 4.66114 6.69188 5.72549 8.00008 5.72549C9.30827 5.72549 10.3726 4.66114 10.3726 3.35294V2.89529H13.255C13.5793 2.89529 13.8432 3.15918 13.8432 3.48353V18.2353Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M5.58042 14.7908H10.4206C10.7454 14.7908 11.0088 14.5274 11.0088 14.2025V12.6617C11.0088 11.733 10.4889 10.9236 9.72485 10.509C9.97972 10.1579 10.1305 9.72669 10.1305 9.26065C10.1305 8.08615 9.17501 7.13062 8.0005 7.13062C6.82599 7.13062 5.87046 8.08615 5.87046 9.26065C5.87046 9.72669 6.02129 10.1579 6.27615 10.509C5.51211 10.9236 4.99219 11.733 4.99219 12.6617V14.2025C4.99219 14.5274 5.25556 14.7908 5.58042 14.7908ZM8.0005 8.30709C8.52631 8.30709 8.95407 8.73485 8.95407 9.26065C8.95407 9.78646 8.52631 10.2143 8.0005 10.2143C7.4747 10.2143 7.04693 9.7865 7.04693 9.26069C7.04693 8.73489 7.4747 8.30709 8.0005 8.30709ZM6.16866 12.6617C6.16866 11.9609 6.73882 11.3907 7.43964 11.3907H8.56136C9.26219 11.3907 9.83235 11.9609 9.83235 12.6617V13.6143H6.16866V12.6617Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M10.8527 16.196H5.14683C4.82197 16.196 4.55859 16.4594 4.55859 16.7843C4.55859 17.1091 4.82197 17.3725 5.14683 17.3725H10.8527C11.1776 17.3725 11.4409 17.1091 11.4409 16.7843C11.4409 16.4594 11.1776 16.196 10.8527 16.196Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                        <div className="group absolute top-3 right-2 cursor-pointer">
                            <i
                                className={`icon-check ${
                                    watch('userName').length < 2 ? 'text-davygrey' : !userNameError ? 'text-[#1FFF86]' : 'text-red-500'
                                }`}
                            ></i>
                            {/* <i className={`icon-info`}></i> */}

                            {/* <span
                                className={`group-hover:opacity-1 pointer-events-none absolute bottom-[120%] right-0 z-50 block w-[10rem] rounded bg-primary px-2 py-0.5 text-center font-display text-xs font-bold  text-white opacity-0 transition
                                     group-hover:opacity-100`}
                            >
                                {t('profile.edit_dec')}
                            </span> */}
                            {/* </Tooltip> */}
                        </div>
                    </div>
                    <a className="mt-3 text-primary" target="_blank" href={`${process.env.NEXT_PUBLIC_URL}/@${getValues('userName')}`}>
                        {process.env.NEXT_PUBLIC_URL}/{getValues('userName')}
                    </a>
                    <Input
                        disabled={true}
                        value={user.email}
                        placeholder={t('signUp.email_address')}
                        name={''}
                        className="mt-3 rounded-md py-2.5 placeholder:text-xs"
                        AddIcon={<i className={`icon-mail text-xs`}></i>}
                    />

                    <div className="relative mt-3">
                        <Textarea
                            autoFocus
                            placeholder={t('collections.description')}
                            name={'bio'}
                            register={register}
                            className="h-[16rem] sm:h-[11rem]"
                            error={errors.bio && errors.bio.message?.toString()}
                            maxLength={300}
                            AddIcon={<i className={`icon-collection-name text-sm`}></i>}
                        />
                        {watch('bio') && watch('bio').length > 0 && (
                            <div className=" absolute bottom-1 right-2  block text-xs text-secondary">{watch('bio')?.length}/300</div>
                        )}
                    </div>

                    <div className="mt-3 flex flex-col-reverse gap-3 sm:flex-col">
                        <div className="grid grid-cols-2 gap-1 xs1:mt-3 xs1:grid-cols-1">
                            {addSocial?.map((item: any, i) => (
                                <div className="relative mb-2 w-full overflow-hidden rounded-md " key={i}>
                                    <div className="absolute top-0 left-0 flex h-full w-11 items-center justify-center dark:bg-bgDark">
                                        {item?.icon}
                                    </div>
                                    <Input
                                        placeholder={
                                            (item?.placeholder == 'Twitter' ? item.placeholder.replace('Twitter', 'X') : item?.placeholder) ||
                                            (item?.name == 'Twitter' ? item?.name.replace('Twitter', 'X') : item?.name)
                                        }
                                        register={register}
                                        className="pl-14 pr-10 text-black dark:text-white"
                                        name={item?.name?.toLowerCase()}
                                        autoFocus={false}
                                        size="sm"
                                    />
                                    <div className="absolute top-0  right-3 flex h-full items-center justify-center">
                                        <i className="icon-delete cursor-pointer dark:text-white" onClick={() => deleteSocialItem(item)}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative  mt-2 flex gap-1.5 sm:mt-0 ">
                            {filteredIcons?.length > 0 && (
                                <div
                                    onClick={() => {
                                        setIconFlow(!iconFlow);
                                    }}
                                    className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-bgDark"
                                >
                                    <i className={`${iconFlow ? 'icon-minimize text-[2px]' : 'icon-plus'} `}></i>
                                </div>
                            )}
                            {iconFlow && (
                                <div className={`AtScrollHide flex items-center gap-1.5 overflow-auto lg:w-[20rem]`}>
                                    {filteredIcons?.map((item) => (
                                        <>
                                            <div
                                                className="flex h-10 w-10 flex-shrink-0  cursor-pointer items-center justify-center rounded-md bg-bgDark"
                                                key={item.name}
                                                onClick={() => addValue(item)}
                                            >
                                                {item?.icon}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`flex items-center justify-end gap-3 rounded-b-md bg-lightBg px-3 py-4 dark:bg-gray17`}>
                    <Button className="w-20" variant="outline" onClick={() => setPopup(false)}>
                        {t('buttons.cancel')}
                    </Button>
                    <Button className="w-20" type="submit" disabled={Boolean(userNameError)} isLoading={loading}>
                        {t('buttons.save')}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
