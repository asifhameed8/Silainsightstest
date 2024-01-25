import React, { /*  useContext, useEffect, useRef,  */ useState } from 'react';
import FormCheck from '@components/Forms/FormCheck';
import { /* MarketSelect, */ NameWithSortIcon } from 'src/modules/marketplace/components';
import OutSideClick from 'react-outside-click-handler';
// import CollectionDropdown from '@components/CollectionDropdown/CollectionDropdown';
import { Address } from 'wagmi';
import TokensMethod from './methods/TokensMethod';
import { ListingMethod } from './methods/ListingMethod';

// import chains from '@utils/chains';
import { UserToken } from './BatchListings';
import { IUser } from 'src/interfaces';
import { useDynamicTokens } from '@reservoir0x/reservoir-kit-ui';
import useTranslation from 'next-translate/useTranslation';
// import { useUserCollections } from '@reservoir0x/reservoir-kit-ui';
// import chains from '@utils/chains';
interface Props {
    mutate: Function;
    tokens: ReturnType<typeof useDynamicTokens>['data'];
    user: IUser;
    isOwner: boolean;
    address: Address;
    selectedItems: UserToken[];
    setSelectedItems: React.Dispatch<React.SetStateAction<never[]>>;
    fetchNextPage: Function;
    isValidating: boolean;
}
const ListViewHeadings =
    'px-2 py-3 text-xs tracking-wider font-semibold whitespace-nowrap text-center text-lightText text-black dark:text-white uppercase';
// const ListViewItems = 'px-2 py-2 whitespace-nowrap text-center text-xs h-[3.2rem]';

// const MethodData = ['NFT', 'LISTING', 'Unlisted', 'Bought', 'Sold', 'Offers', 'My Bids', 'Transfer', 'Burned'];
const MethodData = ['NFT', 'LISTING'];

const TokensTable: React.FC<Props> = ({
    address,
    mutate,
    tokens = [],
    selectedItems,
    setSelectedItems,
    user,
    isOwner,
    fetchNextPage,
    isValidating
}) => {
    // const [isShown, setIsShown] = useState(-1);
    const [collection /* setCollection */] = useState(null);
    const [selectedChains] = useState<string[]>([]);

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
    let filteredATokens = tokens || [];

    if (collection) {
        filteredATokens = filteredATokens?.filter((item: any) => item?.contract == collection?.contract);
    }
    if (selectedChains?.length > 0) {
        filteredATokens = filteredATokens?.filter((item: any) => selectedChains.includes(item?.chain));
    }
    // const filteredATokens = collection ? tokens?.filter((item: any) => item?.contract == collection?.contract) : tokens;

    /*  const collectionsData =
        collections?.length > 0
            ? collections?.map((collection) => ({
                  name: collection?.name,
                  src: collection?.image || '/assets/images/placeholdercol.svg',
                  id: collection?.id,
                  contract: collection?.contract,
                  //   chainId: i <= ethCollections?.length ? chains[0]?.id : chains[1]?.id,
                  chainIcon: chains.find((item) => item.routePrefix == collection?.chain)?.darkIconUrl
              }))
            : []; */
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
                                {viewType == 'NFT' && (
                                    <th scope="col" className={ListViewHeadings}>
                                        <div className="hidden !text-left sm:block ">{t('collections.collection')}</div>
                                    </th>
                                )}

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
                                                                {t('profile.method')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ul className="AtScrollHide overflow-auto py-3">
                                                        {MethodData.map((item, i) => (
                                                            <label
                                                                className="flex cursor-pointer items-center justify-between px-3 py-1 hover:bg-lightHover dark:hover:bg-dark"
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
                                                                    checked={item === viewType}
                                                                />
                                                            </label>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </OutSideClick>
                                    </div>
                                </th>
                                <th scope="col" className={ListViewHeadings}>
                                    {viewType == 'NFT' ? t('collections.floorprice') : t('profile.listed_price')}
                                </th>

                                {viewType == 'NFT' && (
                                    <th scope="col" className={ListViewHeadings}>
                                        <NameWithSortIcon name={t('profile.highest_bid')} />
                                    </th>
                                )}

                                {viewType == 'LISTING' && (
                                    <th scope="col" className={ListViewHeadings}>
                                        {t('profile.expire_in')}
                                    </th>
                                )}

                                {viewType == 'LISTING' && (
                                    <th scope="col" className={`${ListViewHeadings} pr-6`}>
                                        {t('collectionDetail.marketplace')}
                                    </th>
                                )}

                                <th scope="col" className={`${ListViewHeadings} pr-6`}>
                                    {t('profile.actions')}
                                </th>
                                <th scope="col" className={`${ListViewHeadings} pr-6`}></th>
                            </tr>
                        </thead>
                        {(() => {
                            switch (viewType) {
                                case 'NFT': {
                                    return (
                                        <TokensMethod
                                            address={address}
                                            user={user}
                                            mutate={mutate}
                                            tokens={filteredATokens}
                                            selectedCollection={collection}
                                            selectedItems={selectedItems}
                                            setSelectedItems={setSelectedItems}
                                            isOwner={isOwner}
                                            isValidating={isValidating}
                                            fetchNextPage={fetchNextPage}
                                        />
                                    );
                                }
                                case 'LISTING': {
                                    return <ListingMethod address={address} />;
                                }

                                default:
                                    break;
                            }
                        })()}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TokensTable;
