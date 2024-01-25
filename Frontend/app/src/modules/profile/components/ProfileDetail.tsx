import { useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import ProfileModals from '@modals/ProfileModals';
import clsx from 'clsx';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_PROFILE, FOLLOW_MUTATIONS } from 'src/graphql/user';
import { IUser } from 'src/interfaces';
import { setUser } from 'src/store/reducers/auth.reducer';
import { authSelector, userSelector } from 'src/store/selectors';
import DropdownProfile from './DropdownProfile';
import { copyToClipboard } from '@utils/functions';
import Loader from '@components/Loader';
import ProfileSocialLinks from './ProfileSocialLinks';
import { toast } from 'react-toastify';
import withAuth from 'src/hoc/withAuth';
import UserAvatar from '@components/UserAvatar';
import useTranslation from 'next-translate/useTranslation';

interface Iprops {
    setTable(Table: string): void;
    setFollower(follower: string): void;
    Table: string;
    follower: string;
    user: IUser;
    isOwner: boolean;
    refetch: Function;
}
const ProfileDetail = ({ follower, setFollower, user, isOwner, refetch }: Iprops) => {
    const owner = useSelector(userSelector);
    const { t } = useTranslation('common');

    const { isAuth } = useSelector(authSelector);
    const dispatch = useDispatch();
    const [state, setState] = useState(0);
    const [show, setShow] = useState(false);
    const [block, setBlock] = useState(false);
    const [popup, setPopup] = useState(false);
    const [hover, setHover] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const followerUsers = owner?.following?.map((obj: IUser) => obj._id) || [];

    const Data = [
        isAuth && {
            title: `${t('dropdowns.report')} @${user?.userName}`,
            icon: 'icon-report1',
            disable: user?._id === owner?._id
        },
        isAuth && {
            title: `${block ? t('dropdowns.unblock') : t('dropdowns.block')} @${user?.userName}`,
            icon: 'icon-block',
            disable: user?._id === owner?._id
        },
        {
            title: t('profile.link'),
            icon: 'icon-copy',
            function: () => {
                copyToClipboard(`/@${user?.userName}`);
            }
        }
    ].filter(Boolean);

    const editProfileModal = () => {
        setPopup(true);
        setState(1);
    };
    const [editProfileMu] = useMutation(FOLLOW_MUTATIONS, {
        onCompleted: (data) => {
            if (data.follow) {
                dispatch(setUser({ ...owner, ...data.follow }));
                // setIsFollowing(!isFollowing);
                refetch();
            }
        },
        onError: () => {}
    });

    const handleFollowUser = () => {
        setIsFollowing(!isFollowing);
        owner && editProfileMu({ variables: { id: user?._id } });
    };

    // --------- PROFILE PIC UPDATE
    const { uploading, uploadedFiles, uploadToCloudinary } = useCloudinaryUpload();

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const fileSizeInMB = event.target.files[0].size / (1024 * 1024);
            if (fileSizeInMB > 5) {
                toast.warning('The file is greater than 5MB.');
            } else {
                uploadToCloudinary(Array.from(event.target.files));
            }
        }
    };

    const [uploadProfileMu] = useMutation(EDIT_PROFILE);

    useEffect(() => {
        if (uploadedFiles.length > 0 && !uploading) {
            dispatch(setUser({ ...user, avatar: uploadedFiles[0].secure_url }));
            uploadProfileMu({ variables: { data: { avatar: uploadedFiles[0].secure_url } } });
        }
    }, [uploading, uploadedFiles]);

    return (
        <div className="h-[12.3rem] rounded-md bg-white p-2 dark:bg-gray17 2xl:pb-5 2xl:pl-3 ">
            <div>
                <div className=" -mt-14 flex gap-x-2 2xl:gap-x-3">
                    <label className="group relative ">
                        {isOwner ? (
                            <div className="relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-bgDark 2xl:h-[6.125rem] 2xl:w-[6.125rem]">
                                {uploading ? (
                                    <Loader height={30} width={30} />
                                ) : (
                                    <div className="">
                                        <input type="file" className="absolute w-0" multiple={false} accept="image/*" onChange={handleImageChange} />
                                        <div className="hidden 2xl:block">
                                            <UserAvatar user={owner} height={98} width={98} resizeWidth={300} fontSize="2.5rem" />
                                        </div>
                                        <div className="block 2xl:hidden">
                                            <UserAvatar user={owner} height={80} width={80} resizeWidth={300} fontSize="1.6rem" />
                                        </div>

                                        <div className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 group-hover:block ">
                                            <i className={`icon-camera ${!owner?.avatar ? '  text-black' : ' text-white'} text-sm `}></i>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <UserAvatar user={user} height={98} width={98} resizeWidth={300} fontSize="2.5rem" />
                        )}
                    </label>

                    <div className="w-full">
                        <div className="flex w-full justify-between">
                            <div className="">
                                <div className="flex  items-center gap-x-4">
                                    <div className="flex max-w-[10.5rem] items-center gap-x-1 truncate">
                                        <h1 className="h1 truncate">
                                            {isOwner
                                                ? `${owner?.firstName || ''} ${owner?.lastName || ''}`
                                                : `${user?.firstName || ''} ${user?.lastName || ''}`}
                                        </h1>
                                        <UserBadges user={user} hover={true} />
                                    </div>
                                    <div className="flex gap-1">
                                        {isOwner && (
                                            <div
                                                className="AtHashTag flex h-7 cursor-pointer items-center gap-2 rounded-md border border-lightBorder bg-white px-3 dark:border-borderColor dark:bg-bgcolor"
                                                onClick={editProfileModal}
                                            >
                                                <i className="icon-repostfeed text-xs text-secondary"></i>
                                                <span className="text-sm !leading-0 text-secondary">{t('profile.Edit')}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h2 className="max-w-full truncate text-sm text-secondary">
                                    {isOwner ? owner?.userName || '' : user?.userName || ''}
                                </h2>
                            </div>
                        </div>

                        <div className="mt-6 grid w-full grid-cols-4">
                            <div
                                className="group cursor-pointer border-r border-lightBorder py-1  px-2 dark:border-borderColor  2xl:px-4"
                                onClick={() => {
                                    follower == 'Follower' ? setFollower('') : setFollower('Follower');
                                }}
                            >
                                <h2
                                    className={clsx(
                                        follower == 'Follower' && 'text-black dark:text-white',
                                        'text-center text-xs text-secondary group-hover:text-lightText dark:group-hover:text-[#ccc]'
                                    )}
                                >
                                    {t('profile.Follower')}
                                </h2>
                                <h6
                                    className={clsx(
                                        follower == 'Follower' ? 'text-black dark:text-white' : 'text-white',
                                        'text-center text-base font-bold  group-hover:text-lightText dark:group-hover:text-[#ccc]'
                                    )}
                                >
                                    {Number(isOwner ? owner?.followersCount || 0 : user?.followersCount || 0)}
                                </h6>
                            </div>
                            <div
                                className="group cursor-pointer border-r border-lightBorder py-1  px-2 dark:border-borderColor 2xl:px-4"
                                onClick={() => {
                                    follower == 'Following' ? setFollower('') : setFollower('Following');
                                }}
                            >
                                <h2
                                    className={clsx(
                                        follower == 'Following' && 'text-black dark:text-white',
                                        'text-center text-xs text-secondary group-hover:text-lightText dark:group-hover:text-[#ccc]'
                                    )}
                                >
                                    {t('profile.Following')}
                                </h2>
                                <h6
                                    className={clsx(
                                        follower == 'Following' ? 'text-black dark:text-white' : 'text-white',
                                        'text-center text-base font-bold  group-hover:text-lightText dark:group-hover:text-[#ccc]'
                                    )}
                                >
                                    {Number(isOwner ? owner?.followingCount || 0 : user?.followingCount || 0)}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="AtScrollHide mt-3 h-12 overflow-auto pr-2 pl-2 text-xs font-semibold text-black dark:text-white 2xl:pl-0">
                {isOwner && owner?.bio ? `${owner?.bio}` : user?.bio == null ? '' : `${user?.bio}`}
            </p>
            <div className="mt-3 flex justify-between pr-2">
                {block ? (
                    <div>
                        <p className="text-white">{t('profile.block_msg')}</p>
                        <p className="text-xs">{t('profile.block_chat')}</p>
                    </div>
                ) : (
                    <div className="flex items-center gap-x-2">
                        <ProfileSocialLinks isOwner={isOwner} owner={owner} user={user} />
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <DropdownProfile listData={Data} setBlock={setBlock} block={block} user={user} btnClass="text-[4px] rotate-0" />
                    {block ? (
                        <Button
                            color="danger"
                            className="w-28"
                            onClick={() => setShow(true)}
                            onMouseOver={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            {hover ? t('profile.un_blocked') : t('profile.blocked')}
                        </Button>
                    ) : (
                        <>
                            {!isOwner && isAuth && (
                                <>
                                    <Button variant="outline">{t('profile.Message')}</Button>
                                    <Button
                                        className="w-24"
                                        onClick={handleFollowUser}
                                        variant={`${followerUsers.includes(user?._id) ? 'outline' : 'solid'}`}
                                    >
                                        {isFollowing ? 'Unfollow' : 'Follow'}
                                    </Button>{' '}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            {state > 0 && <ProfileModals state={state} setState={setState} popup={popup} setPopup={setPopup} />}
        </div>
    );
};

export default withAuth(ProfileDetail);
function useCloudinaryUpload(): { uploading: any; uploadedFiles: any; uploadToCloudinary: any } {
    throw new Error('Function not implemented.');
}
