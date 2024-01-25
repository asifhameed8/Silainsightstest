import { IHashtag } from './feeds.interface';

export interface IAccount {
    jwt: string;
    user: IUser;
    isAuth: boolean;
}
export interface Wallet {
    _id: string;
    address: string;
    isPrimary: boolean;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    avatar: string;
    coverImage: string;
    isEmailVerified: boolean;
    isActive: boolean;
    hideWallet: boolean;
    wallet: string;
    roles: string[];
    isVerified: boolean;
    isSCC: boolean;
    verifyStatus?: string;
    isBlocked: boolean;
    facebook: string;
    instagram: string;
    reddit: string;
    twitter: string;
    linkedin: string;
    discord: string;
    youtube: string;
    tiktok: string;
    web: string;
    twitch: string;
    bio: string;
    followers: string[] & IUser[];
    followersCount: number;
    following: string[] & IUser[];
    followingCount: number;
    followingHashtags: IHashtag[];
    blockedUsers?: string[];
    blockedBy?: string[];
    source: string;
    points?: number;
    deletedAt?: Date;
    isDeleted?: boolean;
    isVerfied?: boolean;
    country: object;
    key: string;
    referral: string;
    boughtCount: number;
    soldCount: number;
    scc_status: string;
    invitation_code: string;
    settings: {
        alerts: {
            messenger: boolean;
            bids: boolean;
            sell: boolean;
            buy: boolean;
            like: boolean;
            mint: boolean;
            comment: boolean;
            follow: boolean;
            followed_post: boolean;
            followed_comment: boolean;
            followed_repost: boolean;
            followed_mint_post: boolean;
            followed_created_collection: boolean;
            followed_listed: boolean;
            followed_sold: boolean;
        };
        email: {
            messenger: boolean;
            bids: boolean;
            sell: boolean;
            buy: boolean;
            like: boolean;
            mint: boolean;
            comment: boolean;
            follow: boolean;
            followed_post: boolean;
            followed_comment: boolean;
            followed_repost: boolean;
            followed_mint_post: boolean;
            followed_created_collection: boolean;
            followed_listed: boolean;
            followed_sold: boolean;
        };
        twoFa?: boolean;
        threeFa?: boolean;
        messagePrivacy: string;
        isTwitterEnabled: boolean;
        isLinkedInEnabled: boolean;
        lastMintedCollection: string;
    };
    twitterId: string;
    isLinkedInConnected: boolean;
    backgroundTheme: string;
    affiliatedUser: boolean;
    recentFollowersCount: number;
    wallets: Wallet[];
    createdAt: Date;
    onesignal_keys: string[];
    userNameUpdateAt: Date;
}

export interface ISettings {
    alerts: {
        messenger: boolean;
        bids: boolean;
        sell: boolean;
        buy: boolean;
        like: boolean;
        mint: boolean;
        comment: boolean;
        follow: boolean;
    };
    email: {
        messenger: boolean;
        bids: boolean;
        sell: boolean;
        buy: boolean;
        like: boolean;
        mint: boolean;
        comment: boolean;
        follow: boolean;
    };
    twoFa: boolean;
    messagePrivacy: string;
}
