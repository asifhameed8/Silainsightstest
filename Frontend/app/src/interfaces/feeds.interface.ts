import { IReaction } from './chat.interface';
import { Collection } from './collection.interface';
import { IUser } from './user.interface';
import { IMrLand } from './mrlands.interface';
import { PageInfo } from './PageInfo';

export interface IHashtag {
    _id: string;
    name: string;
    followersCount: number;
}

export interface IHashtagCount {
    name: string;
    count: number;
}

export interface PollOption {
    text: string;
    votes?: number;
    voters?: [IUser];
}

export interface Poll {
    expiresAt: Date | string;
    question: string;
    options: [PollOption];
}
export interface Token {
    _id: string;
    name: string;
    image: string;
    tokenId: string;
    chain: string;
    contract: string;
    owner: string;
}

export type StageObject = {
    id: string;
    title: string;
    description: string;
    date: Date;
};
export interface Post {
    collectionFollowers: any;
    collectionFollowersCount: number;
    inReplyToPost: Post;
    _id: string;
    text: string;
    linkPreview: string;
    media: [string];
    author: IUser;
    mentions: [IUser];
    hashtags: [IHashtag];
    videoViews: number;
    postViews: number;
    viewedBy: [string];
    reactionCount: number;
    commentsCount: number;
    commentsBy: Array<{ _id: string }>;
    isRepost: Boolean;
    originalPost: Post;
    retweetedBy: IUser;
    mrland?: IMrLand;
    repostedBy: Array<any>;
    _collection: Collection;
    collectionOfToken: Collection;
    poll: Poll;
    token: Token;
    repostCount: number;
    quoteCount: number;
    scheduledAt: string;
    createdAt: Date;
    updatedAt: Date;
    voters: IUser;
    post: Post;
    expiresAt: Date;
    reactions: IReaction[];
    collectionData: {
        image: string;
        banner: string;
        contract: string;
        chain: string;
        name: string;
    };
    tokenData: {
        collectionName: string;
        collectionImage: string;
        name: string;
        image: string;
        tokenId: string;
        contract: string;
        chain: string;
    };
    stage: StageObject;
}

export interface Feed {
    _id: string;
    type: string;
    owner: IUser;
    post: Post;
    _collection: Collection;
    createdAt: string;
    updatedAt: string;
}

export interface PostAsFeed {
    post: Post;
    type?: string;
}

export interface Comment extends Partial<Post> {}

export interface FeedConnection {
    records: Feed[];
    pageInfo: PageInfo;
}

export interface PostConnection {
    records: Post[];
    pageInfo: PageInfo;
    totalPostsCount: Number;
}

export interface I_GET_DELETED_POST {
    postId: string;
    inReplyToPost: string;
    type: 'COMMENT' | 'POST';
}
