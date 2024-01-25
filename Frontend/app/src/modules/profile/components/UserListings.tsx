// import React, { FC, useContext, useEffect, useRef } from 'react';
// import { useIntersectionObserver, useMediaQuery } from 'usehooks-ts';
// import { useListings } from '@reservoir0x/reservoir-kit-ui';
// import { ChainContext } from '@context/ChainContextProvider';
// import { Address } from 'wagmi';
// import { MutatorCallback } from 'swr';
// import useMarketplaceChain from '@hooks/useMarketplaceChain';
// import useTimeSince from '@hooks/useTimeSince';
// import Link from 'next/link';
// import ImageComponent from '@components/ImageComponent';
// import { FormatCryptoCurrency } from '@components/CurrencyFormat';
// import CancelListing from '@components/buttons/CancelListing';
// import Tooltip from '@components/Tooltip';
// import { Button } from '@components/Button';
// const AtHolderHead = 'px-4 py-3 text-xs text-center text-black dark:text-white font-semibold whitespace-nowrap capitalize';
// const AtHolderItems = 'px-4 py-1.5 whitespace-nowrap  text-black dark:text-white text-xs text-center';

// type Props = {
//     address: Address;
// };
// export const UserListings: FC<Props> = ({ address }) => {
//     const loadMoreRef = useRef<HTMLDivElement>(null);
//     const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});

//     let listingsQuery: Parameters<typeof useListings>['0'] = {
//         limit:100,
//         maker: address,
//         includeCriteriaMetadata: true,
//         includeRawData: true,
//         sortBy:'price'
//     };
//     const { chain } = useContext(ChainContext);

//     if (chain.community) listingsQuery.community = chain.community;

//     const { data: listings, mutate, fetchNextPage, isFetchingPage, isValidating } = useListings(listingsQuery);
//     useEffect(() => {
//         const isVisible = !!loadMoreObserver?.isIntersecting;
//         if (isVisible) {
//             fetchNextPage();
//         }
//     }, [loadMoreObserver?.isIntersecting]);
//     return (
//         <div className="AtScrollHide overflow-x-auto">
//             {!isValidating && !isFetchingPage && listings && listings.length === 0 ? (
//                 <div>No listings yet</div>
//             ) : (
//                 <div className="inline-block min-w-full align-middle">
//                     <div className="AtScrollHide relative max-h-[16rem] overflow-auto rounded-b border border-lightBorder dark:border-borderColor">
//                         <table className="min-w-full rounded">
//                             <thead className="sticky top-0 z-20 border-b border-lightBorder bg-lightBg dark:border-borderColor dark:bg-gray17">
//                                 <tr>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Items
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Listed Price
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Expiration
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Marketplace
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}></th>
//                                 </tr>
//                             </thead>
//                             <tbody className="">
//                                 {listings.map((listing, i) => {
//                                     return <ListingTableRow key={`${listing?.id}-${i}`} listing={listing} mutate={mutate} />;
//                                 })}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// type ListingTableRowProps = {
//     listing: ReturnType<typeof useListings>['data'][0];
//     mutate?: MutatorCallback;
// };

// const ListingTableRow: FC<ListingTableRowProps> = ({ listing, mutate }) => {
//     const { routePrefix } = useMarketplaceChain();
//     const expiration = useTimeSince(listing?.expiration);

//     const isOracleOrder = listing?.isNativeOffChainCancellable;

//     let criteriaData = listing?.criteria?.data;

//     let imageSrc: string = (
//         criteriaData?.token?.tokenId ? criteriaData?.token?.image || criteriaData?.collection?.image : criteriaData?.collection?.image
//     ) as string;

//     return (
//         <tr className={`cursor-pointer border-b border-lightBorder hover:bg-lightHover dark:border-borderColor dark:hover:bg-garylight`}>
//             <td className={AtHolderItems}>
//                 <Link href={`/collection/${routePrefix}/${listing?.contract}/${criteriaData?.token?.tokenId}`}>
//                     <ImageComponent
//                         // src="/assets/images/icons/opensea.svg"
//                         className="object-cover"
//                         figclassname="overflow-hidden flex-shrink-0 rounded-full h-6 w-6 cursor-pointer"
//                         // fill

//                         src={imageSrc as string}
//                         alt={`${criteriaData?.token?.name}`}
//                         width={48}
//                         height={48}
//                     />
//                     <p>{criteriaData?.collection?.name}</p>
//                     <p> #{criteriaData?.token?.tokenId}</p>
//                 </Link>
//             </td>
//             <td className={AtHolderItems}>
//                 <FormatCryptoCurrency amount={listing?.price?.amount?.native} address={listing?.price?.currency?.contract} />
//             </td>
//             <td>{expiration}</td>
//             <td className={AtHolderItems}>
//                 {listing?.source?.icon ? (
//                     <figure className='"overflow-hidden cursor-pointer" h-6 w-6 flex-shrink-0 rounded-full'>
//                         <img
//                             // fill

//                             src={listing?.source?.icon}
//                             width={48}
//                             height={48}
//                         />
//                     </figure>
//                 ) : null}

//                 <a href={`https://${listing?.source?.domain as string}`} target="_blank">
//                     {listing?.source?.name as string}
//                 </a>
//             </td>
//             <td>
//                 <CancelListing
//                     listingId={listing?.id as string}
//                     mutate={mutate}
//                     trigger={
//                         <div>
//                             {!isOracleOrder ? (
//                                 <Tooltip text={'Cancelling this order requires gas.'}>
//                                     <Button>Cancel</Button>
//                                 </Tooltip>
//                             ) : (
//                                 <Button>Cancel</Button>
//                             )}
//                         </div>
//                     }
//                 />
//             </td>
//         </tr>
//     );
// };
import React from 'react';

function UserListings() {
    return <div>its not using yet</div>;
}

export default UserListings;
