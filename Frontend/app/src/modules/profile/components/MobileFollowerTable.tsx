import { useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FOLLOW_MUTATIONS, USER_PROFILE } from 'src/graphql/user';
import { IUser } from 'src/interfaces';
import { setUser } from 'src/store/reducers/auth.reducer';
import { userSelector } from 'src/store/selectors';
import VerifiedIcon from '@components/_Icons/VerifiedIcon';
import UserAvatar from '@components/UserAvatar';
import useTranslation from 'next-translate/useTranslation';
const AtHolderItems = 'px-4 py-1.5 whitespace-nowrap text-lightText text-black dark:text-white text-xs';

interface Iprops {
    title: string;
    user: IUser;
    isOwner: boolean;
    refetch: Function;
}

const MobileFollowerTable = ({ title, user, refetch }: Iprops) => {
    const dispatch = useDispatch();
    const isFollowerPage = title == 'Followers' ? true : false;
    const loggedUser = useSelector(userSelector);
    const [index, setIndex] = useState();

    const [editProfileMu, { loading }] = useMutation(FOLLOW_MUTATIONS, {
        refetchQueries: [USER_PROFILE],
        onCompleted: (data) => {
            if (data.follow) {
                dispatch(setUser({ ...loggedUser, ...data.follow }));
                refetch();
            } else {
                // dispatch(setUser({ ...user, ...data.editProfile }));
                // setPopup(false);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const followHandler = (id: string) => {
        setIndex(id);
        editProfileMu({ variables: { id: id } });
    };

    const followerUsers = loggedUser?.following?.map((obj: IUser) => obj._id);
    const { t } = useTranslation('common');

    return (
        <div className=" flex flex-col">
            <div className="AtScrollHide overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="AtScrollHide relative h-[calc(100vh-167px)] overflow-auto rounded-b border border-t-0 border-lightBorder bg-white dark:border-borderColor dark:bg-transparent xl:max-h-[23.5rem]">
                        <table className="min-w-full rounded">
                            <tbody>
                                {isFollowerPage ? (
                                    <>
                                        {user?.followers?.length > 0 ? (
                                            user.followers.map((u: IUser, i) => {
                                                return (
                                                    <tr
                                                        key={i + 'aa'}
                                                        className={` cursor-pointer bg-transparent text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark`}
                                                    >
                                                        <td className={AtHolderItems}>
                                                            <Link href={`/@${u?.userName}`}>
                                                                <div
                                                                    className="flex items-center gap-x-2"
                                                                    // onClick={() => window.location.replace(`/@${u?.userName}`)}
                                                                >
                                                                    <UserAvatar avatar={u.avatar} height={36} width={36} name={u.userName} />

                                                                    <div>
                                                                        <div className="flex items-center gap-x-1">
                                                                            <p className="text-xs text-secondary">{u.userName}</p>
                                                                            {u.isVerified && <VerifiedIcon />}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td className={AtHolderItems}>
                                                            {u.followersCount} {t('buttons.follower')}
                                                        </td>
                                                        <td className={AtHolderItems}>
                                                            <div className={`flex items-center justify-center gap-2 `}>
                                                                {loggedUser?._id !== u._id && (
                                                                    <Button
                                                                        isLoading={loading && index == u._id}
                                                                        onClick={() => {
                                                                            followHandler(u._id);
                                                                        }}
                                                                        size="sm"
                                                                        className="w-20"
                                                                        color={!followerUsers?.includes(u._id) ? 'primary' : 'secondary'}
                                                                        loaderClass={!followerUsers?.includes(u._id) ? '' : 'dark:text-white'}
                                                                    >
                                                                        {!followerUsers?.includes(u._id)
                                                                            ? t('buttons.follow')
                                                                            : t('buttons.following')}
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="">
                                                    <div className="absolute flex h-full w-full items-center justify-center">
                                                        <h2 className="font-display text-lg text-secondary">{t('profile.no_followers')}</h2>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {user?.following.length > 0 ? (
                                            user?.following?.map((u: IUser, i) => {
                                                return (
                                                    <tr
                                                        key={i + 'aa'}
                                                        className={` cursor-pointer bg-transparent text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark`}
                                                    >
                                                        <td className={AtHolderItems}>
                                                            {/* <Link href={`/${u?._id}`}> */}
                                                            <div
                                                                className="flex items-center gap-x-2"
                                                                onClick={() =>
                                                                    // router.push({ pathname: `/@${u?.userName}` }, asPath, {
                                                                    //     locale: 'newLocale',
                                                                    //     unstable_skipClientCache: true
                                                                    // })
                                                                    window.location.replace(`/@${u?.userName}`)
                                                                }
                                                            >
                                                                {/* <ImageComponent
                                                                    fill
                                                                    className="rounded-full"
                                                                    src={u.avatar || '/assets/images/avatars/userProfile.png'}
                                                                    figclassname="flex-shrink-0 h-5 w-5"
                                                                    alt=""
                                                                /> */}
                                                                <UserAvatar avatar={u.avatar} height={20} width={20} name={u.userName} />

                                                                <div>
                                                                    <div className="flex items-center gap-x-1">
                                                                        <p className="text-xs text-secondary">{u.userName}</p>
                                                                        {u.isVerified && <VerifiedIcon />}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* </Link> */}
                                                        </td>
                                                        <td className={AtHolderItems}>
                                                            {u.followersCount} {t('buttons.follower')}
                                                        </td>
                                                        <td className={AtHolderItems}>
                                                            <div className={`flex items-center justify-center gap-2 `}>
                                                                {loggedUser?._id !== u._id && (
                                                                    <Button
                                                                        isLoading={loading && index == u._id}
                                                                        onClick={() => {
                                                                            followHandler(u._id);
                                                                        }}
                                                                        className="w-20"
                                                                        color={followerUsers?.includes(u?._id) ? 'secondary' : 'primary'}
                                                                        loaderClass={followerUsers?.includes(u?._id) ? 'dark:text-white' : ''}
                                                                        size="sm"
                                                                    >
                                                                        {followerUsers?.includes(u?._id)
                                                                            ? t('buttons.following')
                                                                            : t('buttons.follow')}
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="">
                                                    <div className="absolute flex h-full w-full flex-col items-center justify-center">
                                                        <h2 className="font-display text-lg text-secondary">{t('buttons.not_following_anyone')}</h2>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFollowerTable;
