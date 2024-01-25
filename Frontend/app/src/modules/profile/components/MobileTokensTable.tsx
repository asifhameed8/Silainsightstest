import React, { /*  useContext, useEffect, useRef,  */ useState } from 'react';
import FormCheck from '@components/Forms/FormCheck';
import { MarketSelect, NameWithSortIcon } from 'src/modules/marketplace/components';
import OutSideClick from 'react-outside-click-handler';
import ChainDropdown from '@components/ChainDropdown/ChainDropdown';
// import CollectionDropdown from '@components/CollectionDropdown/CollectionDropdown';
import { Address } from 'wagmi';
import TokensMethod from './methods/TokensMethod';
import { ListingMethod } from './methods/ListingMethod';
import chains from '@utils/chains';
import MobileResponsiveTabs from '@components/MobileResponsiveTabs';
// import { useUserCollections } from '@reservoir0x/reservoir-kit-ui';
// import chains from '@utils/chains';
interface Props {
    address: Address;
}
const ListViewHeadings =
    'px-2 py-3 text-xs tracking-wider font-semibold whitespace-nowrap text-center text-lightText text-black dark:text-white uppercase';
// const ListViewItems = 'px-2 py-2 whitespace-nowrap text-center text-xs h-[3.2rem]';

const MethodData = ['NFT', 'LISTING', 'Unlisted', 'Bought', 'Sold', 'Offers', 'My Bids', 'Transfer', 'Burned'];

const NftTabs = [
    { name: 'All', current: true },
    { name: 'Listings', current: false },
    { name: 'Social', current: false },
    { name: 'Activity', current: false },
    { name: 'Action', current: false }
];
const ListingTabs = [
    { name: 'All', current: true },
    { name: 'Social', current: false },
    { name: 'Activity', current: false },
    { name: 'Action', current: false }
];

const MobileTokensTable: React.FC<Props> = ({ address, tokens = [] }: any) => {
    // const [isShown, setIsShown] = useState(-1);
    const [chaintype, setChainType] = useState(false);
    const [collection, setCollection] = useState(null);
    const [methods, setMethods] = useState(false);
    // -------------- GLOBAL --------------
    const [viewType, setViewType] = useState<string>('NFT');

    // const collectionQuery: Parameters<typeof useUserCollections>['1'] = {
    //     limit: 100
    // };
    // const { data: ethCollections /*  isLoading: isLoading */ } = useUserCollections(address, collectionQuery, {}, chains[0].id);
    // const { data: polygonCollections } = useUserCollections(address, collectionQuery, {}, chains[1].id);
    // const collections = [...ethCollections, ...polygonCollections];

    const collections: any[] = [];
    tokens?.forEach((token: any) => {
        if (token?.collection && collections.findIndex((collection) => collection?.contract == token?.collection?.contract) == -1) {
            collections.push(token?.collection);
        }
    });

    const collectionsData =
        collections?.length > 0
            ? collections?.map((collection) => ({
                  name: collection?.name,
                  src: collection?.image || '/assets/images/placeholdercol.svg',
                  id: collection?.id,
                  contract: collection?.contract,
                  //   chainId: i <= ethCollections?.length ? chains[0]?.id : chains[1]?.id,
                  chainIcon: chains.find((item) => item.routePrefix == collection?.chain)?.darkIconUrl
              }))
            : [];
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);
    const [listedTabIdx, setListedTabIdx] = useState(0);
    return (
        <>
            {viewType == 'NFT' ? (
                <MobileResponsiveTabs selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} tabs={NftTabs} />
            ) : (
                <MobileResponsiveTabs selectedTabIdx={listedTabIdx} setSelectedTabIdx={setListedTabIdx} tabs={ListingTabs} />
            )}
            <div className="overflow-x-auto rounded border border-lightBorder dark:border-borderColor">
                <div className="inline-block min-w-full align-middle ">
                    <div className=" bg-white dark:bg-transparent">
                        <table className="AtScrollHide relative  h-[calc(100vh-565px)] min-w-full rounded ">
                            <thead className="sticky top-0 z-10 border-b border-lightBorder bg-lightBg dark:border-borderColor dark:bg-gray17">
                                <tr>
                                    {viewType == 'NFT' && (
                                        <th scope="col" className={`${ListViewHeadings} !pl-4`}>
                                            {/* <FormCheck label={''} /> */}
                                        </th>
                                    )}
                                    {selectedTabIdx !== 2 &&
                                        listedTabIdx !== 1 &&
                                        listedTabIdx !== 2 &&
                                        selectedTabIdx !== 3 &&
                                        selectedTabIdx !== 4 &&
                                        listedTabIdx !== 3 && (
                                            <th scope="col" className={ListViewHeadings}>
                                                <div
                                                    className="group relative flex cursor-pointer items-center justify-center gap-1"
                                                    onClick={() => setChainType(!chaintype)}
                                                >
                                                    Chain
                                                    <i className="icon-filterby hidden sm:block"></i>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <ChainDropdown chain={chaintype} setChain={setChainType} />
                                                </div>
                                            </th>
                                        )}

                                    {viewType == 'NFT' && selectedTabIdx !== 3 && selectedTabIdx !== 4 && (
                                        <th scope="col" className={ListViewHeadings}>
                                            <div className="flex cursor-pointer items-center gap-1">
                                                Collection
                                                <i className="icon-filterby hidden sm:block"></i>
                                            </div>
                                            <div className="hidden sm:block">
                                                <MarketSelect
                                                    className="h-[2.375rem] flex-shrink-0"
                                                    data={collectionsData}
                                                    selected={collection}
                                                    onSelect={setCollection}
                                                    placeholder="All Collections"
                                                />
                                                {/* <CollectionDropdown collection={collectionsData} data={collectionsData} setCollection={setCollection} /> */}
                                            </div>
                                        </th>
                                    )}

                                    {selectedTabIdx !== 2 && listedTabIdx !== 2 && selectedTabIdx !== 3 && (
                                        <th scope="col" className={ListViewHeadings}>
                                            NFT
                                        </th>
                                    )}
                                    {selectedTabIdx !== 1 && (
                                        <>
                                            {selectedTabIdx !== 3 && selectedTabIdx !== 4 && listedTabIdx !== 2 && listedTabIdx !== 3 && (
                                                <>
                                                    <th scope="col" className={ListViewHeadings}>
                                                        comment
                                                    </th>
                                                    <th scope="col" className={ListViewHeadings}>
                                                        REPOST
                                                    </th>
                                                    <th scope="col" className={ListViewHeadings}>
                                                        LIKE
                                                    </th>
                                                    <th scope="col" className={`${ListViewHeadings} w-16`}>
                                                        VIEW
                                                    </th>
                                                </>
                                            )}

                                            {selectedTabIdx !== 2 && listedTabIdx !== 1 && (
                                                <>
                                                    <th scope="col" className={ListViewHeadings}>
                                                        <div
                                                            className="group relative flex cursor-pointer items-center justify-center gap-1"
                                                            onClick={() => setMethods(!methods)}
                                                        >
                                                            Methods
                                                            <i className="icon-filterby hidden md:block"></i>
                                                        </div>
                                                        <div className="hidden sm:block">
                                                            <OutSideClick
                                                                onOutsideClick={() => {
                                                                    setMethods(false);
                                                                }}
                                                            >
                                                                {methods && (
                                                                    <div className="DropDownShadow absolute top-9  w-[20rem]  rounded-md border border-lightBorder  bg-white dark:border-borderColor dark:bg-bgcolor ">
                                                                        <div className="relative flex w-full items-center justify-between rounded-t border-b border-lightBorder bg-lightBg p-3 dark:border-borderColor dark:bg-gray17">
                                                                            <div className="flex items-center gap-x-3">
                                                                                <i className="icon-currency text-base text-black dark:text-chinesesilver"></i>
                                                                                <p className="font-display text-sm font-semibold capitalize  text-black dark:text-chinesesilver">
                                                                                    Method
                                                                                </p>
                                                                            </div>
                                                                            <p className="cursor-pointer font-display text-xs capitalize  text-black dark:text-chinesesilver">
                                                                                Select all
                                                                            </p>
                                                                        </div>
                                                                        <ul className="AtScrollHide  h-40 overflow-auto pt-3 pb-3">
                                                                            {MethodData.map((item, i) => (
                                                                                <label
                                                                                    className="flex cursor-pointer items-center justify-between px-3 py-0.5 hover:bg-lightHover dark:hover:bg-dark"
                                                                                    key={i + 'mm'}
                                                                                >
                                                                                    <p className="ml-2 capitalize text-gray01">{item}</p>
                                                                                    <FormCheck
                                                                                        label={''}
                                                                                        type="radio"
                                                                                        name="methods_tokens_table"
                                                                                        value={item}
                                                                                        onChange={(e) => setViewType(e.target.value)}
                                                                                        className="mt-1"
                                                                                    />
                                                                                </label>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </OutSideClick>
                                                        </div>
                                                    </th>
                                                    {selectedTabIdx !== 4 && (
                                                        <>
                                                            {viewType == 'NFT' && (
                                                                <th scope="col" className={ListViewHeadings}>
                                                                    <NameWithSortIcon name="Highest BID" />
                                                                </th>
                                                            )}

                                                            {viewType == 'LISTING' && listedTabIdx !== 3 && (
                                                                <th scope="col" className={ListViewHeadings}>
                                                                    <NameWithSortIcon name="EXPIRE IN" />
                                                                </th>
                                                            )}

                                                            {viewType == 'LISTING' && (
                                                                <th scope="col" className={`${ListViewHeadings}`}>
                                                                    Marketplace
                                                                </th>
                                                            )}
                                                        </>
                                                    )}

                                                    {selectedTabIdx !== 3 && listedTabIdx !== 2 && (
                                                        <th scope="col" className={`${ListViewHeadings}`}>
                                                            Actions
                                                        </th>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </tr>
                            </thead>
                            {(() => {
                                switch (viewType) {
                                    case 'NFT': {
                                        return (
                                            <TokensMethod
                                                address={address}
                                                tokens={tokens}
                                                selectedTabIdx={selectedTabIdx}
                                                selectedCollection={collection}
                                            />
                                        );
                                    }

                                    case 'LISTING': {
                                        return <ListingMethod address={address} listedTabIdx={listedTabIdx} />;
                                    }

                                    default:
                                        break;
                                }
                            })()}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileTokensTable;
