import React, { ComponentPropsWithoutRef, Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import Input from '@components/Forms/Input';
import SelectComponent from '@components/Forms/Select';
// import EthIcon from '@components/_Icons/EthIcon';
// import PolygonIcon from '@components/_Icons/PolygonIcon';
// import BatchListingsTable from './BatchListingsTable';
import { Currency, Listings, ListModal, useUserTokens } from '@reservoir0x/reservoir-kit-ui';
import { ManipulateType } from 'dayjs';
import wrappedContracts from '@utils/wrappedContracts';
import expirationOptions from '@utils/defaultExpirationOptions';
import { useMediaQuery } from 'react-responsive';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
import useChainCurrency from '@hooks/useChainCurrency';
import BatchListingTableRow from './ListingFlowTable';
import { FormatCryptoCurrency } from '@components/CurrencyFormat';
import BatchListModal from '@modals/ListingModal/BatchListModal';
import ImageComponent from '@components/ImageComponent';
import FormCheck from '@components/Forms/FormCheck';
import useTranslation from 'next-translate/useTranslation';
export type ExpirationOption = {
    text: string;
    value: string;
    relativeTime: number | null;
    relativeTimeUnit: ManipulateType | null;
};

export type UserToken = ReturnType<typeof useUserTokens>['data'][0];
export type BatchListing = {
    token: UserToken;
    price: string;
    quantity: number;
    expirationOption: ExpirationOption;
    orderbook: Listings[0]['orderbook'];
    orderKind: Listings[0]['orderKind'];
    marketplaceFee?: number;
};

type ListingCurrencies = ComponentPropsWithoutRef<typeof ListModal>['currencies'];

export type Marketplace = {
    name: string;
    imageUrl: string;
    orderbook: string;
    orderKind: string;
};

type Props = {
    selectedItems: UserToken[];
    setSelectedItems: React.Dispatch<React.SetStateAction<never[]>>;
    setShowListingPage: Dispatch<SetStateAction<boolean>>;
};

const MINIMUM_AMOUNT = 0.000001;

const marketplaces = [
    {
        name: 'MintStargram',
        imageUrl: '/assets/images/mintstargram.svg',
        orderbook: 'reservoir',
        orderKind: 'seaport-v1.5'
    },
    {
        name: 'OpenSea',
        imageUrl: 'https://api.reservoir.tools/redirect/sources/opensea/logo/v2',
        orderbook: 'opensea',
        orderKind: 'seaport-v1.5'
    }
];

const AtHolderHead = 'px-3 !font-display text-center uppercase font-semibold  py-3 text-xs dark:text-white whitespace-nowrap text-lightText';

const BatchListings = ({ selectedItems, setSelectedItems, setShowListingPage }: Props) => {
    const { t } = useTranslation('common');
    const [listings, setListings] = useState<BatchListing[]>([]);

    const [selectedMarketplaces, setSelectedMarketplaces] = useState<Marketplace[]>([marketplaces[0]]);

    const [globalPrice, setGlobalPrice] = useState<string>('');
    const [globalExpirationOption, setGlobalExpirationOption] = useState<ExpirationOption>(expirationOptions[5]);

    const [totalProfit, setTotalProfit] = useState<number>(0);

    const [listButtonDisabled, setListButtonDisabled] = useState<boolean>(true);

    const isLargeDevice = useMediaQuery({ minWidth: 1400 });

    const chain = useMarketplaceChain();

    const chainCurrency = useChainCurrency();
    const defaultCurrency = {
        contract: chainCurrency.address,
        symbol: chainCurrency.symbol
    };
    // CONFIGURABLE: Here you can configure which currencies you would like to support for batch listing
    const currencies: ListingCurrencies = [
        { ...defaultCurrency },
        {
            contract: wrappedContracts[chain.id],
            decimals: 18,
            symbol: `W${defaultCurrency.symbol}`
        }
    ];

    const [
        currency
        //  setCurrency
    ] = useState<Currency>(currencies && currencies[0] ? currencies[0] : defaultCurrency);

    const displayQuantity = useCallback(() => {
        return listings.some((listing) => listing?.token?.token?.kind === 'erc1155');
    }, [listings]);

    let gridTemplateColumns = displayQuantity()
        ? isLargeDevice
            ? '1.1fr .5fr 2.6fr .8fr repeat(2, .7fr) .5fr .3fr'
            : '1.3fr .6fr 1.6fr 1fr repeat(2, .9fr) .6fr .3fr'
        : isLargeDevice
        ? '1.1fr 2.7fr 1fr repeat(2, .7fr) .5fr .3fr'
        : '1.3fr 1.8fr 1.2fr repeat(2, .9fr) .6fr .3fr';

    const generateListings = useCallback(() => {
        console.log(selectedItems, 'selectedItems');

        const listings = selectedItems.flatMap((item) => {
            return selectedMarketplaces.map((marketplace) => {
                const listing: BatchListing = {
                    token: item,
                    quantity: 1,
                    price: globalPrice || '0',
                    expirationOption: globalExpirationOption,
                    //@ts-ignore
                    orderbook: marketplace.orderbook,
                    //@ts-ignore
                    orderKind: marketplace.orderKind
                };

                return listing;
            });
        });

        return listings;
    }, [selectedItems, selectedMarketplaces]);

    useEffect(() => {
        setListings(generateListings());
    }, [selectedItems, selectedMarketplaces, generateListings]);

    useEffect(() => {
        const maxProfit = selectedItems.reduce((total, item) => {
            const itemId = `${item.token?.contract}:${item.token?.tokenId}`;
            const itemListings = listings.filter((listing) => `${listing.token.token?.contract}:${listing.token.token?.tokenId}` === itemId);

            const profits = itemListings.map((listing) => {
                const listingCreatorRoyalties =
                    (Number(listing.price) * listing.quantity * (listing?.token?.token?.collection?.royaltiesBps || 0)) / 10000;

                const profit = Number(listing.price) * listing.quantity - (listing.marketplaceFee || 0) - listingCreatorRoyalties;

                return profit;
            });

            const highestProfit = Math.max(...profits);

            return total + highestProfit;
        }, 0);

        setTotalProfit(maxProfit);
    }, [listings, selectedMarketplaces, globalPrice]);

    useEffect(() => {
        const hasInvalidPrice = listings.some(
            (listing) => listing.price === undefined || listing.price === '' || Number(listing.price) < MINIMUM_AMOUNT
        );
        setListButtonDisabled(hasInvalidPrice);
    }, [listings]);

    const removeMarketplaceListings = useCallback(
        (orderbook: string) => {
            let updatedListings = listings.filter((listing) => listing.orderbook === orderbook);
            setListings(updatedListings);
        },
        [listings]
    );

    const addMarketplaceListings = useCallback(
        (orderbook: string, orderKind: string) => {
            setListings((prevListings) => {
                const updatedListings = [...prevListings];

                selectedItems.forEach((item) => {
                    const existingListingIndex = updatedListings.findIndex((listing) => listing.token === item && listing.orderbook === orderbook);

                    if (existingListingIndex === -1) {
                        const newListing: BatchListing = {
                            token: item,
                            quantity: 1,
                            price: globalPrice || '0',
                            expirationOption: globalExpirationOption,
                            //@ts-ignore
                            orderbook: orderbook,
                            //@ts-ignore
                            orderKind: orderKind
                        };
                        updatedListings.push(newListing);
                    }
                });

                return updatedListings;
            });
        },
        [selectedItems, globalPrice, globalExpirationOption]
    );

    const handleMarketplaceSelection = useCallback(
        (marketplace: Marketplace) => {
            const isSelected = selectedMarketplaces.some((selected) => selected.orderbook === marketplace.orderbook);

            if (isSelected) {
                setSelectedMarketplaces((prevSelected) => prevSelected.filter((selected) => selected.orderbook !== marketplace.orderbook));
                removeMarketplaceListings(marketplace.orderbook as string);
            } else {
                setSelectedMarketplaces((prevSelected) => [...prevSelected, marketplace]);
                addMarketplaceListings(marketplace.orderbook as string, marketplace.orderKind as string);
            }
        },
        [selectedMarketplaces, addMarketplaceListings, removeMarketplaceListings]
    );

    const updateListing = useCallback((updatedListing: BatchListing) => {
        setListings((prevListings) => {
            return prevListings.map((listing) => {
                if (listing.token === updatedListing.token && listing.orderbook === updatedListing.orderbook) {
                    return updatedListing;
                }
                return listing;
            });
        });
    }, []);

    // const applyFloorPrice = useCallback(() => {
    //     setListings((prevListings) => {
    //         return prevListings.map((listing) => {
    //             if (listing.token.token?.collection?.floorAskPrice?.amount?.native) {
    //                 return {
    //                     ...listing,
    //                     price: listing.token.token?.collection?.floorAskPrice?.amount?.native.toString()
    //                 };
    //             }
    //             return listing;
    //         });
    //     });
    //     setCurrency(defaultCurrency);
    // }, [listings]);

    // const applyTopTraitPrice = useCallback(() => {
    //     setListings((prevListings) => {
    //         return prevListings.map((listing) => {
    //             if (listing.token.token?.attributes) {
    //                 // Find the highest floor price
    //                 let topTraitPrice = Math.max(...listing.token.token.attributes.map((attribute) => attribute.floorAskPrice ?? 0));
    //                 if (topTraitPrice && topTraitPrice > 0) {
    //                     return {
    //                         ...listing,
    //                         price: topTraitPrice.toString()
    //                     };
    //                 }
    //             }

    //             return listing;
    //         });
    //     });
    //     setCurrency(defaultCurrency);
    // }, [listings]);

    return (
        <Container classNames="w-full">
            {
                <Button className="mt-6" onClick={() => setShowListingPage?.(false)}>
                    {t('buttons.back')}
                </Button>
            }
            <div className="mt-2 overflow-hidden rounded-md border border-lightBorder dark:border-borderColor">
                <div className="sticky top-0 z-30 border-b border-lightBorder bg-lightHover  dark:border-borderColor dark:bg-gray17">
                    <div className="flex items-center justify-between border-b border-lightBorder p-4  dark:border-borderColor">
                        <div className="flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.0911 3.44792H10.0845M10.0911 0.78125H6.75781C6.41657 0.78124 6.07536 0.911415 5.815 1.17177L1.1483 5.83844C0.627599 6.35914 0.627599 7.20336 1.1483 7.72406L5.815 12.3907C6.3357 12.9114 7.17992 12.9114 7.70062 12.3907L12.3673 7.72406C12.6276 7.46371 12.7578 7.12248 12.7578 6.78125V3.44792C12.7578 1.97516 11.5639 0.78125 10.0911 0.78125Z"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="text-sm font-semibold text-white">{t('multiListing.multi_listing')}</p>
                        </div>
                        {/* <Button onClick={() => setShowListingPage(false)}>Back</Button> */}
                        <div className="">
                            <BatchListModal
                                listings={listings}
                                disabled={listButtonDisabled}
                                currency={currency}
                                selectedMarketplaces={selectedMarketplaces}
                                onCloseComplete={() => {
                                    setShowListingPage(false);
                                    setSelectedItems([]);
                                    setListings([]);
                                }}
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-between rounded-md p-4 ">
                        <div className=" w-1/2">
                            <div className=" flex h-[2.375rem] items-center gap-4">
                                <p className="text-white"> {t('multiListing.marketplaces')}:</p>
                                {/* <div
                                    className="flex items-center gap-2"
                                    // className={`${isSelected ? '!border-primary' : '!border-borderColor'}`}
                                >
                                    <FormCheck name="supportedChains" label={''} checked checkClass="!bg-secondary" />

                                    <ImageComponent
                                        width={16}
                                        height={16}
                                        src="/assets/images/mintstargram.svg"
                                        alt="logo"
                                        className="rounded-md object-cover"
                                        figclassname=" rounded-md"
                                    />
                                    <p className=" text-white">MintStargram</p>
                                </div> */}
                                {marketplaces.map((marketplace, i) => {
                                    const isSelected = selectedMarketplaces.some((selected) => selected.orderbook === marketplace.orderbook);
                                    return (
                                        <div
                                            key={marketplace.name}
                                            onClick={() => handleMarketplaceSelection(marketplace)}
                                            className="flex items-center gap-2"
                                            // className={`${isSelected ? '!border-primary' : '!border-borderColor'}`}
                                        >
                                            {/* <img src={marketplace.imageUrl} alt={marketplace.name} style={{ width: 16, height: 16 }} /> */}
                                            <FormCheck
                                                checkClass={`${i == 0 ? '!bg-secondary' : null}`}
                                                name="supportedChains"
                                                label={''}
                                                checked={isSelected}
                                                disabled={i == 0}
                                                // onChange={() => {
                                                //     handleMarketplaceSelection(marketplace);
                                                // }}
                                            />
                                            {marketplace.imageUrl && (
                                                <ImageComponent
                                                    width={16}
                                                    height={16}
                                                    src={marketplace.imageUrl}
                                                    alt={marketplace.name}
                                                    className="rounded-md object-cover"
                                                    figclassname=" rounded-md"
                                                />
                                            )}
                                            <p className=" text-white">{marketplace.name}</p>
                                        </div>
                                    );
                                })}
                                {/* <Button variant="outline">Reservoir</Button>
                        <Button className="whitespace-nowrap">OpenSea</Button> */}
                            </div>
                        </div>
                        <div className="flex w-1/2 items-center justify-end gap-4 text-base font-bold">
                            <div className="flex items-center gap-2">
                                <p className="text-white">{t('multiListing.duration')}</p>
                                <SelectComponent
                                    Data={expirationOptions.map((item) => ({
                                        ...item,
                                        name: item?.text
                                    }))}
                                    setSelected={setGlobalExpirationOption}
                                    selected={{
                                        ...expirationOptions.find((item) => item.text === globalExpirationOption?.text),
                                        name: globalExpirationOption?.text
                                    }}
                                    className="h-9 w-[193px]"
                                    Arbitrum
                                />
                            </div>
                            {/* <div className="flex h-[2.375rem] items-center gap-2">
                                <p className="whitespace-nowrap text-white">Set all to</p>
                                <Button onClick={applyFloorPrice} variant="outline" className="h-7 w-[110px] whitespace-nowrap">
                                    Floor Price
                                </Button>
                                <Button className="h-7 w-[110px] whitespace-nowrap" onClick={applyTopTraitPrice} variant="outline">
                                    Top Trait
                                </Button>
                            </div> */}
                            <div className="flex items-center gap-4">
                                {/* <SelectComponent
                                    Data={currencies.map((item) => ({ ...item, name: item?.symbol }))}
                                    setSelected={setCurrency}
                                    selected={{ ...currencies.find((item) => item.symbol === currency?.symbol), name: currency?.symbol }}
                                    className="h-9 w-[100px]"
                                /> */}
                                <div className="relative">
                                    <Input
                                        placeholder="Price"
                                        className="h-7 w-[116px] pl-2 pr-[52px] text-sm font-semibold"
                                        name=""
                                        type="text"
                                        value={globalPrice}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const isNumeric = /^-?\d*(\.\d*)?$/.test(inputValue);
                                            if (isNumeric) {
                                                setGlobalPrice(inputValue);
                                            }
                                        }}
                                    />
                                    <p className="absolute right-2 top-1/2  -translate-y-1/2">{currency?.symbol} </p>
                                </div>
                            </div>
                            {/* <SelectComponent Data={data1} setSelected={setSelected1} selected={selected1} className="h-[2.375rem] w-[193px]" /> */}
                        </div>
                    </div>
                </div>
                {listings.length > 0 ? (
                    <div className=" flex flex-col">
                        <div className="AtScrollHide overflow-x-auto">
                            <div className="inline-block min-w-full align-middle">
                                <div className="AtScrollHide  relative h-[calc(100vh-355px)] overflow-auto  dark:bg-transparent">
                                    <table className="min-w-full rounded">
                                        <thead className="sticky top-0 z-20 border-b border-lightBorder bg-lightHover dark:border-borderColor dark:bg-gray17">
                                            <tr>
                                                {/* <th scope="col" className={AtHolderHead}>
                                                    <FormCheck name="supportedChains" checked label={''} />
                                                </th> */}
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('explore.chain')}
                                                </th>
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('multiListing.items')} {listings?.length}
                                                </th>
                                                <th scope="col" className={`${AtHolderHead} !text-left`}>
                                                    {t('collections.collection')}
                                                </th>
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('explore.token_ID')}
                                                </th>
                                                {/* <th scope="col" className={AtHolderHead}>
                                                    Status
                                                </th>
                                                <th scope="col" className={AtHolderHead}>
                                                    Bought
                                                </th> */}
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('collections.floorprice')}
                                                </th>
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('multiListing.bought_for')}
                                                </th>
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('multiListing.profit')}
                                                </th>

                                                {/* <th scope="col" className={AtHolderHead}>
                                                    Expiration
                                                </th> */}
                                                <th scope="col" className={AtHolderHead}>
                                                    {t('multiListing.royalties')}
                                                </th>
                                                {/* <th scope="col" className={AtHolderHead}>
                                                    Marketplace Fee
                                                </th> */}

                                                <th scope="col" className={AtHolderHead}>
                                                    {/* <div className=" mx-auto flex w-[128px] overflow-hidden rounded-md border border-borderColor ">
                                                        <div className="flex h-[35px] w-[22%] cursor-pointer items-center justify-center bg-bgcolor">
                                                            -
                                                        </div>
                                                        <div className="flex w-[76%]  items-center justify-center">0.1</div>
                                                        <div className="flex h-[35px] w-[22%] cursor-pointer items-center justify-center bg-bgcolor">
                                                            +
                                                        </div>
                                                    </div> */}
                                                    {t('explore.listing-price')}
                                                </th>
                                                <th className={AtHolderHead}>{t('buttons.delete')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-lightBorder dark:divide-[#727279]">
                                            {listings?.map((listing) => (
                                                <BatchListingTableRow
                                                    listing={listing}
                                                    listings={listings}
                                                    setListings={setListings}
                                                    updateListing={updateListing}
                                                    setSelectedItems={setSelectedItems}
                                                    selectedItems={selectedItems}
                                                    displayQuantity={displayQuantity()}
                                                    gridTemplateColumns={gridTemplateColumns}
                                                    isLargeDevice={isLargeDevice}
                                                    globalExpirationOption={globalExpirationOption}
                                                    globalPrice={globalPrice}
                                                    currency={currency}
                                                    defaultCurrency={defaultCurrency}
                                                    selectedMarketplaces={selectedMarketplaces}
                                                    key={`${listing.token.token?.collection?.id}:${listing.token.token?.tokenId}:${listing.orderbook}`}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-borderColor bg-bgDark px-5 py-3">
                            <Container>
                                <div className="flex items-center justify-between ">
                                    <div>
                                        <p className="text-secondary1">{t('multiListing.max_profit')}</p>
                                        <FormatCryptoCurrency amount={totalProfit} logoHeight={18} textStyle={'h6'} className="w-max-content" />
                                    </div>
                                    {/* <div className="">
                                    <BatchListModal
                                        listings={listings}
                                        disabled={listButtonDisabled}
                                        currency={currency}
                                        selectedMarketplaces={selectedMarketplaces}
                                        onCloseComplete={() => {
                                            setShowListingPage(false);
                                            setSelectedItems([]);
                                            setListings([]);
                                        }}
                                    />
                                </div> */}
                                </div>
                            </Container>
                        </div>
                    </div>
                ) : (
                    <div className=" inset-0 m-auto flex h-[calc(100vh-260px)] items-center justify-center ">
                        <h2 className="text-white">{t('multiListing.no_item')}</h2>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default BatchListings;
