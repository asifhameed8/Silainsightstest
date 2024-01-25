import { /* useTokens, */ useUserTokens } from '@reservoir0x/reservoir-kit-ui';
import React, { FC, useEffect, useState } from 'react';
// import HiddenTokensTable from './HiddenTokensTable';
import NftCard from '@components/NftCard';
import NoItemFound from '@components/NoItemFound';
import { Address, useAccount } from 'wagmi';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { UserToken } from './BatchListings';
import Loader from '@components/Loader';
import { GET_HIDDEN_TOKENS } from 'src/graphql/tokens';
// import { IUser } from 'src/interfaces';
// import { useIntersectionObserver } from 'usehooks-ts';
// import { userSelector } from 'src/store/selectors';
// import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { IUser } from 'src/interfaces';
// import OutsideClickHandler from 'react-outside-click-handler';
// import { MarketPlaceFilters } from 'src/modules/marketplace/components';
import ProfileMobileCard from '@components/ProfileMobileCard';
// import TokensTable from './TokensTable';
import StaredTokensTable from './methods/StaredTokensTable';
import { isEmpty } from 'lodash';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
import useTranslation from 'next-translate/useTranslation';

export type PortfolioSortingOption = NonNullable<Exclude<Parameters<typeof useUserTokens>[1], false | undefined>['sortBy']>;

type Props = {
    setShowFeedsOnly: Function;
    user: IUser;
    address: Address;
    selectedItems: UserToken[];
    isOwner: boolean;
    setSelectedItems: React.Dispatch<React.SetStateAction<UserToken[]>>;
    setSelectedTabIdx: Function;
    selectedTabIdx: number;
};

const HiddenDetailSection: FC<Props> = ({ address, selectedItems, setSelectedItems, user, isOwner, setSelectedTabIdx, setShowFeedsOnly }) => {
    const [toggle, setToggle] = useState('GridView');
    // const [show, setShow] = useState(false);
    const { isConnected, address: myWallet } = useAccount();
    const { t } = useTranslation('common');
    const { id } = useMarketplaceChain();
    // const user = useSelector(userSelector);
    const [playingElement, setPlayingElement] = useState<HTMLAudioElement | HTMLVideoElement | null>();
    useEffect(() => {
        if (isOwner == false) {
            setToggle('GridView');
        }
    }, [isOwner]);
    // const [sortByType] = useState<PortfolioSortingOption>('acquiredAt');

    // --------- Pagination
    // const loadMoreRef = useRef<HTMLDivElement>(null);
    // const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});
    // useEffect(() => {
    //     const isVisible = !!loadMoreObserver?.isIntersecting;
    //     if (isVisible) {
    //         fetchNextPage();
    //     }
    // }, [loadMoreObserver?.isIntersecting]);

    // --------- TOKENS
    // let tokenQuery: Parameters<typeof useUserTokens>['1'] = {
    //     limit: 21,
    //     sortBy: sortByType
    // collection: filterCollection,
    // includeTopBid: true,
    // includeRawData: true,
    // includeAttributes: true
    // };
    // let {
    //     data: tokens,
    //     isLoading: tokensLoading,
    //     mutate,
    //     fetchNextPage,
    //     isValidating
    // } = useUserTokens(address, tokenQuery, { revalidateIfStale: true });

    // const { data } = useQuery(GET_HIDDEN_TOKENS, {
    //     variables: {
    //         userId: user?._id
    //     },
    //     skip: !user
    // });

    // const hiddenTokens = data?.hiddenTokens;

    // tokens = tokens.filter((item) => {
    //     const tokenContract = item.token?.contract?.toLowerCase();
    //     const tokenId = item.token?.tokenId;

    //     return (
    //         tokenContract &&
    //         tokenId &&
    //         !hiddenTokens?.some((hiddenToken: any) => hiddenToken.tokenId === tokenId && hiddenToken.contract.toLowerCase() === tokenContract)
    //     );
    // });
    const { data, refetch, loading } = useQuery(GET_HIDDEN_TOKENS, {
        variables: {
            userId: user?._id
        },
        skip: !user
    });

    const hiddenTokens = data?.hiddenTokens;

    useEffect(() => {
        if (isOwner == false && hiddenTokens && hiddenTokens?.length == 0) {
            setSelectedTabIdx(1);
            setShowFeedsOnly(true);
        } else {
            setSelectedTabIdx(0);
            setShowFeedsOnly(false);
        }
    }, [hiddenTokens]);

    const {
        data: tokens,
        mutate,
        isValidating,
        fetchNextPage
    } = useUserTokens(
        address,
        { tokens: hiddenTokens?.map((item: any) => `${item?.contract}:${item?.tokenId}`) },
        {},
        isEmpty(hiddenTokens) ? 0 : id
    );

    return (
        <>
            <div className="overflow-hidden px-4 pb-2 sm:pb-16">
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
                {isOwner && (
                    <div
                        className={`${
                            !isConnected && myWallet?.toLowerCase() == address?.toLowerCase() && 'hidden'
                        } AtScrollHide z-20 mx-auto mb-3 mt-3 flex w-full items-center justify-end gap-3 sm:mt-0 sm:w-[37.5rem]`}
                    >
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
                                <i
                                    className={`icon-gridview  ${toggle == 'GridView' ? ' text-primary' : 'text-secondary'}  cursor-pointer !text-xl`}
                                ></i>
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
                )}
                {/* <div
                    className={` ${
                        !isConnected && myWallet?.toLowerCase() == address?.toLowerCase() && 'hidden'
                    } AtScrollHide z-20 my-3 mx-auto flex w-full items-center justify-end gap-3 sm:w-[37.5rem] Exl:w-[37.5rem]`}
                >
                    <i
                        onClick={() => {
                            setFilter(!filter);
                        }}
                        className="icon-filterby cursor-pointer text-base text-secondary sm:hidden"
                    ></i>
                </div> */}

                {!isConnected && myWallet?.toLowerCase() == address?.toLowerCase() ? (
                    <>
                        <div className="flex h-40 flex-col items-center justify-end">
                            <p className="mb-2">{t('profile.connect_wallet_dec')}</p>
                            {/* <ConnectButton.Custom>
                                {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
                                    // Note: If your app doesn't use authentication, you
                                    // can remove all 'authenticationStatus' checks
                                    const ready = mounted && authenticationStatus !== 'loading';
                                    const connected =
                                        ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

                                    return (
                                        <div
                                            {...(!ready && {
                                                'aria-hidden': true,
                                                style: {
                                                    opacity: 0,
                                                    pointerEvents: 'none',
                                                    userSelect: 'none'
                                                }
                                            })}
                                        >
                                            {(() => {
                                                if (!connected) {
                                                    return (
                                                        <>
                                                            <button
                                                                className="flex items-center gap-1 rounded-md bg-primary py-2 px-4 text-xs  font-semibold  hover:bg-primary/90 dark:bg-primary/25 dark:text-primary dark:hover:bg-primary/30"
                                                                onClick={openConnectModal}
                                                                type="button"
                                                            >
                                                                <i className="icon-wallet "></i>
                                                                <p className="text-xs dark:text-primary">{t('buttons.connect-wallet')}</p>
                                                            </button>
                                                        </>
                                                    );
                                                }

                                                if (chain.unsupported) {
                                                    return (
                                                        <button onClick={openChainModal} type="button">
                                                            {t('profile.wrong_network')}
                                                        </button>
                                                    );
                                                }
                                            })()}
                                        </div>
                                    );
                                }}
                            </ConnectButton.Custom> */}
                        </div>
                    </>
                ) : toggle == 'GridView' ? (
                    <>
                        <div className="relative mx-auto  grid min-h-[20rem] w-full grid-cols-3 items-start  gap-1 sm:min-h-[30rem] sm:w-[37.5rem]  xl:w-[42rem] Exl:w-[37.5rem] xs1:grid-cols-2">
                            {!loading && tokens?.length == 0 && <NoItemFound text={t('profile.no_collection')} />}

                            {tokens?.map((token, Idx) => (
                                <>
                                    <div className="hidden sm:block" key={Idx}>
                                        <NftCard
                                            token={{ token: { ...token?.token, owner: address }, market: { floorAsk: token?.ownership?.floorAsk } }}
                                            key={Idx + 'ab'}
                                            checkBox={true}
                                            address={address}
                                            isOwner={isOwner}
                                            // mutate={refetchTokens}
                                            // tokens={allTokens}
                                            selectedItems={selectedItems}
                                            setSelectedItems={setSelectedItems}
                                            checkboxremove
                                            mutate={() => {
                                                refetch();
                                                mutate();
                                            }}
                                            hiddenIcon
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
                                            rarityEnabled={false}
                                            isShowBorder={false}
                                        />
                                    </div>
                                    <div className="block sm:hidden">
                                        <ProfileMobileCard token={token} hiddenIcon address={address} />
                                    </div>
                                </>
                            ))}
                            {/* <div
                                className="h-full items-center justify-center"
                                ref={loadMoreRef}
                                style={{ display: isValidating || tokensLoading ? 'none' : 'flex' }}
                            ></div> */}
                            {loading && (
                                <div className="absolute flex h-full w-full items-center justify-center">
                                    <Loader />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <StaredTokensTable
                            address={address}
                            tokens={tokens}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            user={user}
                            mutate={() => {
                                refetch();
                                mutate();
                            }}
                            isOwner={isOwner}
                            selectedCollection={undefined}
                            isValidatingTokens={isValidating}
                            fetchNextTokens={fetchNextPage}
                        />
                        {/* <HiddenTokensTable user={user} address={address} isOwner={isOwner} /> */}
                    </>
                )}
            </div>
        </>
    );
};

export default HiddenDetailSection;
