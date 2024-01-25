import { IUser } from './user.interface';

export interface IAffiliatedData {
    affiliatedData: {
        allReferral: IUser[];
        count: number;
        user: IUser;
        level: number;
        currentPrice: number;
        totalRedeemed: number;
        referralVolumeTraded: number;
        requested: boolean;
        commissionPercentage: number;
    };
    graphData: {
        count: number;
        createdAt: Date;
    };
}

export interface IAffiliated {
    allReferral: IUser[];
    count: number;
    user: IUser;
    level: number;
    currentPrice: number;
    totalRedeemed: number;
    referralVolumeTraded: number;
    requested: boolean;
    commissionPercentage: number;
}

export interface IReferralVideo {
    _id: string;
    fb: IUser[];
    whatsapp: IUser[];
    twitter: IUser[];
    linkedin: IUser[];
    instagram: IUser[];
    tiktok: IUser[];
    youtube: IUser[];
    src: string;
}
