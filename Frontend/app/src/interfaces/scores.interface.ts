import { IUser } from './user.interface';

export interface ISocre {
    _id: string;
    user: IUser;
    monthScore: number;
    weekScore: number;
    rank: number;
}
