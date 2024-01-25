import React, { FC, useState } from 'react';
import { Address } from 'wagmi';
import ImageComponent from '@components/ImageComponent';
import { OpenSeaVerified } from '@components/OpenSeaVerified/OpenSeaVerified';
import { Collection, CollectionsResponse } from 'src/interfaces/collection.interface';
import { useQuery } from '@apollo/client';
import { GET_COLLECTIONS } from 'src/graphql/collection';
import BasicModal from '@modals/BasicModal';
import CreateCollection from '@modals/CreateCollection';
import Link from 'next/link';
import { IUser } from 'src/interfaces';
import { userSelector } from 'src/store/selectors';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import useTranslation from 'next-translate/useTranslation';

type Props = {
    address: Address;
    user: IUser;
    isOwner: boolean;
};
const MobileProfileCollection: FC<Props> = ({ /* address, */ user, isOwner }) => {
    const authUser = useSelector(userSelector);
    const [openModal, setOpenModal] = useState(false);
    const { t } = useTranslation('common');

    const { data: collectionsData } = useQuery<{ collections: CollectionsResponse }>(GET_COLLECTIONS, {
        variables: {
            query: { creator: user?._id }
        },
        skip: !user?._id
    });
    const collections = collectionsData?.collections;

    if (isOwner == false && isEmpty(collections?.records)) {
        return null;
    }
    return (
        <>
            <div className="mt-3 flex w-full items-start gap-1.5 px-4 sm:px-0">
                <div className="w-full pt-2 sm:pt-3">
                    <p className={` ${collections?.records?.length === 0 ? 'hidden' : 'block'} text-base font-bold dark:text-white`}>
                        {t('profile.content_creator')}
                    </p>
                    <div className="mt-2 flex w-full items-start gap-3">
                        {authUser && authUser?._id == user?._id && (
                            <div className="" onClick={() => setOpenModal(true)}>
                                <div className=" h-[3.6rem] w-[3.6rem] rounded-full border border-primary  p-1 ">
                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-bgDark">
                                        <i className="icon-plus text-base text-black dark:text-white "></i>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div
                            className={`  ${authUser && authUser?._id == user?._id && 'w-[75%] '} ${
                                collections?.records?.length === 0 ? 'sm:w-full' : ' w-full lg:w-[83%]'
                            } `}
                        >
                            {collections?.records?.length != 0 && collections != null && (
                                <div className="AtScrollHide flex w-full gap-2 overflow-x-auto">
                                    {collections?.records?.map((collection, Idx) => (
                                        <Slide collection={collection} key={Idx} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <BasicModal show={openModal} hide={setOpenModal}>
                <CreateCollection />
            </BasicModal>
        </>
    );
};

export default MobileProfileCollection;

type ISlide = {
    collection: Collection;
};
const Slide = ({ collection }: ISlide) => {
    return (
        <Link href={`/collection/${collection?.chain}/${collection?.contract}`}>
            <div className="relative inline-flex flex-col items-center justify-center">
                <div className="relative inline-block rounded-full border border-lightBorder p-1 dark:border-borderColor">
                    <ImageComponent
                        src={(collection?.image as string) || '/assets/images/placeholdercol.svg'}
                        alt={collection?.name as string}
                        fill
                        figclassname="flex-shrink-0 h-12 w-12"
                        className=" rounded-full object-cover"
                    />
                </div>
                <div className="absolute top-1 right-1">
                    <OpenSeaVerified openseaVerificationStatus={collection?.opensea_verified} />
                </div>
                <p className="mt-1.5 w-20 truncate px-2 text-center text-xs font-bold text-black dark:text-white">{collection?.name}</p>
            </div>
        </Link>
    );
};
