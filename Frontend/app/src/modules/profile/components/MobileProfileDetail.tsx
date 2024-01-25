/*eslint-disable */
import { IUser } from 'src/interfaces';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Loader from '@components/Loader';
import BasicModal from '@modals/BasicModal';
import { Button } from '@components/Button';
import { useMutation, useQuery } from '@apollo/client';
import DropdownProfile from './DropdownProfile';
import UserAvatar from '@components/UserAvatar';
import ProfileModals from '@modals/ProfileModals';
import { copyToClipboard } from '@utils/functions';
import { userSelector } from 'src/store/selectors';
import ChatContext from 'src/contexts/ChatContext';
import ProfileSocialLinks from './ProfileSocialLinks';
import MobileProfileTable from '../MobileProfileTable';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'src/store/reducers/auth.reducer';

import ProfileDropDown from '@components/Navbar/ProfileDropdown';
import { EDIT_PROFILE, FOLLOW_MUTATIONS } from 'src/graphql/user';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
interface Iprops {
    setTable(Table: string): void;
    setShowTables(showTables: boolean): void;
    setFollower(follower: string): void;
    showTables: boolean;
    Table: string;
    follower: string;
    user: IUser;
    isOwner: boolean;
    refetch: Function;
}
const MobileProfileDetail = ({ setTable, Table, showTables, setShowTables, follower, setFollower, user, isOwner, refetch }: Iprops) => {
    const { clickUser } = useContext(ChatContext);
    const owner = useSelector(userSelector);
    const dispatch = useDispatch();
    const [state, setState] = useState(0);
    const [show, setShow] = useState(false);
    const [block, setBlock] = useState(false);
    const [popup, setPopup] = useState(false);
    const [hover, setHover] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const { t } = useTranslation('common');
    const Data = [
        {
            title: `${t('dropdowns.report')} @${user?.userName}`,
            icon: 'icon-report1',
            disable: user?._id === owner?._id
        },
        {
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
    ];

    useEffect(() => {
        if (owner) {
            const followings = owner?.following?.map((item: IUser) => item?._id) || [];
            followings.length > 0 && setIsFollowing(followings?.includes(user?._id));
            if (owner?.blockedUsers && owner?.blockedUsers?.find((blockedUser) => blockedUser?._id === user?._id)) setBlock(true);
        }
    }, [owner]);

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
        onError: (error) => {}
    });
    const handleFollowUser = () => {
        owner && editProfileMu({ variables: { id: user?._id } });
        setIsFollowing(!isFollowing);
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

    const router = useRouter();

    return (
        <div className="px-4 pt-5">
            <div>
                <div className="mb-6 flex items-center justify-between">
                    {/* {!isOwner ? <i className="icon-left-arrow" onClick={() => router.back()}></i> : <div></div>} */}
                    <div></div>
                    <p className="text-center font-bold capitalize text-white">{t('header.profile')}</p>
                    <div className="">
                        {!isOwner ? (
                            <DropdownProfile listData={Data} setBlock={setBlock} ParentClass="leading-0" user={user} block={block} />
                        ) : (
                            <ProfileDropDown isProfile />
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <label className="group relative w-[22%] ">
                        {isOwner ? (
                            <div className="relative flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full bg-bgDark">
                                {uploading ? (
                                    <Loader height={30} width={30} />
                                ) : (
                                    <div className="">
                                        <input type="file" className="absolute w-0" multiple={false} accept="image/*" onChange={handleImageChange} />
                                        {/* <ImageComponent
                                            figclassname="h-16 w-16"
                                            src={owner?.avatar || '/assets/images/avatars/userProfile.png'}
                                            className="rounded-full object-cover"
                                            alt=""
                                            fill
                                        /> */}
                                        <UserAvatar user={owner} height={88} width={88} />

                                        <div className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 group-hover:block ">
                                            <i className="icon-camera text-sm"></i>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <UserAvatar user={user} height={88} width={88} />
                        )}
                    </label>
                    <div className=" grid w-[78%] grid-cols-3  gap-2">
                        <div
                            className="group cursor-pointer"
                            onClick={() => {
                                setShowTables(true);

                                // router.push({ pathname: `${user?.userName}/1` });
                            }}
                        >
                            <h6 className="text-center text-base font-bold text-white group-hover:text-lightText dark:group-hover:text-[#ccc]">
                                {Number(isOwner ? owner?.followersCount || 0 : user?.followersCount || 0)}
                            </h6>
                            <p className="text-center text-xs group-hover:text-lightText dark:group-hover:text-[#ccc]"> {t('profile.Follower')}</p>
                        </div>
                        <div
                            className="group cursor-pointer"
                            onClick={() => {
                                setShowTables(true);
                                // router.push({ pathname: `${user?.userName}/2` });
                            }}
                        >
                            <h6 className="text-center text-base font-bold text-white group-hover:text-lightText dark:group-hover:text-[#ccc]">
                                {Number(isOwner ? owner?.followingCount || 0 : user?.followingCount || 0)}
                            </h6>
                            <p className="text-center text-xs group-hover:text-lightText dark:group-hover:text-[#ccc]">{t('profile.Following')}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="mt-2">
                        <div className="flex items-center gap-x-4">
                            <div className="flex max-w-[20rem] items-center gap-x-1 truncate">
                                <h1 className="h1 truncate">
                                    {isOwner ? `${owner?.firstName} ${owner?.lastName}` : `${user?.firstName} ${user?.lastName}`}
                                </h1>
                            </div>
                            <div className="flex gap-1">
                                {/* {isOwner && (
                                    <div
                                        className="AtHashTag flex cursor-pointer items-center gap-2 rounded-md border border-lightBorder bg-white px-3 py-1.5 dark:border-borderColor dark:bg-bgcolor"
                                        onClick={editProfileModal}
                                    >
                                        <i className="icon-repostfeed text-xs  text-secondary"></i>{' '}
                                        <span className="text-sm !leading-0 text-secondary"> Edit</span>
                                    </div>
                                )} */}
                            </div>
                        </div>
                        <p>{isOwner ? owner?.userName : user?.userName}</p>
                    </div>
                    <p className="AtScrollHide mt-1 overflow-auto text-sm text-black dark:text-white">
                        {isOwner ? `${owner?.bio == null ? '' : owner?.bio}` : `${user?.bio == null ? '' : user?.bio}`}{' '}
                    </p>
                </div>
            </div>
            {block ? (
                <div className="mt-3">
                    <p className="text-white">{t('profile.block_msg')}</p>
                    <p className="text-xs">{t('profile.block_chat')}</p>
                </div>
            ) : (
                <ProfileSocialLinks isOwner={isOwner} owner={owner} user={user} />
            )}
            {isOwner && (
                <div className="mt-3 grid grid-cols-2 items-center gap-3">
                    <Button className="w-full" variant="outline" onClick={editProfileModal}>
                        {t('profile.edit_profile')}
                    </Button>
                    <Button
                        className="w-full"
                        onClick={() => {
                            copyToClipboard(`/@${user?.userName}`);
                        }}
                    >
                        {t('profile.link')}
                    </Button>
                </div>
            )}

            {block ? (
                <Button
                    color="danger"
                    className="mt-3 w-full"
                    onClick={() => setShow(true)}
                    onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {hover ? t('profile.un_blocked') : t('profile.blocked')}
                </Button>
            ) : (
                <>
                    {!isOwner && (
                        <div className="mt-3 flex items-center gap-3">
                            <Button variant="outline" className="w-full">
                                {t('profile.Message')}
                            </Button>
                            <Button className="w-full" onClick={handleFollowUser} variant={`${isFollowing ? 'outline' : 'solid'}`}>
                                {isFollowing ? t('buttons.unfollow') : t('buttons.follow')}
                            </Button>{' '}
                        </div>
                    )}
                </>
            )}
            {state > 0 && <ProfileModals state={state} setState={setState} popup={popup} setPopup={setPopup} />}
            {showTables && <MobileProfileTable setShowTables={setShowTables} />}
        </div>
    );
};

export default MobileProfileDetail;
function useCloudinaryUpload(): { uploading: any; uploadedFiles: any; uploadToCloudinary: any } {
    throw new Error('Function not implemented.');
}
