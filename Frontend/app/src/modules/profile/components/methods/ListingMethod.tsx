import React, { FC, useContext, useEffect, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { useListings } from '@reservoir0x/reservoir-kit-ui';
import { ChainContext } from '@context/ChainContextProvider';
import { Address, useAccount } from 'wagmi';
import { MutatorCallback } from 'swr';
// import useMarketplaceChain from '@hooks/useMarketplaceChain';
import useTimeSince from '@hooks/useTimeSince';
import ImageComponent from '@components/ImageComponent';
// import { FormatCryptoCurrency } from '@components/CurrencyFormat';
import CancelListing from '@components/buttons/CancelListing';
import { Button } from '@components/Button';
import Comments from '@components/Comments';
import Repost from '@components/Repost';
import Likes from '@components/Likes';
import Views from '@components/Views';
import EthIcon from '@components/_Icons/EthIcon';
import NoItemFound from '@components/NoItemFound';
import BuyNow from '@components/buttons/BuyNow';
import useTranslation from 'next-translate/useTranslation';
import { useCurrency } from '@context/CurrencyContext';
import dynamic from 'next/dynamic';
const Tooltip = dynamic(() => import('@components/Tooltip'));
// const AtHolderHead = 'px-4 py-3 text-xs text-center text-black dark:text-white font-semibold whitespace-nowrap capitalize';
const AtHolderItems = 'px-4 py-1.5 whitespace-nowrap  text-black dark:text-white text-xs text-center';

type Props = {
    address: Address;
    listedTabIdx?: number;
};
export const ListingMethod: FC<Props> = ({ address, listedTabIdx }) => {
    // ---------------- LISTING METHOD --------------

    let listingsQuery: Parameters<typeof useListings>['0'] = {
        limit: 100,
        maker: address,
        includeCriteriaMetadata: true,
        includeRawData: true,
        sortBy: 'price'
    };
    const { chain } = useContext(ChainContext);

    if (chain.community) listingsQuery.community = chain.community;

    const { data: listings, mutate, fetchNextPage, isFetchingPage, isValidating } = useListings(listingsQuery);

    const loadMoreRef = useRef<HTMLDivElement>(null);
    const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});
    useEffect(() => {
        const isVisible = !!loadMoreObserver?.isIntersecting;
        if (isVisible) {
            fetchNextPage();
        }
    }, [loadMoreObserver?.isIntersecting]);

    const account = useAccount();
    const { t } = useTranslation('common');

    return (
        // <div className="AtScrollHide overflow-x-auto">
        //     {!isValidating && !isFetchingPage && listings && listings.length === 0 ? (
        //         <div>No listings yet</div>
        //     ) : (
        //         <div className="inline-block min-w-full align-middle">
        //             <div className="AtScrollHide relative max-h-[16rem] overflow-auto rounded-b border border-lightBorder dark:border-borderColor">
        //                 <table className="min-w-full rounded">
        //                     <thead className="sticky top-0 z-20 border-b border-lightBorder bg-lightBg dark:border-borderColor dark:bg-gray17">
        //                         <tr>
        //                             <th scope="col" className={AtHolderHead}>
        //                                 Items
        //                             </th>
        //                             <th scope="col" className={AtHolderHead}>
        //                                 Listed Price
        //                             </th>
        //                             <th scope="col" className={AtHolderHead}>
        //                                 Expiration
        //                             </th>
        //                             <th scope="col" className={AtHolderHead}>
        //                                 Marketplace
        //                             </th>
        //                             <th scope="col" className={AtHolderHead}></th>
        //                         </tr>
        //                     </thead>
        <tbody className="">
            {!isValidating && !isFetchingPage && listings && listings.length === 0 ? (
                <div className="h-64">
                    <NoItemFound text={t('profile.no_listings')} />
                </div>
            ) : (
                listings.map((listing, i) => {
                    return (
                        <ListingTableRow
                            key={`${listing?.id}-${i}`}
                            listing={listing}
                            isOwner={account?.address ? address == account.address : false}
                            mutate={mutate}
                            listedTabIdx={listedTabIdx}
                        />
                    );
                })
            )}
        </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
};

type ListingTableRowProps = {
    listing: ReturnType<typeof useListings>['data'][0];
    mutate?: MutatorCallback;
    isOwner: boolean;
};
const ListViewItems = 'px-2 py-2 whitespace-nowrap text-center text-xs h-[3.2rem]';

const ListingTableRow: FC<ListingTableRowProps> = ({ listing, mutate, listedTabIdx, isOwner }) => {
    const { convertPrice, currency } = useCurrency();
    // const { routePrefix } = useMarketplaceChain();
    const expiration = useTimeSince(listing?.expiration);

    const isOracleOrder = listing?.isNativeOffChainCancellable;

    let criteriaData = listing?.criteria?.data;

    let imageSrc: string = (
        criteriaData?.token?.tokenId ? criteriaData?.token?.image || criteriaData?.collection?.image : criteriaData?.collection?.image
    ) as string;

    const { t } = useTranslation('common');

    return (
        <tr className={`cursor-pointer border-b border-lightBorder hover:bg-lightHover dark:border-borderColor dark:hover:bg-garylight`}>
            {listedTabIdx !== 1 && listedTabIdx !== 2 && listedTabIdx !== 3 && (
                <>
                    <td className={ListViewItems}></td>
                    <td className={ListViewItems}>
                        <div className=" flex justify-center">
                            <Tooltip text="Eth">
                                <EthIcon classNames="h-5 w-5" />
                            </Tooltip>
                        </div>
                    </td>
                </>
            )}
            {listedTabIdx !== 2 && (
                <>
                    <td className={AtHolderItems}>
                        <div className="flex items-center gap-2">
                            {/* <Link href={`/collection/${routePrefix}/${listing?.contract}/${criteriaData?.token?.tokenId}`}> */}
                            <ImageComponent
                                src={imageSrc || '/assets/images/placeholdercol.svg'}
                                alt={`${criteriaData?.token?.name}`}
                                figclassname="flex-shrink-0 rounded object-cover overflow-hidden h-7 w-7"
                                className="rounded"
                                fill={true}
                            />
                            <div className="max-w-[8rem] truncate">
                                <div className="flex items-center gap-1">
                                    <h2 className=" truncate text-xs font-bold capitalize text-black dark:text-white">
                                        {criteriaData?.collection?.name}
                                    </h2>
                                </div>
                                <div className=" max-w-[10rem] truncate text-left text-[10px] capitalize text-[#4C4C53]">
                                    #{criteriaData?.token?.tokenId}
                                </div>
                            </div>
                            {/* </Link> */}
                        </div>
                    </td>
                    {listedTabIdx !== 3 && (
                        <>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-6">
                                    <Comments iconClass="text-base flex-shrink-0 fls dark:text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-4">
                                    <Repost iconClass="text-sm dark:text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-2">
                                    <Likes iconClass="text-sm dark:text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className="bd flex justify-start pl-2">
                                    <Views iconClass="text-sm dark:text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                        </>
                    )}
                </>
            )}

            {listedTabIdx !== 1 && (
                <>
                    <td className={ListViewItems}>{t('feeds.listed')}</td>
                    {listedTabIdx !== 3 && (
                        <>
                            <td className={AtHolderItems}>
                                {/* <FormatCryptoCurrency
                                    amount={listing?.price?.amount?.native}
                                    parentClass="justify-center"
                                    address={listing?.price?.currency?.contract}
                                /> */}
                                <div className="flex items-center gap-0.5">
                                    {currency?.icon} {convertPrice(listing?.price?.amount?.native, 'ETH')}
                                </div>
                            </td>
                            <td className={AtHolderItems}>{expiration}</td>
                        </>
                    )}
                    <td className={AtHolderItems}>
                        <div className="flex items-center justify-center gap-2">
                            {listing?.source?.icon ? (
                                <ImageComponent src={listing?.source?.icon as string} alt={listing?.source?.name as string} width={24} height={24} />
                            ) : null}
                            <div className="max-w-[8rem] truncate">
                                <div className="flex items-center gap-1">
                                    <h2 className=" truncate text-xs font-bold capitalize text-black dark:text-white">
                                        {' '}
                                        <a href={`https://${listing?.source?.domain as string}`} target="_blank">
                                            {listing?.source?.name as string}
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </td>
                </>
            )}
            {isOwner && listedTabIdx !== 1 && listedTabIdx !== 2 && (
                <td>
                    <CancelListing
                        listingId={listing?.id as string}
                        mutate={mutate}
                        trigger={
                            <div>
                                {!isOracleOrder ? (
                                    <>
                                        <div className={`${AtHolderItems}, hidden sm:block`}>
                                            <Button>{t('buttons.cancel')}</Button>
                                        </div>
                                        <div className={`${AtHolderItems}, block sm:hidden`}>
                                            <Button>{t('buttons.cancel')}</Button>
                                        </div>
                                    </>
                                ) : (
                                    <Button>{t('buttons.cancel')}</Button>
                                )}
                            </div>
                        }
                    />
                </td>
            )}
            {!isOwner && listedTabIdx !== 1 && listedTabIdx !== 2 && listing?.price?.amount && (
                <div className="h-13 sm:max-w-64 flex w-full min-w-max justify-center gap-1 overflow-hidden rounded-lg">
                    <BuyNow
                        tokenId={listing.criteria?.data?.token?.tokenId}
                        collectionId={listing.criteria?.data?.collection?.id}
                        // chainName={token?.token?.chain}
                        // className="flex-grow justify-center"
                        // corners="square"
                        // children="Buy Now"
                        mutate={mutate}
                    >
                        {t('buttons.buy-now')}
                    </BuyNow>
                    {/* <AddToCart token={token} className="w-13 justify-center p-0" /> */}
                </div>
            )}
        </tr>
    );
};
