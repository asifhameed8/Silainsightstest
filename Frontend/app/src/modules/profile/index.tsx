import { Container } from '@components/Container';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from 'src/graphql/user';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { userSelector } from 'src/store/selectors';
// import ProfileCollection from './ProfileCollection';
import ProfileDetail from './components/ProfileDetail';
import FollowerTable from './components/FollowerTable';
import { IUser } from 'src/interfaces';
import MobileProfileDetail from './components/MobileProfileDetail';
import useTranslation from 'next-translate/useTranslation';
interface IProps {
    username: string | string[] | undefined;
    ssrUser: IUser | undefined;
}

const ProfileModule = ({ username, ssrUser }: IProps) => {
    const owner = useSelector(userSelector);
    const [block, setBlock] = useState<boolean>(false);
    const [Table, setTable] = useState('');
    const [showTables, setShowTables] = useState(false);
    const [follower, setFollower] = useState('');
    const { t } = useTranslation('common');

    // ---- USER PROFILE -----

    const [user, setUserPayload] = useState<IUser | undefined>(ssrUser);

    const isOwner = owner?._id == user?._id;

    const { refetch } = useQuery(USER_PROFILE, {
        variables: {
            userName: username
        },
        onCompleted: (data) => {
            setUserPayload(data?.userProfile);
        }
    });

    useEffect(() => {
        if (user && owner) {
            if (owner?.blockedUsers?.find((blockedUser) => blockedUser?._id === user._id)) setBlock(true);
            else setBlock(false);
        }
    }, [owner, user]);

    return (
        <>
            <Container
                classNames={`${
                    showTables ? 'h-screen overflow-hidden' : 'sm:overflow-auto'
                } min-h-[calc(100vh-106px)] dark:bg-bgcolor relative px-0  sm:px-auto w-full `}
            >
                <>
                    {/* {isLoadingProfile || !user && <Loader />} */}
                    <div className={`${!block && 'justify-center'} relative z-40 w-full gap-1 sm:pt-16 lg:flex`}>
                        <div
                            className={`${follower == '' ? '' : 'left-0 dark:bg-bgcolor xl:bg-transparent xs:h-[calc(100vh-80px)]'} 
                                 
                                ${block && '!hidden'} 
                                  ${!block ? 'absolute left-0' : 'xl:sticky xl:h-[26.4rem]'}
                                AtScrollHide absolute top-[4.5rem] z-30 hidden w-[24.68rem] flex-shrink-0 overflow-hidden rounded-md p-4 sm:block xl:w-[22.68rem] xl:p-0 Exl:w-[24.68rem]`}
                        >
                            {follower == 'Follower' && (
                                <FollowerTable
                                    setFollower={setFollower}
                                    title={t('feeds.followers')}
                                    user={user}
                                    isOwner={isOwner}
                                    refetch={refetch}
                                />
                            )}
                            {follower == 'Following' && (
                                <FollowerTable
                                    setFollower={setFollower}
                                    title={t('feeds.following')}
                                    user={user}
                                    isOwner={isOwner}
                                    refetch={refetch}
                                />
                            )}
                        </div>
                        <div
                            className={`${
                                !block ? 'mx-auto' : 'sm:h-[28.4rem]'
                            } AtScrollHide top-[4.5rem] mx-auto w-full sm:sticky sm:w-[37.5rem] xl:w-[42rem] Exl:w-[37.5rem]`}
                        >
                            <div className="hidden sm:block">
                                <ProfileDetail
                                    Table={Table}
                                    setTable={setTable}
                                    follower={follower}
                                    setFollower={setFollower}
                                    refetch={refetch}
                                    user={user}
                                    isOwner={isOwner}
                                />
                            </div>
                            <div className="block sm:hidden">
                                <MobileProfileDetail
                                    Table={Table}
                                    showTables={showTables}
                                    setShowTables={setShowTables}
                                    setTable={setTable}
                                    follower={follower}
                                    setFollower={setFollower}
                                    refetch={refetch}
                                    user={user}
                                    isOwner={isOwner}
                                />
                            </div>
                        </div>
                    </div>
                </>
            </Container>
        </>
    );
};

export default ProfileModule;
