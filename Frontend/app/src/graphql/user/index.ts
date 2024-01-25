import { gql } from '@apollo/client';
import { user_default_mutation } from '../auth';

export const MY_FOLLOWERS = gql`
    mutation MyFollowers {
        myFollowers {
            firstName
            lastName
            userName
            email
            avatar
            _id
            isVerified
            isSCC
        }
    }
`;

export const STAGE_SEND_INVITATION = gql`
    mutation StageInviteToUser($stageId: String!, $stageTitle: String!, $stageDesc: String!, $userToInvite: String!) {
        stageInviteToUser(stageId: $stageId, stageTitle: $stageTitle, stageDesc: $stageDesc, userToInvite: $userToInvite) {
            message
            success
        }
    }
`;

export const SEARCH_USERS = gql`
    query SearchUsers($query: String!, $groupId: String) {
        searchUsers(query: $query, groupId: $groupId) {
            _id
            firstName
            lastName
            userName
            isVerified
            isSCC
            settings {
                messagePrivacy
            }
            avatar
        }
    }
`;

export const USER_PROFILE = gql`
    query UserProfile($userName: String!) {
        userProfile(userName: $userName) {
            _id
            firstName
            lastName
            userName
            email
            phoneNumber
            backgroundTheme
            avatar
            coverImage
            isEmailVerified
            isActive
            hideWallet
            isVerified
            isSCC
            verifyStatus
            facebook
            instagram
            reddit
            twitter
            discord
            youtube
            tiktok
            web
            bio
            followersCount
            followingCount
            blockedUsers {
                _id
            }
            followingHashtags {
                _id
                name
                followersCount
            }
            followers {
                _id
                firstName
                lastName
                userName
                email
                avatar
                followersCount
                followingCount
                isVerified
                isSCC
            }
            following {
                _id
                firstName
                lastName
                userName
                email
                avatar
                followersCount
                followingCount
                isVerified
                isSCC
            }
            points
            wallet
            wallets {
                _id
                address
                isPrimary
                isHidden
                createdAt
                updatedAt
            }
        }
    }
`;

export const USER_PUBLIC_PROFILE = gql`
    query UserPublicProfile($userName: String!) {
        getUserPublicProfile(userName: $userName) {
            _id
            userName
            avatar
            firstName
            lastName
            _id
            isVerified
            followersCount
            recentFollowersCount
            followingCount
        }
    }
`;

export const EDIT_PROFILE = gql`
    mutation EditProfile($data: ProfileInput!) {
        editProfile(data: $data) {
            _id
            firstName
            lastName
            userName
            phoneNumber
            avatar
            coverImage
            isEmailVerified
            hideWallet
            wallet
            isVerified
            isSCC
            verifyStatus
            isBlocked
            facebook
            instagram
            reddit
            twitter
            discord
            youtube
            tiktok
            web
            bio
            followersCount
            followingCount
            points
            backgroundTheme
            onesignal_keys
            userNameUpdateAt
        }
    }
`;

export const FOLLOW_MUTATIONS = gql`
    mutation FollowUser($id: String!) {
        follow(id: $id) {
            followersCount
            followingCount
            followers {
                _id
            }
            following {
                _id
            }
        }
    }
`;

export const REFETCH_USER_MUTATION = gql`
    mutation RefetchUser($referral: String) {
        refetchUser(referral: $referral) {
            ${user_default_mutation}
        }
    }
`;

// GLOBAL SEARCH

export const SEARCH_QUERY = gql`
    query Search($search: String!) {
        search(search: $search) {
            users {
                _id
                firstName
                lastName
                userName
                avatar
                followersCount
                recentFollowersCount
                isVerified
                isSCC
            }
            hashtags {
                _id
                name
            }
            hashtagCount {
                name
                count
            }
            collections {
                name
                image
                contract
                chainId
                chain
                collectionViews
                followersCount
            }
        }
    }
`;

export const ADD_WALLET = gql`
    mutation AddWallet($signature: String!) {
        addWallet(signature: $signature) {
            _id
            address
        }
    }
`;

export const GET_USER_WALLETS = gql`
    query Wallets($userId: String!) {
        wallets(userId: $userId) {
            _id
            address
        }
    }
`;

export const DELETE_WALLET = gql`
    mutation DeleteWallet($walletId: String!) {
        deleteWallet(walletId: $walletId) {
            _id
            address
        }
    }
`;

export const SET_PRIMARY_WALLET = gql`
    mutation SetPrimaryWallet($walletId: String!) {
        setPrimaryWallet(walletId: $walletId) {
            _id
            address
        }
    }
`;

export const GET_WALLET_BY_ADDRESS = gql`
    query Wallet($address: String!) {
        wallet(address: $address) {
            _id
            address
            # isPrimary
            # isHidden
            # createdAt
            # updatedAt
            userId {
                followers {
                    _id
                }
                userName
                avatar
                _id
                isVerified
                isSCC
                followersCount
                followingCount
            }
        }
    }
`;

export const GET_CONTENT_CREATOR_STATS = gql`
    query ContentCreatorStats {
        contentCreatorStats {
            days
            isdays
            followers
            isfollowers
            iscollection
            isNFTs
            nftsLast7Days {
                date
                posts {
                    _id
                }
            }
        }
    }
`;

export const GET_LEADERS = gql`
    query Leaders {
        leaders {
            tokenContractCount
            user {
                userName
                avatar
                firstName
                lastName
                _id
                isVerified
                isSCC
            }
        }
    }
`;

export const GET_ACTIVITIES = gql`
    query Activities {
        activities {
            _id
            type
            createdAt
            user {
                userName
                avatar
                firstName
                lastName
                _id
                isVerified
                isSCC
            }
            post {
                _id
                text
                tokenData {
                    chain
                    contract
                    tokenId
                    collectionName
                    image
                }
            }
            nftCollection {
                name
                _id
                contract
                chain
                image
                symbol
            }
            token {
                tokenId
                name
                image
            }
            price {
                currency {
                    contract
                    name
                    symbol
                    decimals
                }
                amount {
                    raw
                    decimal
                    usd
                    native
                }
            }
        }
    }
`;

export const APPLY_FOR_SCC = gql`
    mutation ApplyForSCCApprovel {
        applyForSCCApprovel {
            message
            success
        }
    }
`;
