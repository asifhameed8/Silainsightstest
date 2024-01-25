// import { useQuery } from '@apollo/client';
// import { Button } from '@components/Button';
import ChainFlow from '@components/ChainFlow.tsx';
import Comments from '@components/Comments';
// import FormatCryptoCurrency from '@components/CurrencyFormat/FormatCryptoCurrency';
import FormCheck from '@components/Forms/FormCheck';
import ImageComponent from '@components/ImageComponent';
import Likes from '@components/Likes';
// import Loader from '@components/Loader';
// import Loader from '@components/Loader';
import NoItemFound from '@components/NoItemFound';
// import Loader from '@components/Loader';
// import { OpenSeaVerified } from '@components/OpenSeaVerified/OpenSeaVerified';
import Repost from '@components/Repost';
import { TokenActions } from '@components/token/TokenActions';
import Views from '@components/Views';
import WalletAddress from '@components/WalletAddress';
// import { ChainContext } from '@context/ChainContextProvider';
import { TokenMedia, useBids, useListings /* useUserTokens */ } from '@reservoir0x/reservoir-kit-ui';
// import EthIcon from '@components/_Icons/EthIcon';
// import { ChainContext } from '@context/ChainContextProvider';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
// import { GET_WALLET_BY_ADDRESS } from 'src/graphql/user';
// import { WalletResponse } from 'src/modules/nft.detail.module/components/InformationSection';
import { useIntersectionObserver } from 'usehooks-ts';
import { Address, useAccount } from 'wagmi';
import { UserToken } from '../BatchListings';
import { FormatCryptoCurrency } from '@components/CurrencyFormat';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
// import { GET_HIDDEN_TOKENS } from 'src/graphql/tokens';
// import { useSelector } from 'react-redux';
// import { userSelector } from 'src/store/selectors';
import TableLoader from '@components/TableLoader';
import { IUser } from 'src/interfaces';
import HideTokenButton from '@components/buttons/HideButton';
import { GET_COLLECTION_BY_CHAIN_AND_ADDRESS } from 'src/graphql/collection';
import { useQuery } from '@apollo/client';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
const Tooltip = dynamic(() => import('@components/Tooltip'));
// import NameWithSortIcon from '@components/NameWithShortIcon/NameWithSortIcon';
interface Props {
    tokens: UserToken[];
    selectedCollection: any;
    address: Address;
    selectedTabIdx?: number;
    selectedItems: UserToken[];
    setSelectedItems: React.Dispatch<React.SetStateAction<UserToken[]>>;
    user: IUser;
    mutate: any;
    isOwner: boolean;
    isValidatingTokens: boolean;
    fetchNextTokens: Function;
}
const ListViewItems = 'px-2 py-2 whitespace-nowrap text-center text-xs h-[3.2rem]';
const ListViewHeadings =
    'px-2 py-3 text-xs tracking-wider font-semibold whitespace-nowrap text-center text-lightText text-black dark:text-white uppercase';
const StaredTokensTable: React.FC<Props> = ({
    address,
    mutate,
    selectedTabIdx,
    selectedItems,
    setSelectedItems,
    // user,
    isOwner,
    tokens,
    isValidatingTokens,
    fetchNextTokens
}) => {
    // const itemsPerPage = 10; // Number of items to show per page
    // const [currentPage, setCurrentPage] = useState(1);
    // const [paginatedTokens, setPaginatedTokens] = useState([]);
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});
    // const account = useAccount();
    // const user = useSelector(userSelector);

    // useEffect(() => {
    //     const filteredAndPaginatedTokens = selectedCollection
    //         ? tokens.filter((token: any) => token.collection.contract === selectedCollection.contract)
    //         : tokens;

    //     const startIndex = (currentPage - 1) * itemsPerPage;
    //     const endIndex = startIndex + itemsPerPage;

    //     const tokensToDisplay = filteredAndPaginatedTokens.slice(
    //         0,
    //         endIndex // Always slice from the beginning
    //     );

    //     setPaginatedTokens(tokensToDisplay);
    // }, [currentPage, selectedCollection, tokens]);

    // useEffect(() => {
    //     const isVisible = !!loadMoreObserver?.isIntersecting;
    //     if (isVisible) {
    //         handlePageChange(currentPage + 1);
    //     }
    // }, [loadMoreObserver?.isIntersecting]);

    // const handlePageChange = (newPage: number) => {
    //     setCurrentPage(newPage);
    // };

    // ---------------- NFT METHOD --------------

    // let tokenQuery: Parameters<typeof useUserTokens>['1'] = {
    //     limit: 21,
    //     sortBy: 'acquiredAt',
    //     source: 'mintstartgram.tech'
    //     // collection: filterCollection,
    //     // includeTopBid: true,
    //     // includeRawData: true,
    //     // includeAttributes: true
    // };
    // const {} = useContext(ChainContext);

    // if (chain.collectionSetId) {
    //     tokenQuery.collectionsSetId = chain.collectionSetId;
    // } else if (chain.community) {
    //     tokenQuery.community = chain.community;
    // }

    // let {
    //     data: tokenstable,
    //     fetchNextPage: fetchNextTokens,
    //     isValidating: isValidatingTokens
    // } = useUserTokens(address, tokenQuery, { revalidateIfStale: true });

    // const { data } = useQuery(GET_HIDDEN_TOKENS, {
    //     variables: {
    //         userId: user?._id
    //     },
    //     skip: !user
    // });

    // const hiddenTokens = data?.hiddenTokens;
    // tokenstable = tokenstable.filter((item) => {
    //     const tokenContract = item.token?.contract?.toLowerCase();
    //     const tokenId = item.token?.tokenId;

    //     return (
    //         tokenContract &&
    //         tokenId &&
    //         !hiddenTokens?.some((hiddenToken: any) => hiddenToken.tokenId === tokenId && hiddenToken.contract.toLowerCase() === tokenContract)
    //     );
    // });

    React.useEffect(() => {
        const isVisible = !!loadMoreObserver?.isIntersecting;
        if (isVisible) {
            fetchNextTokens();
        }
    }, [loadMoreObserver?.isIntersecting]);

    React.useEffect(() => {
        const isVisible = !!loadMoreObserver?.isIntersecting;
        if (isVisible) {
            fetchNextTokens();
        }
    }, [loadMoreObserver?.isIntersecting]);
    const { t } = useTranslation('common');

    return (
        <div className="overflow-x-auto rounded border border-lightBorder dark:border-borderColor">
            <div className="inline-block min-w-full align-middle ">
                <div className="AtScrollHide relative h-[20rem] overflow-auto rounded bg-white dark:bg-transparent sm:h-[40rem]">
                    <table className=" min-w-full  rounded ">
                        <thead className="sticky top-0 !z-10 h-[3rem] border-b border-lightBorder bg-lightBg dark:border-borderColor dark:bg-gray17 md:h-[3.3rem] ">
                            <tr>
                                <th scope="col" className={`${ListViewHeadings} w-12`}>
                                    <p className="invisible">che</p>
                                </th>
                                <th scope="col" className={`${ListViewHeadings}`}>
                                    {t('explore.chain')}
                                </th>

                                <th scope="col" className={ListViewHeadings}>
                                    <div className="hidden !text-left sm:block ">{t('collections.collection')}</div>
                                </th>

                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    {t('tooltips.nft')}
                                </th>

                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    {t('tooltips.comments')}
                                </th>
                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    {t('explore.reposts')}
                                </th>
                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    {t('explore.likes')}
                                </th>
                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    {t('explore.views')}
                                </th>
                                <th scope="col" className={ListViewHeadings}>
                                    {t('collections.floorprice')}
                                </th>
                                <th scope="col" className={`${ListViewHeadings} pr-6`}>
                                    {t('profile.actions')}
                                </th>
                                <th scope="col" className={`${ListViewHeadings} pr-6`}></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-lightBorder dark:divide-[#727279]">
                            {!isValidatingTokens && tokens?.length === 0 ? (
                                <NoItemFound text={t('profile.no_collection')} />
                            ) : (
                                tokens?.map((token: any, i: number) => (
                                    <TableRow
                                        token={token}
                                        i={i}
                                        key={i}
                                        mutate={mutate}
                                        selectedTabIdx={selectedTabIdx}
                                        selectedItems={selectedItems}
                                        address={address}
                                        setSelectedItems={setSelectedItems}
                                        isOwner={isOwner}
                                    />
                                ))
                            )}
                            <tr>
                                <td colSpan={11}>
                                    <div ref={loadMoreRef}></div>
                                </td>
                            </tr>
                            {isValidatingTokens && <TableLoader />}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StaredTokensTable;

type ITableRow = {
    token: UserToken;
    i: number;
    selectedTabIdx?: number;
    selectedItems: UserToken[];
    setSelectedItems: React.Dispatch<React.SetStateAction<UserToken[]>>;
    isOwner: boolean;
    mutate: any;
    address: any;
};
const TableRow = ({ token, address, mutate: mutateTokens, i, selectedTabIdx, selectedItems, setSelectedItems, isOwner }: ITableRow) => {
    const account = useAccount();

    const { data: offers } = useBids({
        token: `${token?.token?.collection?.id}:${token?.token?.tokenId}`,
        includeRawData: true,
        sortBy: 'price',
        limit: 1
    });

    const { data: listings /* mutate */ } = useListings({
        token: `${token?.token?.collection?.id}:${token?.token?.tokenId}`,
        includeRawData: true,
        sortBy: 'price',
        limit: 1
    });

    const offer = offers && offers[0] ? offers[0] : undefined;
    const listing = listings && listings[0] ? listings[0] : undefined;

    // const { data: owner } = useQuery<{ wallet: WalletResponse }>(GET_WALLET_BY_ADDRESS, {
    //     variables: {
    //         address: token?.token?.owner || token?.token?.minter
    //     },
    //     skip: !token?.token?.owner || !token?.token?.minter
    // });
    const { routePrefix } = useMarketplaceChain();
    const router = useRouter();

    const { data: collectionResponse } = useQuery(GET_COLLECTION_BY_CHAIN_AND_ADDRESS, {
        variables: {
            address: token?.token?.contract,
            chain: routePrefix
        },
        skip: !token?.token?.contract
    });

    const collection = collectionResponse?.collection;

    const addSelectedItem = (item: UserToken) => {
        setSelectedItems([...selectedItems, item]);
    };

    const removeSelectedItem = (item: UserToken) => {
        setSelectedItems(
            selectedItems.filter(
                (selectedItem) => selectedItem?.token?.tokenId !== item?.token?.tokenId || selectedItem?.token?.contract !== item?.token?.contract
            )
        );
    };

    const isSelectedItem = (item: UserToken) => {
        return selectedItems?.some(
            (selectedItem) => selectedItem?.token?.tokenId === item?.token?.tokenId && selectedItem?.token?.contract === item?.token?.contract
        );
    };

    return (
        <tr key={'pro' + i} className="cursor-pointer bg-transparent text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark">
            <td className={`${ListViewItems}  text-center`}>
                {isOwner && (
                    <FormCheck
                        checked={isSelectedItem({ token: token?.token })}
                        onChange={(e) => {
                            if (e?.target?.checked) {
                                addSelectedItem({ token: token?.token });
                            } else {
                                removeSelectedItem({ token: token?.token });
                            }
                        }}
                        label={''}
                    />
                )}
            </td>
            {selectedTabIdx !== 2 && selectedTabIdx !== 3 && selectedTabIdx !== 4 && (
                <td className={`${ListViewItems} relative`}>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ChainFlow />
                    </div>
                </td>
            )}
            {selectedTabIdx !== 3 && selectedTabIdx !== 4 && (
                <td className={ListViewItems}>
                    <div className="flex flex-shrink-0 items-center gap-2">
                        <div
                            className="flex items-center gap-2"
                            onClick={() => {
                                router.push(`/collection/${routePrefix}/${token?.token?.collection?.id}`);
                            }}
                        >
                            <div>
                                <ImageComponent
                                    src={
                                        token?.token?.collection?.imageUrl ||
                                        token?.token?.collection?.image ||
                                        collection?.image ||
                                        '/assets/images/placeholdercol.svg'
                                    }
                                    figclassname="flex-shrink-0 rounded object-cover overflow-hidden h-7 w-7"
                                    className="rounded"
                                    fill={true}
                                    alt={token?.token?.collection?.name}
                                />
                            </div>
                            <div className="w-[8rem] truncate">
                                <div className="flex items-center gap-1">
                                    <h2 className=" truncate text-xs font-bold capitalize text-black dark:text-white">
                                        {token?.token?.collection?.name}
                                    </h2>
                                    {token?.token?.collection?.openseaVerificationStatus && <i className="icon-verified text-sm text-primary"></i>}
                                </div>
                                <div className="max-w-[10rem] truncate text-left text-[10px] capitalize text-[#4C4C53]">
                                    <WalletAddress address={token?.token?.collection?.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            )}

            {selectedTabIdx !== 2 && selectedTabIdx !== 3 && (
                <td>
                    <div className="flex items-center gap-2">
                        {/* <ImageComponent
                            src={
                                token?.token?.image
                                    ? token?.token?.image?.includes('http')
                                        ? token?.token?.image
                                        : 'https://ipfs.mintstargram.tech/ipfs/' + token?.token?.image
                                    : '/assets/images/placeholdercol.svg'
                            }
                            figclassname="flex-shrink-0 rounded object-cover overflow-hidden h-7 w-7"
                            className="rounded"
                            fill={true}
                            alt={token?.token?.tokenId + 'source'}
                        /> */}
                        <TokenMedia
                            token={token?.token}
                            videoOptions={{ autoPlay: false, muted: true }}
                            style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: 4,
                                overflow: 'hidden'
                            }}
                            className="object-cover"
                            alt={token?.token?.collection?.name}
                        />
                        <Tooltip text={`#${token?.token?.tokenId}`}>
                            <p className="font-bold text-black dark:text-white">#{String(token?.token?.tokenId).substring(0, 6)}</p>
                        </Tooltip>
                    </div>
                </td>
            )}
            {/* <td className={ListViewItems}>
                <div className="ml-2 flex items-center justify-center gap-2">
                    {owner?.wallet?.userId?.avatar && (
                        <ImageComponent
                            src={owner?.wallet?.userId?.avatar || '/assets/images/avatars/user2.png'}
                            className="object-cover"
                            figclassname="overflow-hidden relative flex-shrink-0 rounded-full h-8 w-8 cursor-pointer"
                            fill
                        />
                    )}
                    {
                        <span>
                            {owner?.wallet?.userId?.userName || (
                                <WalletAddress address={token?.token?.owner || token?.token?.minter} className="dark:!text-chinesesilver" />
                            )}
                        </span>
                    }
                </div>
            </td> */}
            {selectedTabIdx !== 1 && (
                <>
                    {selectedTabIdx !== 3 && selectedTabIdx !== 4 && (
                        <>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-6">
                                    <Comments iconClass="text-base flex-shrink-0 fls text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-4">
                                    <Repost iconClass="text-sm text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-2">
                                    <Likes iconClass="text-sm text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className="flex w-16 justify-start pl-2">
                                    <Views iconClass="text-sm text-white" valueClass="dark:text-white" />
                                </div>
                            </td>
                        </>
                    )}
                    {selectedTabIdx !== 2 && (
                        <>
                            {selectedTabIdx !== 4 && (
                                <>
                                    <td className={ListViewItems}>
                                        <div className="flex justify-center">
                                            <FormatCryptoCurrency
                                                amount={token?.token?.collection?.floorAskPrice?.amount?.decimal}
                                                address={token?.token?.collection?.floorAskPrice?.currency?.contract}
                                                decimals={token?.token?.collection?.floorAskPrice?.currency?.decimals}
                                            />
                                        </div>
                                    </td>
                                </>
                            )}
                            {selectedTabIdx !== 3 && (
                                <td className={`${ListViewItems}`}>
                                    <div className="flex w-[15rem] items-center justify-center">
                                        <TokenActions
                                            token={{
                                                token: { ...token?.token, owner: address },
                                                market: { floorAsk: token?.ownership?.floorAsk, topBid: offer }
                                            }}
                                            offer={offer}
                                            listing={listing}
                                            isOwner={isOwner}
                                            isProfile
                                            mutate={mutateTokens}
                                            account={account}
                                            TopSpace={false}
                                        />
                                        {/* <div className="flex items-center justify-center gap-9">
                                          <Button className={`${isShown === i ? '' : 'hidden'}`} variant="outline">
                                          List
                                        </Button>
                                        </div> */}
                                    </div>
                                </td>
                            )}
                            <td className={ListViewItems}>
                                <div>
                                    <HideTokenButton
                                        className="relative"
                                        contract={token?.token?.contract}
                                        chain={routePrefix}
                                        tokenId={token?.token?.tokenId}
                                        mutate={mutateTokens}
                                        isOwner={isOwner}
                                        hiddenIcon={true}
                                    />
                                </div>
                            </td>
                        </>
                    )}
                </>
            )}
        </tr>
    );
};
