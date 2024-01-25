// import Loader from '@components/Loader';
// import NftCard from '@components/NftCard';
import { useUserTokens } from '@reservoir0x/reservoir-kit-ui';
import React, { /* Dispatch, */ FC, useEffect, useMemo, /* SetStateAction, */ useRef, useState } from 'react';
// import { useIntersectionObserver } from 'usehooks-ts';
import TokensTable from './TokensTable';
import { Address /* useAccount */ } from 'wagmi';
// import { Button } from '@components/Button';
import { IUser /* Token */ } from 'src/interfaces';
import { useQuery } from '@apollo/client';
// import { GET_USER_TOKENS } from 'src/graphql/tokens';
// import NftCardLatest from '@components/NftCardLatest';
// import Accordion from '@components/Accordion';
// import { Button } from '@components/Button';
// import MobileTokensTable from './MobileTokensTable';
import NftCard from '@components/NftCard';
import { UserToken } from './BatchListings';
import Loader from '@components/Loader';
import { useIntersectionObserver } from 'usehooks-ts';
import { GET_HIDDEN_TOKENS } from 'src/graphql/tokens';
// import { useSelector } from 'react-redux';
// import { userSelector } from 'src/store/selectors';
//import OutSideClick from 'react-outside-click-handler';
//import { MarketPlaceFilters } from 'src/modules/marketplace/components';
import NoItemFound from '@components/NoItemFound';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import ProfileMobileCard from '@components/ProfileMobileCard';
// import ChainFilterItems from '@components/ChainFilterItems';

// import { useSelector } from 'react-redux';
// import { userSelector } from 'src/store/selectors';

export type PortfolioSortingOption = NonNullable<Exclude<Parameters<typeof useUserTokens>[1], false | undefined>['sortBy']>;

// type UserTokensResponse = {
//     getUserTokens: Token[];
// };

type Props = {
    address: Address;
    user: IUser | null | undefined;
    selectedItems: UserToken[];
    isOwner: boolean;
    setSelectedItems: React.Dispatch<React.SetStateAction<UserToken[]>>;
};
const UserDetailSection: FC<Props> = ({ address, selectedItems, setSelectedItems, user, isOwner }) => {
    //const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    // const { isConnected /* address: address */ } = useAccount();
    const [toggle, setToggle] = useState('GridView');
    // const user = useSelector(userSelector);
    // const itemsPerPage = 10; // Number of items to show per page
    // const [currentPage, setCurrentPage] = useState(1);
    // const [tokensToShow, setTokensToShow] = useState([]);

    // Calculate the starting and ending indexes for the current page
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;

    // --------- Pagination
    // const loadMoreRef = useRef<HTMLDivElement>(null);
    // const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});

    // useEffect(() => {
    //     const isVisible = !!loadMoreObserver?.isIntersecting;

    //     if (isVisible) {
    //         setShowLoading(true);

    //         // Simulate loading for 2 seconds (2000 milliseconds)
    //         setTimeout(() => {
    //             setShowLoading(false);
    //             setCurrentPage(currentPage + 1);
    //         }, 2000);
    //     }
    // }, [loadMoreObserver?.isIntersecting]);

    // const [filter, setFilter] = useState(false);

    // ---------- Addresses
    /* eslint-disable */
    const [sortByType] = useState<PortfolioSortingOption>('acquiredAt');

    // --------- TOKENS
    let tokenQuery: Parameters<typeof useUserTokens>['1'] = {
        limit: 21
        // sortBy: sortByType
        // collection: filterCollection,
        // includeTopBid: true,
        // includeRawData: true,
        // includeAttributes: true
    };
    let {
        data: tokens,
        isLoading: tokensLoading,
        mutate,
        fetchNextPage,
        isValidating
    } = useUserTokens(address, tokenQuery, { revalidateIfStale: true });

    const { data } = useQuery(GET_HIDDEN_TOKENS, {
        variables: {
            userId: user?._id
        },
        skip: !user
    });

    const hiddenTokens = data?.hiddenTokens;

    tokens = useMemo(() => {
        return tokens.filter((item) => {
            const tokenContract = item.token?.contract?.toLowerCase();
            const tokenId = item.token?.tokenId;

            return (
                tokenContract &&
                tokenId &&
                !hiddenTokens?.some((hiddenToken: any) => hiddenToken.tokenId === tokenId && hiddenToken.contract.toLowerCase() === tokenContract)
            );
        });
    }, [hiddenTokens, tokens]);

    // const {
    //     data: ptokens
    //     // fetchNextPage,
    //     // mutate,
    //     // isFetchingPage,
    //     // isValidating
    // } = useUserTokens(address, tokenQuery, { revalidateIfStale: true }, 137);

    // const allTokens = [...tokens, ...ptokens];

    // --------- Pagination
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});
    useEffect(() => {
        const isVisible = !!loadMoreObserver?.isIntersecting;
        if (isVisible) {
            fetchNextPage();
        }
    }, [loadMoreObserver?.isIntersecting]);

    const [playingElement, setPlayingElement] = useState<HTMLAudioElement | HTMLVideoElement | null>();

    return (
        <>
            {/* {toggle == 'GridView' && (
                <OutSideClick
                    onOutsideClick={() => {
                        setShow(false);
                    }}
                >
                    <div
                        className={`sidebar-shadow DropDownShadow fixed left-0 top-0 z-[99] hidden h-full w-[18rem] transform bg-white px-3 py-7 shadow-lg duration-300 ease-linear dark:bg-bgcolor sm:w-[22rem] sm:px-6 md:block ${
                            show === false ? '-ml-[18rem] sm:-ml-[22rem]' : 'ml-0'
                        }`}
                    >
                        <div className="absolute top-1/2 left-full  z-[999] -translate-y-1/2">
                            <Button
                                onClick={() => {
                                    setShow(!show);
                                }}
                                className={`${
                                    show == true ? 'border-primary ' : '!border-transparent  '
                                }    AtFilterClip relative h-[125px] w-[120px] rounded-sm `}
                            >
                                <span className="absolute bottom-8 left-[1px] z-[2] flex h-[16px] w-[16px] -rotate-90 text-sm font-semibold  text-black ">
                                    {' '}
                                    Filters
                                    <i className={`icon-filterarrow mt-1 ml-2 ${show == true ? '-rotate-90' : 'rotate-90'}  text-xs`}></i>
                                </span>
                            </Button>
                        </div>
                        {show == true && (
                            <MarketPlaceFilters
                                selectedUserIds={selectedUserIds}
                                setSelectedUserIds={setSelectedUserIds}
                                // onSelectChain={setSelectedChains}
                                // selectedChains={selectedChains}
                                // activeTab={tabs}
                            />
                        )}
                    </div>
                </OutSideClick>
            )} */}
            <div className="overflow-hidden px-4">
                {/* {filter && (
                    <div className="fixed top-0 left-0 z-50 block h-[50%] w-full dark:bg-gray17 md:hidden">
                        <h2 className="h-[14%] pt-4 pb-2 text-center text-xl font-bold">Filter</h2>
                        <div className="flex  h-[86%] flex-col justify-between">
                            <div className="border-t border-borderColor">
                                <Accordion title="Blockchain" icon="icon-bulletlist">
                                    <ChainFilterItems mobile />
                                </Accordion>
                            </div>
                            <div className="!z-[60] !w-full border-t border-borderColor p-3 py-4 dark:bg-gray17">
                                <Button className="w-full" onClick={() => setFilter(false)}>
                                    Apply
                                </Button>
                            </div>
                        </div>
                        <i
                            className="icon-close absolute right-4 top-4 z-40 cursor-pointer text-sm text-secondary"
                            onClick={() => setFilter(false)}
                        ></i>
                    </div>
                )} */}
                <div className={` AtScrollHide z-20 mx-auto mb-3 mt-3 flex w-full items-center justify-end gap-3 sm:mt-0 sm:w-[37.5rem]`}>
                    <div className={`relative z-20  hidden items-center gap-3 sm:flex`}>
                        <div
                            onClick={() => {
                                setToggle('ListView');
                            }}
                            className={` ${
                                toggle == 'ListView' ? 'bg-primary/20' : 'bg-transparent'
                            } flex h-6 w-8 cursor-pointer items-center justify-center rounded-sm `}
                        >
                            <i className={`icon-grid  ${toggle == 'ListView' ? ' text-primary' : 'text-secondary'}  cursor-pointer text-sm`}></i>
                        </div>
                        <div
                            onClick={() => {
                                setToggle('GridView');
                            }}
                            className={` ${
                                toggle == 'GridView' ? 'bg-primary/20' : 'bg-transparent'
                            } flex h-6 w-8 cursor-pointer items-center justify-center rounded-sm`}
                        >
                            <i className={`icon-gridview  ${toggle == 'GridView' ? ' text-primary' : 'text-secondary'}  cursor-pointer !text-xl`}></i>
                        </div>
                    </div>
                    <div className={`relative z-20 flex items-center gap-3 sm:hidden`}>
                        <div
                            onClick={() => {
                                toggle == 'GridView' ? setToggle('ListView') : setToggle('GridView');
                            }}
                            className={` ${
                                toggle == 'GridView' || toggle == 'ListView' ? 'bg-primary/20' : 'bg-transparent'
                            } flex h-6 w-8 cursor-pointer items-center justify-center rounded-sm`}
                        >
                            <i
                                className={`${toggle == 'GridView' ? 'icon-grid' : 'icon-gridview'}  ${
                                    toggle == 'GridView' || toggle == 'ListView' ? ' text-primary' : 'text-secondary'
                                }  cursor-pointer text-base`}
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* {tokensLoading && (
                    <div className="flex w-full items-center justify-center">
                        <Loader />
                    </div>
                )} */}
                    {toggle == 'GridView' ? (
                        <>
                            <div className="relative mx-auto  grid min-h-[20rem] w-full grid-cols-3 items-start  gap-1 sm:min-h-[30rem] sm:w-[37.5rem]  xl:w-[42rem] Exl:w-[37.5rem] xs1:grid-cols-2">
                                {!isValidating && tokens?.length == 0 && <NoItemFound text={'No Collection'} />}

                                {tokens?.map((token, Idx) => (
                                    <>
                                        <div className="hidden sm:block">
                                            <NftCard
                                                token={{ token: token?.token, market: { floorAsk: token?.ownership?.floorAsk } }}
                                                isOwner={isOwner}
                                                key={Idx + 'a'}
                                                checkBox={true}
                                                address={address}
                                                // mutate={refetchTokens}
                                                // tokens={allTokens}
                                                selectedItems={selectedItems}
                                                setSelectedItems={setSelectedItems}
                                                checkboxremove
                                                mutate={mutate}
                                                // rarityEnabled={rarityEnabledCollection}
                                                onMediaPlayed={(e) => {
                                                    if (playingElement && playingElement !== e.nativeEvent.target) {
                                                        playingElement.pause();
                                                    }
                                                    const element =
                                                        (e.nativeEvent.target as HTMLAudioElement) || (e.nativeEvent.target as HTMLVideoElement);
                                                    if (element) {
                                                        setPlayingElement(element);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="block sm:hidden">
                                            <ProfileMobileCard token={token} address={address} isOwner={isOwner} />
                                        </div>
                                    </>
                                ))}
                                <div
                                    className="h-full items-center justify-center"
                                    ref={loadMoreRef}
                                    style={{ display: isValidating || tokensLoading ? 'none' : 'flex' }}
                                ></div>
                                {isValidating && (
                                    <div className="absolute flex h-full w-full items-center justify-center">
                                        <Loader />
                                    </div>
                                )}
                            </div>
                            {/* <div className=" grid grid-cols-7 gap-1">
                            {ptokens.map((item, Idx) => (
                                <NftCard token={item} key={Idx + 'a'} checkBox={false} />
                            ))}
                        </div> */}
                        </>
                    ) : (
                        isOwner && (
                            <>
                                {/* <div className="block sm:hidden">
                                    <TokensTable
                                        address={address}
                                        tokens={tokens}
                                        selectedItems={selectedItems}
                                        setSelectedItems={setSelectedItems}
                                        user={user}
                                        mutate={mutate}
                                    />
                                </div> */}
                                {/* <MobileTokensTable address={address} tokens={tokens} /> */}

                                <TokensTable
                                    address={address}
                                    tokens={tokens}
                                    selectedItems={selectedItems}
                                    setSelectedItems={setSelectedItems}
                                    user={user}
                                    mutate={mutate}
                                    isOwner={isOwner}
                                    isValidating={isValidating}
                                    fetchNextPage={fetchNextPage}
                                />
                            </>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default UserDetailSection;
