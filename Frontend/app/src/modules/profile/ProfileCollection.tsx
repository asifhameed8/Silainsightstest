import React, { FC } from 'react';
import { Address, useContractRead } from 'wagmi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper';
import ImageComponent from '@components/ImageComponent';
import { OpenSeaVerified } from '@components/OpenSeaVerified/OpenSeaVerified';
import { Collection, CollectionsResponse } from 'src/interfaces/collection.interface';
import chains from '@utils/chains';
import { abi } from '@utils/abis';
// import BasicModal from '@modals/BasicModal';
// import CreateCollection from '@modals/CreateCollection';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IUser } from 'src/interfaces';
import { userSelector } from 'src/store/selectors';
import { useSelector } from 'react-redux';
// import { useUserCollections } from '@reservoir0x/reservoir-kit-ui';
import { useQuery } from '@apollo/client';
import { GET_COLLECTIONS } from 'src/graphql/collection';
import { isEmpty } from 'lodash';
import useMsgCollection from '@hooks/useMsgCollections';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
import { toast } from 'react-toastify';
import Loader from '@components/Loader';
import useTranslation from 'next-translate/useTranslation';

type Props = {
    address: Address;
    user: IUser;
    isOwner: boolean;
};
const ProfileCollection: FC<Props> = ({ /* address, */ user, isOwner }) => {
    // const { primaryWallet } = useDynamicContext();
    // const address = primaryWallet?.address;
    const authUser = useSelector(userSelector);
    const { t } = useTranslation('common');

    // let collectionQuery: Parameters<typeof useUserCollections>['1'] = {
    //     limit: 100
    // };
    // const [openModal, setOpenModal] = useState(false);
    // const { chain } = useContext(ChainContext);

    // if (chain.collectionSetId) {
    //     collectionQuery.collectionsSetId = chain.collectionSetId;
    // } else if (chain.community) {
    //     collectionQuery.community = chain.community;
    // }

    // we dont need to set chain, now its showing all collections
    // const { data: collections, isLoading: collectionsLoading, fetchNextPage } = useUserCollections(address as string, collectionQuery);
    const { data: collectionsData } = useQuery<{ collections: CollectionsResponse }>(GET_COLLECTIONS, {
        variables: {
            query: { creator: user?._id }
            // query: { owner: address }
        },
        skip: !user?._id
    });
    const collections = collectionsData?.collections;

    const { id: chainId } = useMarketplaceChain();
    const { create: createCollection, loading: createCollectionLoading } = useMsgCollection({ chainId: chainId });

    const handleCreateCollection = async () => {
        try {
            const collection = await createCollection({
                supply: 0,
                royalty: 5,
                banner: authUser?.avatar,
                description: authUser?.bio,
                image: authUser?.avatar,
                chainId: chainId,
                name: authUser?.userName,
                symbol: authUser?.userName?.slice(0, 3),
                discord: authUser?.discord,
                facebook: authUser?.facebook,
                youtube: authUser?.youtube,
                instagram: authUser?.instagram,
                linkedin: authUser?.linkedin,
                tiktok: authUser?.tiktok,
                twitch: authUser?.twitch,
                twitter: authUser?.twitter,
                web: authUser?.web
            });

            if (collection?.data?.createCollection) {
                toast.success('Collection has been successfuly created.');
            }
            if (collection?.errors) {
                throw new Error(collection?.errors as unknown as string);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    if (!isOwner && isEmpty(collections?.records)) {
        return null;
    }

    return (
        <div className="relative mt-3">
            <p className={`mb-2 text-base font-bold dark:text-white`}>{t('profile.content_creator')}</p>
            <div className="flex items-center gap-1.5">
                {authUser && authUser?._id == user?._id && (
                    <div
                        className={`${
                            createCollectionLoading ? 'pointer-events-none' : null
                        } flex h-[9.5rem] w-[25%] cursor-pointer flex-col items-center  justify-center rounded-md border border-lightBorder dark:border-borderColor sm:w-[20%] lg:w-[17%]`}
                        onClick={handleCreateCollection}
                    >
                        <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-white dark:bg-dark">
                            {createCollectionLoading ? <Loader /> : <i className="icon-plus text-base text-black dark:text-white "></i>}
                        </div>
                    </div>
                )}
                <div className={`w-[75%] ${collections?.records?.length === 0 ? 'sm:w-full' : '  lg:w-[83%]'} `}>
                    {collections?.records?.length === 0 || collections == null ? (
                        <div className="flex h-[9.5rem] items-center justify-center">{t('profile.no_found')}</div>
                    ) : (
                        <div>
                            <Swiper
                                // navigation={true}
                                mousewheel={true}
                                grabCursor={true}
                                modules={[Pagination, Mousewheel, Navigation]}
                                className="AtSocialSlider"
                                style={{ position: 'unset' }}
                                slidesPerView={1.5}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 3,
                                        spaceBetween: 6
                                    },
                                    640: {
                                        slidesPerView: 4,
                                        spaceBetween: 6
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 6
                                    }
                                }}
                            >
                                {collections?.records?.map((collection, Idx) => (
                                    <SwiperSlide className="" key={collection?.contract}>
                                        <Slide collection={collection} key={Idx} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>

                {/* <BasicModal show={openModal} hide={setOpenModal}>
                    <CreateCollection />
                </BasicModal> */}
            </div>
        </div>
    );
};

export default ProfileCollection;

type ISlide = {
    collection: Collection;
};
const Slide = ({ collection }: ISlide) => {
    const { data: currentSupply } = useContractRead({
        address: collection?.contract as Address,
        abi: abi,
        functionName: '_currentSupply',
        chainId: chains.find((item) => item?.routePrefix?.toLowerCase() === collection?.chain)?.id
    });
    const { t } = useTranslation('common');

    return (
        <div className="group">
            <Link href={`/collection/${collection?.chain}/${collection?.contract}`}>
                <div className="relative flex h-[9.5rem] flex-col items-center rounded-md border border-lightBorder bg-white pt-2 pb-1 group-hover:bg-primary/10 dark:border-borderColor dark:bg-transparent">
                    <ImageComponent
                        src={(collection?.image as string) || '/assets/images/placeholdercol.svg'}
                        alt={collection?.name as string}
                        fill
                        figclassname="flex-shrink-0 h-12 w-12"
                        className=" rounded-full object-cover"
                    />

                    <div className="absolute top-1 right-1">
                        <OpenSeaVerified openseaVerificationStatus={collection?.opensea_verified} />
                    </div>
                    <p className="mt-1.5 w-full truncate px-2 text-center text-xs font-bold text-black dark:text-white">{collection?.name}</p>
                    <div className="mt-0.5 flex flex-col items-center">
                        <p className="text-xs leading-3">{t('feeds.followers')}</p>
                        <p className="leading- text-xs font-bold text-primary group-hover:text-white">{collection?.followers?.length || 0}</p>
                    </div>
                    <div className="mt-0.5 flex flex-col items-center">
                        <p className="text-xs leading-3">{t('profile.minted')}</p>
                        <p className="flex items-center text-xs font-bold text-primary group-hover:text-white">
                            {Number(currentSupply)}/{collection?.supply == 0 ? <span className="text-base">∞</span> : collection?.supply}
                        </p>
                    </div>

                    {/* <div className="w-full items-center gap-x-1  px-1 text-center">
                <p className="text-xs leading-0">Followers</p>
                <p className="text-xs font-bold leading-0 text-primary">{collection?.followers?.length || 0}</p>
            </div>
            <div className="flex w-full items-center gap-x-1 truncate px-1 pr-2">
                <p className="text-[10px] leading-0">Minted</p>
                <p className="text-[10px] font-bold leading-0 text-primary">
                    {Number(currentSupply) / collection?.supply == 0 ? 'unlimited' : collection?.supply}
                </p>
            </div> */}
                </div>
            </Link>
        </div>
    );
};
