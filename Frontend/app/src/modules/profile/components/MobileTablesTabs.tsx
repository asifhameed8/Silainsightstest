/*eslint-disable */
import React, { useEffect, useState } from 'react';
import ProfileListedTable from './ProfileListedTable';
import MintedTable from './MintedTable';
import ProfileBoughtTable from './ProfileBoughtTable';
import ProfileSoldTable from './ProfileSoldTable';
import MobileFollowerTable from './MobileFollowerTable';
import MobileFollowingTable from './MobileFollowingTable';
import { useRouter } from 'next/router';
import { IUser } from 'src/interfaces';
import { useQuery } from '@tanstack/react-query';
import { useLazyQuery } from '@apollo/client';
import { USER_PROFILE } from 'src/graphql/user';
import { userSelector } from 'src/store/selectors';
import { useSelector } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';

interface IProps {
    username?: string | string[] | undefined;
}

const MobileTablesTabs = ({ username }: IProps) => {
    const router = useRouter();
    const [selectedTabIdx, setSelectedTabIdx] = useState(1);
    const [Table, setTable] = useState('');
    const [follower, setFollower] = useState('');
    const [block, setBlock] = useState<boolean>(false);
    const [user, setUserPayload] = useState<IUser | null>();
    const [isLoadingProfile, setIsLoadingProfile] = useState(false);
    const owner = useSelector(userSelector);
    const { t } = useTranslation('common');

    useEffect(() => {
        setSelectedTabIdx(1);
    }, [router.query.id]);

    const { refetch } = useQuery(['user', username], async () => {
        setIsLoadingProfile(true);
        const { data } = await userProfile({ variables: { userName: username || owner.userName } });
        setUserPayload(data?.userProfile);
        return;
    });

    const [userProfile] = useLazyQuery(USER_PROFILE, {
        onCompleted: (data) => {
            setUserPayload(data?.userProfile);
            setIsLoadingProfile(false);
        },
        fetchPolicy: 'network-only'
    });

    // If the user has been blokced or not
    useEffect(() => {
        if (user && owner) {
            if (owner?.blockedUsers?.find((blockedUser) => blockedUser?._id === user._id)) setBlock(true);
            else setBlock(false);
        }
    }, [owner, user]);

    // put shimmer here
    if (isLoadingProfile && !user) {
        return <div></div>; //Please add skeleton here
    }

    const tabs = [
        { name: `${t('feeds.followers')} (${user?.followersCount})`, current: true },
        { name: `${t('feeds.following')} (${user?.followingCount})`, current: false }
    ];

    return (
        <>
            <div className="AtScrollHide relative z-40 w-full overflow-x-auto">
                <nav className="" aria-label="Tabs">
                    <div className="w-[100%]">
                        <div className=" flex w-full flex-shrink-0 gap-5 border-b  border-borderColor px-2  ">
                            {tabs.map((tab, i) => (
                                <a
                                    key={tab.name}
                                    className={`${
                                        i + 1 === selectedTabIdx
                                            ? 'border-lightText font-semibold  text-lightText dark:border-primary dark:font-semibold dark:text-primary'
                                            : ' border-transparent  text-lightText dark:text-secondary'
                                    } w-full cursor-pointer whitespace-nowrap border-b py-3 text-center text-sm  uppercase`}
                                    onClick={() => setSelectedTabIdx(i + 1)}
                                >
                                    {tab.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
            {selectedTabIdx === 1 && (
                <MobileFollowerTable
                    setFollower={setFollower}
                    title="Followers"
                    user={user}
                    isOwner={(owner && owner._id) == user?._id}
                    refetch={refetch}
                />
            )}
            {selectedTabIdx === 2 && (
                <MobileFollowerTable
                    setFollower={setFollower}
                    title="Following"
                    user={user}
                    isOwner={(owner && owner._id) == user?._id}
                    refetch={refetch}
                />
            )}
            {/* {selectedTabIdx === 3 && <MintedTable setTable={setTable} mobile />}
            {selectedTabIdx === 4 && <ProfileListedTable setTable={setTable} mobile />}
            {selectedTabIdx === 5 && <ProfileBoughtTable setTable={setTable} mobile />}
            {selectedTabIdx === 6 && <ProfileSoldTable setTable={setTable} mobile />} */}
        </>
    );
};
export default MobileTablesTabs;
