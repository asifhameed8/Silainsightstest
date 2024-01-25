// import { FormatCryptoCurrency } from '@components/CurrencyFormat';
// import FormCheck from '@components/Forms/FormCheck';
import Input from '@components/Forms/Input';
// import SelectComponent from '@components/Forms/Select';
// import ImageComponent from '@components/ImageComponent';
import ArbitrumIcon from '@components/_Icons/ArbitrumIcon';
// import PolygonIcon from '@components/_Icons/PolygonIcon';
import useMarketplaceFees from '@hooks/useMarketplaceFees';
import { Currency, Marketplace, TokenMedia } from '@reservoir0x/reservoir-kit-ui';
import expirationOptions from '@utils/defaultExpirationOptions';
import { Dispatch, SetStateAction, useState, useCallback, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { BatchListing, ExpirationOption, UserToken } from './BatchListings';
import useSales from '@hooks/useSales';
import useTranslation from 'next-translate/useTranslation';
import { useCurrency } from '@context/CurrencyContext';
// const AtHolderHead = 'px-3 !font-display text-left uppercase py-3 text-xs dark:text-white whitespace-nowrap text-lightText';
const AtHolderItems = 'px-3 py-2 whitespace-nowrap text-lightText text-black dark:text-white text-xs text-center';
// const data = [
//     { name: '1 Hours' },
//     { name: '24 Hours' },
//     { name: '1 Day' },
//     { name: '3 Day' },
//     { name: '1 Day' },
//     { name: '1 Week' },
//     { name: '1 Month' },
//     { name: '3 Months' },
//     { name: '6 Months' }
// ];
const MINIMUM_AMOUNT = 0.000001;

// const BatchListingsTable = ({ listings }) => {
//     const [selected, setSelected] = useState(data[0]);
//     return (
//         <div className=" flex flex-col">
//             <div className="AtScrollHide overflow-x-auto">
//                 <div className="inline-block min-w-full align-middle">
//                     <div className="AtScrollHide relative h-[calc(100vh-284px)] overflow-auto rounded-md rounded-b-md border border-lightBorder bg-white dark:border-borderColor dark:bg-transparent">
//                         <table className="min-w-full rounded">
//                             <thead className="sticky top-0 z-20 border-b border-lightBorder bg-lightHover dark:border-borderColor dark:bg-gray17">
//                                 <tr>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Items
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Price
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Expiration
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Creator Royalties
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Marketplace Fee
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}>
//                                         Profit
//                                     </th>
//                                     <th scope="col" className={AtHolderHead}></th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-lightBorder  dark:divide-[#727279]">
//                                 {listings?.map((listing, i: number) => (
//                                     <BatchListingTableRow
//                                         listing={listing}
//                                         listings={listings}
//                                         setListings={setListings}
//                                         updateListing={updateListing}
//                                         setSelectedItems={setSelectedItems}
//                                         selectedItems={selectedItems}
//                                         displayQuantity={displayQuantity()}
//                                         gridTemplateColumns={gridTemplateColumns}
//                                         isLargeDevice={isLargeDevice}
//                                         globalExpirationOption={globalExpirationOption}
//                                         globalPrice={globalPrice}
//                                         currency={currency}
//                                         defaultCurrency={defaultCurrency}
//                                         selectedMarketplaces={selectedMarketplaces}
//                                         key={`${listing.token.token?.collection?.id}:${listing.token.token?.tokenId}:${listing.orderbook}`}
//                                     />
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BatchListingsTable;

type BatchListingsTableRowProps = {
    listing: BatchListing;
    listings: BatchListing[];
    displayQuantity: boolean;
    gridTemplateColumns: string;
    setListings: Dispatch<SetStateAction<BatchListing[]>>;
    updateListing: (updatedListing: BatchListing) => void;
    globalExpirationOption: ExpirationOption;
    globalPrice: string;
    currency: Currency;
    defaultCurrency: Currency;
    isLargeDevice: boolean;
    selectedItems: UserToken[];
    setSelectedItems: Dispatch<SetStateAction<UserToken[]>>;
    selectedMarketplaces: Marketplace[];
};

const BatchListingTableRow = ({
    listing,
    listings,
    setListings,
    updateListing,
    selectedItems,
    // displayQuantity,
    // gridTemplateColumns,
    // isLargeDevice,
    setSelectedItems,
    globalExpirationOption,
    globalPrice,
    currency,
    defaultCurrency,
    selectedMarketplaces
}: BatchListingsTableRowProps) => {
    const [expirationOption, setExpirationOption] = useState<ExpirationOption>(globalExpirationOption);
    const [price, setPrice] = useState<string>(listing.price);

    const [quantity /* setQuantity */] = useState<number | undefined>(1);
    // eslint-disable
    // const [marketplaceFee, setMarketplaceFee] = useState<number>(0);

    // const [marketplaceFee, setMarketplaceFee] = useState<number>(0);
    // const [/* marketplaceFeePercent, */ setMarketplaceFeePercent] = useState<number>(0);

    // const { addToast } = useContext(ToastContext);

    const { data: sales } = useSales({
        tokens: listing?.token?.token?.contract + ':' + listing?.token?.token?.tokenId,
        sortDirection: 'desc'
    });
    const boughtFor = sales[0];

    const marketplace = selectedMarketplaces.find((m) => m.orderbook === listing.orderbook);

    const handleMarketplaceFeeChange = useCallback(
        (marketplaceFee: number) => {
            // setMarketplaceFee(marketplaceFee);
            const updatedListing = { ...listing, marketplaceFee: marketplaceFee };
            updateListing(updatedListing);
        },
        [listing, updateListing]
    );

    const removeListing = useCallback(
        (token: string, orderbook: string) => {
            const updatedListings = listings.filter(
                (listing) => `${listing.token.token?.contract}:${listing.token.token?.tokenId}` !== token || listing.orderbook !== orderbook
            );

            // Update selectedItems
            const selectedItemIndex = selectedItems.findIndex((item) => `${item?.token?.contract}:${item?.token?.tokenId}` === token);

            if (
                selectedItemIndex !== -1 &&
                !updatedListings.some((listing) => `${listing.token.token?.contract}:${listing.token.token?.tokenId}` === token)
            ) {
                const updatedSelectedItems = [...selectedItems];
                updatedSelectedItems.splice(selectedItemIndex, 1);
                setSelectedItems(updatedSelectedItems);
            }

            setListings(updatedListings);
        },
        [listings]
    );

    let openseaFees = useMarketplaceFees(listing.orderbook == 'opensea' ? (listing.token.token?.collection?.id as string) : undefined);

    useEffect(() => {
        if (openseaFees && openseaFees.fee && openseaFees.fee.bps && listing.orderbook == 'opensea') {
            // Remove listing and emit toast if listing not enabled
            if (!openseaFees.listingEnabled) {
                toast.error('Listing not enabled');
                // addToast?.({
                //     title: 'Listing not enabled',
                //     description: `Cannnot list ${listing.token.token?.name} on OpenSea`
                // });
                removeListing(`${listing.token.token?.contract}:${listing.token.token?.tokenId}`, listing.orderbook as string);
            }

            // setMarketplaceFeePercent(openseaFees.fee.bps / 100 || 0);
            handleMarketplaceFeeChange((openseaFees.fee.bps / 10000) * Number(price) * listing.quantity || 0);
        }
    }, [openseaFees, price, quantity, marketplace]);

    const creatorRoyalties = (listing?.token?.token?.collection?.royaltiesBps || 0) / 10000;

    const profit = Number(price) * listing.quantity - boughtFor?.price?.amount?.native * listing.quantity;
    // const profit = Number(price) * listing.quantity - marketplaceFee - creatorRoyalties * Number(price) * listing.quantity;

    const topTraitPrice = useMemo(() => {
        if (!listing.token.token?.attributes) return undefined;

        // Find the highest floor price
        return Math.max(...listing.token.token.attributes.map((attribute) => attribute.floorAskPrice ?? 0));
    }, []);

    useEffect(() => {
        handlePriceChange(globalPrice);
    }, [globalPrice]);

    useEffect(() => {
        if (listing.price != price && Number(listing.price) != 0) {
            handlePriceChange(listing.price);
        }
    }, [listing.price]);

    useEffect(() => {
        handleExpirationChange(globalExpirationOption.value);
    }, [globalExpirationOption]);

    const handleExpirationChange = useCallback(
        (value: ExpirationOption) => {
            const option = expirationOptions.find((option) => option.value === value.value);

            if (option) {
                setExpirationOption(option);
                console.log(expirationOption);
                const updatedListing = { ...listing, expirationOption: option };
                updateListing(updatedListing);
            }
        },
        [listing, updateListing]
    );

    const handlePriceChange = useCallback(
        (value: string) => {
            setPrice(value);
            const updatedListing = { ...listing, price: value };
            updateListing(updatedListing);
        },
        [listing, updateListing]
    );

    const { convertPrice, currency: crncy } = useCurrency();
    const { t } = useTranslation('common');
    // const handleQuantityChange = useCallback(
    //     (quantity: number) => {
    //         setQuantity(quantity);
    //         const updatedListing = { ...listing, quantity: quantity };
    //         updateListing(updatedListing);
    //     },
    //     [listing, updateListing]
    // );

    // const getImagePath = (contentType?: string, image?: string) => {
    //     if (!image) {
    //         return null;
    //     } else if (contentType === 'image/svg') {
    //         return image;
    //     } else if (contentType === 'video/mp4') {
    //         return image?.includes('http') ? image : 'https://ipfs.mintstargram.tech/ipfs/' + image;
    //     } else {
    //         return image?.includes('http') ? image : 'https://ipfs.mintstargram.tech/ipfs/' + image;
    //     }
    // };
    return (
        <tr className={`bg-transparent text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark`}>
            {/* <td className={AtHolderItems}>
                <FormCheck name="supportedChains" />
            </td> */}
            <td className={AtHolderItems}>
                <div className="flex justify-center">
                    {/* <EthIcon classNames="h-6 w-6" /> */}
                    <ArbitrumIcon classNames="h-6 w-6" />
                </div>
                {/* <ChainFlow/> */}
            </td>
            <td className={AtHolderItems}>
                <div className="flex justify-center">
                    {/* <PolygonIcon /> */}
                    {/* <img
                        src={marketplace?.imageUrl}
                        alt={marketplace?.name}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            aspectRatio: '1/1',
                            visibility: marketplace?.imageUrl ? 'visible' : 'hidden'
                        }}
                    /> */}
                    {/* <ImageComponent
                        src={getImagePath(listing.token.token?.contentType, listing.token.token?.image) || '/assets/images/placeholdercol.svg'}
                        figclassname="flex-shrink-0 rounded object-cover overflow-hidden h-7 w-7"
                        className="rounded"
                        alt={listing?.token?.token?.collection?.name}
                        fill={true}
                    /> */}

                    <TokenMedia
                        token={listing.token.token}
                        style={{
                            width: '28px',
                            height: '28px',
                            // minHeight: isMounted && isSmallDevice ? 300 : 445,
                            borderRadius: '6px',
                            overflow: 'hidden'
                        }}
                        className="object-cover"
                    />

                    {/* <div className="w-[8rem] truncate">
                        <h5 className=" truncate text-left text-xs font-bold capitalize text-black dark:text-white">
                            {listing?.token?.token?.collection?.name}
                        </h5>
                        <p className="text-left capitalize text-white">#{listing?.token?.token?.tokenId}</p>
                    </div> */}
                </div>
            </td>
            <td className={`${AtHolderItems}  !text-left `}>{listing?.token?.token?.collection?.name}</td>
            <td className={`${AtHolderItems} `}>
                {' '}
                <div className="flex items-center justify-center">
                    <span className="block max-w-[7rem] truncate !text-center">#{listing?.token?.token?.tokenId}</span>
                </div>
            </td>
            {/* <td className={`${AtHolderItems} !text-left  `}>
                Not Listed
                <span className=" text-primary">Listed</span>
            </td> */}
            {/* <td className={`${AtHolderItems}  !text-left `}>1 ETH</td> */}
            <td className={`${AtHolderItems}`}>
                {listing.token.token?.collection?.floorAskPrice?.amount?.native || '-'}{' '}
                {convertPrice(listing.token.token?.collection?.floorAskPrice?.currency?.symbol, 'ETH')} {crncy}
                {/* {listing.token.token?.collection?.floorAskPrice?.currency?.symbol} */}
            </td>
            <td className={`${AtHolderItems}`}>
                {boughtFor?.price?.amount?.native || '-'}
                {convertPrice(boughtFor?.price?.currency?.symbol, 'ETH')} {crncy}
            </td>
            <td className={`${AtHolderItems}  `}>
                <div className="flex items-center  justify-center">
                    <div className=" w-[5rem]">
                        {' '}
                        <span className={` ${profit < 0 ? '!text-[#F14A4A]' : '!text-[#4AF15B]'}`}>
                            {convertPrice(profit, 'ETH')} {crncy}
                        </span>
                    </div>
                </div>
                {/* <span className=" text-[#F14A4A] ">-0.8 ETH</span> */}
                {/* <FormatCryptoCurrency amount={profit} logoHeight={14} textStyle="body1" /> */}
            </td>

            {/* {displayQuantity ? (
                <td className={AtHolderItems}>
                    <div direction="column" align="start" css={{ gap: '$2', minWidth: 0, overflow: 'hidden' }}>
                        <Input
                            type="number"
                            value={quantity}
                            onChange={(e) => {
                                const inputValue = Number(e.target.value);
                                const max = Number(listing.token.ownership?.tokenCount);

                                if (e.target.value === '') {
                                    setQuantity(undefined);
                                } else if (inputValue > max) {
                                    handleQuantityChange(max);
                                } else {
                                    handleQuantityChange(inputValue);
                                }
                            }}
                            onBlur={() => {
                                if (quantity === undefined || quantity <= 0) {
                                    handleQuantityChange(1);
                                }
                            }}
                            css={{ maxWidth: 45 }}
                            disabled={listing.token.token?.kind !== 'erc1155' || Number(listing?.token?.ownership?.tokenCount) <= 1}
                        />
                        <p style="subtitle3" color="subtle" ellipsify css={{ width: '100%' }}>
                            {listing.token.ownership?.tokenCount} available
                        </p>
                    </div>
                </td>
            ) : null} */}

            {/* <td className={AtHolderItems}>
               
                <SelectComponent
                    Data={expirationOptions.map((item) => ({ ...item, name: item?.text }))}
                    setSelected={handleExpirationChange}
                    selected={{ ...expirationOptions.find((item) => item.text === expirationOption?.text), name: expirationOption?.text }}
                    className="h-9 w-[193px]"
                />
            </td> */}
            <td className={AtHolderItems}>
                {/* <PolygonIcon /> 0 (5%) */}
                {/* <FormatCryptoCurrency
                        amount={creatorRoyalties * Number(price)}
                        logoHeight={14}
                        textStyle="body1"
                        css={{
                            width: '100%'
                        }}
                    /> */}
                <p color="subtle" ellipsify>
                    {creatorRoyalties * 100}%
                </p>
            </td>
            {/* <td className={AtHolderItems}>
                <div className="flex items-center gap-2 truncate  text-secondary dark:text-white">
                  
                    <FormatCryptoCurrency amount={marketplaceFee} logoHeight={14} textStyle="body1" />
                    <p color="subtle" ellipsify>
                        ({marketplaceFeePercent || 0})%
                    </p>
                </div>
            </td> */}

            <td className={AtHolderItems}>
                <div className=" relative mx-auto w-32">
                    <Input
                        placeholder="Price"
                        className="h-9 w-32 pr-[54px] text-sm"
                        name=""
                        type="text"
                        value={price}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const isNumeric = /^-?\d*(\.\d*)?$/.test(inputValue);
                            if (isNumeric) {
                                handlePriceChange(inputValue);
                            }
                        }}
                    />
                    {price !== undefined && price !== '' && Number(price) !== 0 && Number(price) < MINIMUM_AMOUNT && (
                        <p style="subtitle3" color="error">
                            {t('multiListing.must_exceed')}Must exceed {MINIMUM_AMOUNT}
                        </p>
                    )}
                    <div className=" absolute top-1/2  right-2 -translate-y-1/2">
                        {topTraitPrice && topTraitPrice > 0 ? (
                            <p color="subtle">
                                {topTraitPrice} {defaultCurrency.symbol}
                            </p>
                        ) : null}
                        {/* <PolygonIcon />
                        MATIC */}
                        {/* <CryptoCurrencyIcon address={currency.contract} height={8} width={8} /> */}
                        <p> {currency.symbol}</p>
                    </div>
                </div>
            </td>
            <td className={AtHolderItems}>
                <i
                    className="icon-delete cursor-pointer text-base text-danger"
                    onClick={() => removeListing(`${listing.token.token?.contract}:${listing.token.token?.tokenId}`, listing.orderbook as string)}
                ></i>
            </td>
        </tr>
    );
};

export default BatchListingTableRow;
