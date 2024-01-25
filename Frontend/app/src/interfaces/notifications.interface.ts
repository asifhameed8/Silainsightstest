import { Collection } from './collection.interface';
import { Post } from './feeds.interface';
import { IUser } from './user.interface';
export interface Notification {
    _id: string;
    type:
        | 'REPOST'
        | 'REPOST_COMMENT'
        | 'STAGE'
        | 'FOLLOW'
        | 'LIKE'
        | 'COMMENT'
        | 'REPLY'
        | 'VOTE'
        | 'MENTIONED'
        | 'REACTION'
        | 'LIKE'
        | 'LIKE_COMMENT'
        | 'HASHTAG'
        | 'FOLLOWER_POST'
        | 'FOLLOWER_MINT'
        | 'FOLLOWER_CREATE_COLLECTION'
        | 'FOLLOWER_COMMENT'
        | 'FOLLOWER_REPOST'
        | 'BIDDING'
        | 'LISTING'
        | 'SOLD'; // Add other notification types if necessary
    sender: 'USER'; // Add other sender types if necessary
    message: string | null;
    seen: boolean;
    receiver: IUser;
    from: IUser;
    createdAt: string;
    post: Post;
    stage: string;
    _collection: Collection;
    nft: {
        tokenId: string;
        image: string;
        name: string;
        contract: string;
    };
}
