import useTranslation from 'next-translate/useTranslation';
import { Notification } from 'src/interfaces/notifications.interface';

export const notificationsType = Object.freeze({
    MINTING: 'MINTING',
    BIDDING: 'BIDDING',
    LISTING: 'LISTING',
    FOLLOW: 'FOLLOW',
    SOLD: 'SOLD',
    BOUGHT: 'BOUGHT',
    REMOVE_BID: 'REMOVE_BID',
    STAGE: 'STAGE',
    REACTION: 'REACTION',
    REPOST: 'REPOST',
    REPOST_COMMENT: 'REPOST_COMMENT',
    COMMENT: 'COMMENT',
    COMMENT_REPLY: 'COMMENT_REPLY',
    MENTIONED: 'MENTIONED',
    VOTE: 'VOTE',
    LIKE: 'LIKE',
    LIKE_COMMENT: 'LIKE_COMMENT',
    HASHTAG: 'HASHTAG',
    MESSAGE: 'MESSAGE',
    // SEND FOLLOWER NOTICE
    FOLLOWER_POST: 'FOLLOWER_POST',
    FOLLOWER_MINT: 'FOLLOWER_MINT',
    FOLLOWER_CREATE_COLLECTION: 'FOLLOWER_CREATE_COLLECTION',
    FOLLOWER_COMMENT: 'FOLLOWER_COMMENT',
    FOLLOWER_REPOST: 'FOLLOWER_REPOST',

    SYSTEM: 'SYSTEM'
});

export const NotificationMessages = {
    [notificationsType.REPOST]: 'has reposted your post',
    [notificationsType.REPOST_COMMENT]: 'has reposted your comment',
    [notificationsType.VOTE]: 'has voted on your poll',
    [notificationsType.MENTIONED]: 'has mentioned you in the post',
    [notificationsType.COMMENT]: ' has commented on your post',
    [notificationsType.REACTION]: 'has reacted on your post',
    [notificationsType.LIKE]: 'has liked to your post',
    [notificationsType.LIKE_COMMENT]: 'has reacted to your comment',
    [notificationsType.COMMENT_REPLY]: 'has replied on your comment',
    [notificationsType.HASHTAG]: 'someone added new post in hashtag',
    [notificationsType.STAGE]: 'is live. Join now!',
    [notificationsType.FOLLOW]: 'has started following you',
    [notificationsType.FOLLOWER_POST]: 'you followed has created a new post',
    [notificationsType.FOLLOWER_MINT]: 'you followed has created a new mint post',
    [notificationsType.FOLLOWER_COMMENT]: 'you followed has added a comment',
    [notificationsType.FOLLOWER_REPOST]: 'you followed has reposted',
    [notificationsType.FOLLOWER_CREATE_COLLECTION]: 'you followed has created a new collection',
    [notificationsType.BIDDING]: 'has make an offer on your NFT',
    [notificationsType.SOLD]: 'has bought your NFT',
    [notificationsType.LISTING]: 'you followed has listed an NFT'
};

import React from 'react';

export default function GenerateLang({ message }: { message: string }) {
    const { t } = useTranslation('common');

    return <>{t(message)}</>;
}

export const generateNotificationMessage = (type: string, item: Notification) => {
    switch (type) {
        case notificationsType.REPOST:
            return <GenerateLang message={'Notifications.REPOST'} />;
        case notificationsType.REPOST_COMMENT: //not present in db
            // return NotificationMessages[notificationsType.REPOST_COMMENT];
            return <GenerateLang message={'Notifications.REPOST_COMMENT'} />;
        case notificationsType.VOTE:
            return <GenerateLang message={'Notifications.VOTE'} />;
        case notificationsType.MENTIONED:
            return <GenerateLang message={'Notifications.MENTIONED'} />;
        case notificationsType.COMMENT:
            return <GenerateLang message={'Notifications.COMMENT'} />;
        case notificationsType.REACTION:
            return <GenerateLang message={'Notifications.REACTION'} />;
        case notificationsType.LIKE:
            return <GenerateLang message={'Notifications.LIKE'} />;
        case notificationsType.LIKE_COMMENT:
            return <GenerateLang message={'Notifications.LIKE_COMMENT'} />;
        case notificationsType.COMMENT_REPLY:
            return <GenerateLang message={'Notifications.COMMENT_REPLY'} />;
        case notificationsType.HASHTAG:
            return <GenerateLang message={'Notifications.HASHTAG'} />;
        case notificationsType.STAGE:
            return <GenerateLang message={'Notifications.STAGE'} />;
        case notificationsType.FOLLOW:
            return <GenerateLang message={'Notifications.FOLLOW'} />;

        // followers notification

        case notificationsType.FOLLOWER_POST:
            return <GenerateLang message={'Notifications.FOLLOWER_POST'} />;
        case notificationsType.FOLLOWER_MINT:
            return <GenerateLang message={'Notifications.FOLLOWER_MINT'} />;
        case notificationsType.FOLLOWER_COMMENT:
            return <GenerateLang message={'Notifications.FOLLOWER_COMMENT'} />;
        // return NotificationMessages[notificationsType.FOLLOWER_COMMENT];
        case notificationsType.FOLLOWER_REPOST:
            return <GenerateLang message={'Notifications.FOLLOWER_REPOST'} />;
        case notificationsType.FOLLOWER_CREATE_COLLECTION:
            return <GenerateLang message={'Notifications.FOLLOWER_CREATE_COLLECTION'} />;

        // s3 notification
        case notificationsType.BIDDING:
            return <GenerateLang message={'Notifications.BIDDING'} />;
        case notificationsType.SOLD:
            return <GenerateLang message={'Notifications.SOLD'} />;
        case notificationsType.LISTING:
            return <GenerateLang message={'Notifications.LISTING'} />;
        case notificationsType.SYSTEM:
            return item.message;
        default:
            break;
    }
};

// {
//     user1:{token:"ABC",on:true},
//     user2:{token:"ABC",on:false},
// }

// one signal =()==>{
//     user1:{token:"ABC",on:true},
//     user1.token
// }

/*

 -- create appActievUser Collecton
 ---- appActivevUserCollection

 -- validations
 ---- check if oneToken exits then: update the active logged in user id.
 ---- checkf ifi oneToken does not exist, then add the record 
 ----- update or insert the record on user login.
 ------ [
    {oneToken: 'ABC', userId: "A1"}, case 1: insert
    {oneToken: 'ABC', userId: "A2"}, case 2: update
    {oneToken: 'XYZ', userId: "A1"}, case 3: insert user if when generated the new token from antoher browser. 
 ]



 # utulity
 -- while sending notification get the list of token avilable againts users. [CURRENT USER]
 -- check each token active user on appActoveUser. [TOKEN]
 ---- if current is available againts the given token only then send the notifiation othervise by pass/skip.

*/
