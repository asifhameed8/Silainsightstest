import React, { createContext, useContext, useState, ReactNode, useEffect, useMemo } from 'react';
import { useCoinConversion } from '@reservoir0x/reservoir-kit-ui';
import { zeroAddress } from 'viem';
import { mainnet } from 'wagmi';
import { arbitrum, optimism, polygon } from 'viem/chains';

//CONFIGURABLE: Here you may configure currencies that you want to display in the wallet menu. Native currencies,
//like ETH/MATIC etc need to be fetched in a different way. Configure them below
const currencies: Currency[] = [
    {
        address: zeroAddress,
        symbol: 'USD',
        icon: <span>$</span>,
        decimals: mainnet.nativeCurrency.decimals,
        fixed: 2,
        chain: {
            id: mainnet.id,
            name: mainnet.name
        },
        coinGeckoId: 'ethereum'
    },
    {
        address: zeroAddress,
        symbol: 'ETH',
        icon: <i className="icon-eth" />,
        decimals: mainnet.nativeCurrency.decimals,
        fixed: 4,
        chain: {
            id: mainnet.id,
            name: mainnet.name
        },
        coinGeckoId: 'ethereum'
    },
    {
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        symbol: 'WETH',
        decimals: mainnet.nativeCurrency.decimals,
        fixed: 4,
        icon: <i className="icon-eth" />,
        chain: {
            id: mainnet.id,
            name: mainnet.name
        },
        coinGeckoId: 'weth'
    },
    {
        address: zeroAddress,
        symbol: 'MATIC',
        decimals: polygon.nativeCurrency.decimals,
        fixed: 4,
        icon: <i className="icon-eth" />,
        chain: {
            id: polygon.id,
            name: polygon.name
        },
        coinGeckoId: 'matic-network'
    },
    {
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        symbol: 'WETH',
        decimals: polygon.nativeCurrency.decimals,
        fixed: 4,
        icon: <i className="icon-eth" />,
        chain: {
            id: polygon.id,
            name: polygon.name
        },
        coinGeckoId: 'weth'
    },
    {
        address: '0x4200000000000000000000000000000000000006',
        symbol: 'WETH',
        decimals: optimism.nativeCurrency.decimals,
        fixed: 4,
        icon: <i className="icon-eth" />,
        chain: {
            id: optimism.id,
            name: optimism.name
        },
        coinGeckoId: 'weth'
    },
    {
        address: '0x4200000000000000000000000000000000000006',
        symbol: 'WETH',
        decimals: arbitrum.nativeCurrency.decimals,
        fixed: 4,
        icon: <i className="icon-eth" />,
        chain: {
            id: arbitrum.id,
            name: arbitrum.name
        },
        coinGeckoId: 'weth'
    }
];

const currencySymbols = currencies.map((currency) => currency.symbol).join(',');
const currencyCoingeckoIds = currencies.map((currency) => currency.coinGeckoId).join(',');

interface Currency {
    address: string;
    symbol: string;
    icon: string | ReactNode;
    decimals: number;
    fixed: number;
    chain: {
        id: number;
        name: string;
    };
    coinGeckoId: string;
}

interface CurrencyContextType {
    currency: Currency;
    changeCurrency: (newCurrency: string) => void;
    convertPrice: (price: number | undefined, toCurrency?: string) => number | string;
}

const defaultContextValue: CurrencyContextType = {
    currency: currencies[0], // Assuming the default currency is the first one in the array
    changeCurrency: () => {},
    convertPrice: (price) => {
        if (price === undefined) {
            return 'N/A';
        }
        return price;
    }
};

const CurrencyContext = createContext<CurrencyContextType>(defaultContextValue);

export const useCurrency = () => useContext(CurrencyContext);

interface CurrencyProviderProps {
    children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
    const [currency, setCurrency] = useState<Currency>(currencies[0]);
    const conversionRates = useCoinConversion(currency.symbol, currencySymbols, currencyCoingeckoIds);

    const changeCurrency = (newCurrency: string) => {
        const currency = currencies.find((currency) => currency.symbol == newCurrency);
        currency && setCurrency(currency);
        localStorage.setItem('currency', newCurrency);
    };

    const convertPrice = (price: number | undefined, fromCurrency: string = currencies[0].symbol): number | string => {
        if (!price) {
            return 0;
        }
        const rate = conversionRates.find((item) => item?.symbol == fromCurrency);
        let finalPrice = rate?.price ? Number(price * rate?.price).toFixed(currency?.fixed || 0) : price;
        let formated = formatLargeNumber(Number(finalPrice), currency?.fixed);
        return formated;
    };

    const formatLargeNumber = (number: number, fixed: number = 0): string => {
        const billion = 1000000000;
        const million = 1000000;
        const thousand = 1000;

        if (number >= billion) {
            return Number(number / billion).toFixed(fixed) + 'B';
        } else if (number >= million) {
            return Number(number / million).toFixed(fixed) + 'M';
        } else if (number >= thousand) {
            return Number(number / thousand).toFixed(fixed) + 'K';
        } else {
            return number.toString();
        }
    };
    useEffect(() => {
        // You may add logic here to handle updates when conversionRates change
    }, [conversionRates]);

    useEffect(() => {
        // Access localStorage only in the client side
        const savedCurrency = localStorage.getItem('currency');
        if (savedCurrency) {
            const currency = currencies.find((currency) => currency.symbol == savedCurrency);
            currency && setCurrency(currency);
        }
    }, []);

    const value = useMemo(
        () => ({
            currency,
            changeCurrency,
            convertPrice
        }),
        [currency, changeCurrency, convertPrice]
    );

    return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
