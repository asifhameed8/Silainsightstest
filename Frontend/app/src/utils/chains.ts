import { EvmNetwork } from '@dynamic-labs/sdk-react-core';
import { arbitrum, /*  polygon, */ /*  goerli, */ Chain } from 'wagmi/chains';

//CONFIGURABLE: The default export controls the supported chains for the marketplace. Removing
// or adding chains will result in adding more or less chains to the marketplace.
// They are an extension of the wagmi chain objects

type ReservoirChain = Chain & {
    lightIconUrl: string;
    darkIconUrl: string;
    reservoirBaseUrl: string;
    reservoirSocketUrl: string;
    proxyApi: string;
    routePrefix: string;
    apiKey?: string;
    coingeckoId?: string;
    collectionSetId?: string;
    community?: string;
};

export const DefaultChain: ReservoirChain = {
    ...arbitrum,
    name: 'Arbitrum',
    lightIconUrl: '/icons/arbitrum-icon-dark.svg',
    darkIconUrl: '/icons/arbitrum-icon-light.svg',
    reservoirBaseUrl: 'https://api-arbitrum.reservoir.tools',
    proxyApi: '/api/reservoir/arbitrum',
    routePrefix: 'arbitrum',
    apiKey: process.env.NEXT_PUBLIC_RESERVOIR_API_KEY,
    coingeckoId: 'arbitrum-iou',
    reservoirSocketUrl: 'wss://ws-arbitrum.reservoir.tools',
    collectionSetId: process.env.NEXT_PUBLIC_ETH_COLLECTION_SET_ID,
    community: process.env.NEXT_PUBLIC_ETH_COMMUNITY
};

export const evmNetworks: EvmNetwork[] = [
    {
        blockExplorerUrls: [arbitrum.blockExplorers.etherscan.url],
        chainId: arbitrum?.id,
        chainName: arbitrum.name,
        iconUrls: ['/icons/arbitrum-icon-light.svg'],
        name: arbitrum.network,
        nativeCurrency: {
            decimals: 18,
            name: 'Ether',
            symbol: 'ETH'
        },
        networkId: arbitrum?.id,

        rpcUrls: [...arbitrum.rpcUrls.public.http /* , ...arbitrum.rpcUrls.alchemy.http, ...arbitrum.rpcUrls.infura.http */],
        vanityName: arbitrum.name
    }
];

export default [
    DefaultChain

    // {
    //     ...goerli,
    //     lightIconUrl: '/icons/goerli-icon-dark.svg',
    //     darkIconUrl: '/icons/goerli-icon-light.svg',
    //     reservoirBaseUrl: 'https://api-goerli.reservoir.tools',
    //     reservoirSocketUrl: 'wss://ws.reservoir.tools',
    //     proxyApi: '/api/reservoir/goerli',
    //     routePrefix: 'goerli',
    //     apiKey: process.env.GOERLI_RESERVOIR_API_KEY,
    //     coingeckoId: 'goerli-eth',
    //     collectionSetId: process.env.NEXT_PUBLIC_GOERLI_COMMUNITY,
    //     community: process.env.NEXT_PUBLIC_GOERLI_COMMUNITY
    // }
] as ReservoirChain[];
