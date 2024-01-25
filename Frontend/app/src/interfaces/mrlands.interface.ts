import { Address } from 'wagmi';
import { Post } from './feeds.interface';

export interface IMrLand {
    _id: string;
    id: number;
    landID: number;
    posX: number;
    posY: number;
    status: number;
    owner: string;
    island: number;
    width: number;
    height: number;
    isPlot: number;
    logo: string;
    description: string;
    name: string;
    network: number;
    post?: Post;
    likes: number;
    likesBy: string[];
    dislikes: number;
    dislikesBy: string[];
}

export interface INFTMintLand {
    name: string;
    contractAddress: Address;
    mrToken?: Address;
    tokenAddress: string;
    uri: string;
    image: string;
    chain: string;
    chain_id: number;
    unit: string;
    price: number;
    pcs: string;
    quantity: number;
}
