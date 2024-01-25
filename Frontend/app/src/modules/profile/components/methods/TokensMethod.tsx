// import { useQuery } from '@apollo/client';
// import { Button } from '@components/Button';
import ChainFlow from '@components/ChainFlow.tsx';
import Comments from '@components/Comments';
// import FormatCryptoCurrency from '@components/CurrencyFormat/FormatCryptoCurrency';
import FormCheck from '@components/Forms/FormCheck';
import ImageComponent from '@components/ImageComponent';
// import Likes from '@components/Likes';
// import Loader from '@components/Loader';
// import Loader from '@components/Loader';
import NoItemFound from '@components/NoItemFound';
// import Loader from '@components/Loader';
// import { OpenSeaVerified } from '@components/OpenSeaVerified/OpenSeaVerified';
// import Repost from '@components/Repost';
import { TokenActions } from '@components/token/TokenActions';
import Views from '@components/Views';
import WalletAddress from '@components/WalletAddress';
// import { ChainContext } from '@context/ChainContextProvider';
import { TokenMedia, useBids, useListings /* useUserTokens */ } from '@reservoir0x/reservoir-kit-ui';
// import EthIcon from '@components/_Icons/EthIcon';
// import { ChainContext } from '@context/ChainContextProvider';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
// import { GET_WALLET_BY_ADDRESS } from 'src/graphql/user';
// import { WalletResponse } from 'src/modules/nft.detail.module/components/InformationSection';
import { useIntersectionObserver } from 'usehooks-ts';
import { Address, useAccount } from 'wagmi';
import { UserToken } from '../BatchListings';
// import { FormatCryptoCurrency } from '@components/CurrencyFormat';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
// import { GET_HIDDEN_TOKENS } from 'src/graphql/tokens';
// import { useSelector } from 'react-redux';
// import { userSelector } from 'src/store/selectors';
import TableLoader from '@components/TableLoader';
import { IUser } from 'src/interfaces';
import HideTokenButton from '@components/buttons/HideButton';
import { useQuery } from '@apollo/client';
import { GET_COLLECTION_BY_CHAIN_AND_ADDRESS } from 'src/graphql/collection';
import useTranslation from 'next-translate/useTranslation';
import { GET_TOKEN_POST } from 'src/graphql/feeds';
import { useSelector } from 'react-redux';
import { userSelector } from 'src/store/selectors';
import Link from 'next/link';
import RepostDropdown from 'src/modules/home/components/CommentsThreads/RepostDropdown';
import LikePost from '@components/Likes/LikePost';
import { useCurrency } from '@context/CurrencyContext';
import dynamic from 'next/dynamic';
const Tooltip = dynamic(() => import('@components/Tooltip'));
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
    isValidating: boolean;
    fetchNextPage: Function;
}
const ListViewItems = 'px-2 py-2 whitespace-nowrap text-center text-xs h-[3.2rem]';

const TokensMethod: React.FC<Props> = ({
    address,
    mutate,
    selectedTabIdx,
    selectedItems,
    setSelectedItems,
    // user,
    isOwner,
    tokens,
    isValidating,
    fetchNextPage
}) => {
    // const itemsPerPage = 10; // Number of items to show per page
    // const [currentPage, setCurrentPage] = useState(1);
    // const [paginatedTokens, setPaginatedTokens] = useState([]);
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});

    React.useEffect(() => {
        const isVisible = !!loadMoreObserver?.isIntersecting;
        if (isVisible) {
            fetchNextPage();
        }
    }, [loadMoreObserver?.isIntersecting]);

    React.useEffect(() => {
        const isVisible = !!loadMoreObserver?.isIntersecting;
        if (isVisible) {
            fetchNextPage();
        }
    }, [loadMoreObserver?.isIntersecting]);
    const { t } = useTranslation('common');

    return (
        <tbody className="divide-y divide-lightBorder dark:divide-[#727279]">
            {!isValidating && tokens?.length === 0 ? (
                <NoItemFound text={t('profile.no_collection')} />
            ) : (
                tokens?.map((token, i: number) => (
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
            {isValidating && <TableLoader />}
        </tbody>
    );
};

export default TokensMethod;
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
const TableRow = ({ token, address, mutate, i, selectedTabIdx, selectedItems, setSelectedItems, isOwner }: ITableRow) => {
    const { convertPrice, currency } = useCurrency();
    const account = useAccount();
    const [integratedPost, setIntegratedPost] = useState();
    const user = useSelector(userSelector);

    const marketplaceChain = useMarketplaceChain();

    const { refetch: refetchPosts } = useQuery(GET_TOKEN_POST, {
        variables: {
            contract: token.token?.contract,
            chain: 'arbitrum' || marketplaceChain?.routePrefix,
            tokenId: token.token?.tokenId
        },
        onCompleted: (data) => {
            const post = data.postOfNft;
            if (post) {
                setIntegratedPost(post);
            }
        },
        onError: () => {},
        skip: token ? false : true
    });
    useEffect(() => {
        refetchPosts();
    }, []);

    const { data: offers } = useBids({
        token: `${token?.token?.collection?.id}:${token?.token?.tokenId}`,
        includeRawData: true,
        sortBy: 'price',
        limit: 1
    });

    const { data: listings } = useListings({
        token: `${token?.token?.collection?.id}:${token?.token?.tokenId}`,
        includeRawData: true,
        sortBy: 'price',
        limit: 1
    });

    const offer = offers && offers[0] ? offers[0] : undefined;
    const listing = listings && listings[0] ? listings[0] : undefined;

    // const { data: owner } = useQuery<{ wallet: WalletResponse }>(GET_WALLET_BY_ADDRESS, {
    //     variables: {
    //         address: token?.owner || token?.minter
    //     },
    //     skip: !token?.owner || !token?.minter
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
                                    figclassname="flex-shrink-0 rounded  object-cover overflow-hidden h-7 w-7"
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
                                overflow: 'hidden',
                                objectFit: 'cover',
                                flexShrink: '0'
                            }}
                            className="h-7 w-7 object-cover"
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
                                    <Link
                                        passHref
                                        href={`/collection/${'arbitrum' || marketplaceChain?.routePrefix}/${token?.token?.contract}/${
                                            token?.token?.tokenId
                                        }`}
                                        className={`cursor-pointer `}
                                    >
                                        <Comments
                                            post={integratedPost}
                                            valueClass={
                                                user && integratedPost?.commentsBy && integratedPost?.commentsBy.find((x) => x._id === user._id)
                                                    ? 'text-xs dark:text-comments'
                                                    : 'dark:text-secondary text-xs'
                                            }
                                            iconClass={
                                                user && integratedPost?.commentsBy && integratedPost?.commentsBy.find((x) => x._id === user._id)
                                                    ? 'text-sm  dark:text-comments'
                                                    : 'dark:text-secondary text-sm'
                                            }
                                            iconAlign={true}
                                        />
                                    </Link>
                                    {/* <Comments iconClass="text-base flex-shrink-0 fls dark:text-white" valueClass="dark:text-white" /> */}
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-4">
                                    <RepostDropdown
                                        // nftTokenData={nftTokenData}
                                        post={integratedPost}
                                        iconClass={
                                            user && integratedPost?.repostedBy && integratedPost.repostedBy?.find((x) => x?._id === user?._id)
                                                ? 'text-repost text-sm '
                                                : ' dark:text-secondary text-sm'
                                        }
                                        valueClass={
                                            user && integratedPost?.repostedBy && integratedPost.repostedBy?.find((x) => x?._id === user?._id)
                                                ? 'text-repost text-xs'
                                                : 'text-xs dark:text-secondary'
                                        }
                                        setPost={setIntegratedPost}
                                        token={{
                                            chain: 'arbitrum' || marketplaceChain?.routePrefix,
                                            name: token.token?.name,
                                            tokenId: token.token?.tokenId,
                                            contract: token.token?.contract,
                                            image: token.token?.image,
                                            collectionName: token.token?.collection?.name
                                            // collectionImage: contentCreatorImage
                                        }}
                                    />
                                    {/* <Repost iconClass="text-sm dark:text-white" valueClass="dark:text-white" /> */}
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className=" flex justify-start pl-2">
                                    <LikePost
                                        // nftTokenData={nftTokenData}
                                        post={integratedPost}
                                        iconClass=" text-secondary text-sm"
                                        valueClass="text-xs"
                                        token={{
                                            chain: 'arbitum' || marketplaceChain?.routePrefix,
                                            name: token.token?.name,
                                            tokenId: token.token?.tokenId,
                                            contract: token.token?.contract,
                                            image: token.token?.image,
                                            collectionName: token.token?.collection?.name,
                                            collectionImage: token.token?.collection?.image
                                        }}
                                    />
                                    {/* <Likes iconClass="text-sm dark:text-white" valueClass="dark:text-white" /> */}
                                </div>
                            </td>
                            <td className={ListViewItems}>
                                <div className="flex w-16 justify-start pl-2">
                                    <Views
                                        iconClass="text-xs text-lightText dark:text-secondary"
                                        valueClass="text-lightText dark:text-secondary"
                                        post={integratedPost}
                                        countClass="mt-[2px]"
                                    />
                                    {/* <Views iconClass="text-sm dark:text-white" valueClass="dark:text-white" /> */}
                                </div>
                            </td>
                        </>
                    )}
                    {selectedTabIdx !== 2 && (
                        <>
                            <td className={ListViewItems}>Minted</td>
                            {selectedTabIdx !== 4 && (
                                <>
                                    <td className={ListViewItems}>
                                        <div className="flex items-center justify-center gap-0.5">
                                            {/* <FormatCryptoCurrency
                                                amount={token?.token?.collection?.floorAskPrice?.amount?.decimal}
                                                address={token?.token?.collection?.floorAskPrice?.currency?.contract}
                                                decimals={token?.token?.collection?.floorAskPrice?.currency?.decimals}
                                            /> */}
                                            {currency?.icon} {convertPrice(token?.token?.collection?.floorAskPrice?.amount?.native, 'ETH')}
                                        </div>
                                    </td>

                                    <td className={ListViewItems}>
                                        <div className="flex items-center justify-center gap-0.5">
                                            {/* <FormatCryptoCurrency
                                                amount={token?.token?.topBid?.price?.amount?.decimal}
                                                address={token?.token?.topBid?.price?.currency?.contract}
                                                decimals={token?.token?.topBid?.price?.currency?.decimals}
                                            /> */}
                                            {currency?.icon} {convertPrice(token?.token?.topBid?.price?.amount?.native, 'ETH')}
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
                                            mutate={mutate}
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
                                        mutate={mutate}
                                        isOwner={isOwner}
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
