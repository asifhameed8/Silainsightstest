import { gql } from '@apollo/client';

export let user_default_mutation = `
user {
    _id
    firstName
    lastName
    userName
    email
    bio
    phoneNumber
    avatar
    backgroundTheme
    isEmailVerified
    isVerified
    isSCC
    hideWallet
    points
    affiliatedUser
    verifyStatus
    scc_status
    invitation_code
    onesignal_keys
    blockedUsers {
        _id
    }       
    twitterId
    isLinkedInConnected
    followers {
        _id
    }
    following {
        _id
    }
    followingHashtags {
        _id
    }
    followersCount
    followingCount
    settings {
        twoFa
        threeFa
        messagePrivacy
        lastMintedCollection
        isLinkedInEnabled
        isTwitterEnabled
        alerts {
            messenger
            bids
            sell
            buy
            like
            mint
            comment
            follow
            followed_post
            followed_comment
            followed_repost
            followed_mint_post
            followed_created_collection
            followed_listed
            followed_sold
        }
        email {
            messenger
            bids
            sell
            buy
            like
            mint
            comment
            follow
            followed_post
            followed_comment
            followed_repost
            followed_mint_post
            followed_created_collection
            followed_listed
            followed_sold
        }
    }
    facebook
    instagram
    tiktok
    twitter
    web
    youtube
    discord
    userNameUpdateAt
    wallets {
        _id
        address
        isPrimary
        isHidden
    }
}
`;

export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(user: { email: $email, password: $password}) {
            access_token
            twoFa
            notAffiliated
            ${user_default_mutation}
        }
    }
`;

export const GOOGLE_LOGIN_MUTATION = gql`
    mutation LoginByGoogle($token: String!) {
        loginByGoogle(data: { token: $token }) {
            message
            access_token
            notAffiliated
            twoFa
            ${user_default_mutation}
        }
    }
`;

export const SIGNUP_MUTATION = gql`
    mutation Signup($data: SignInInput!) {
        signup(data: $data) {
            message
            access_token
        }
    }
`;

export const VERIFY_EMAIL_MUTATION = gql`
    mutation VerifyEmail {
        verifyEmail {
            success
            message
            loginResult{
                access_token
                twoFa
                ${user_default_mutation}
            }
        }
    }
`;
export const FORGOT_MUTATION = gql`
    mutation Login($email: String!) {
        passwordResetEmail(email: $email) {
            message
            status
            success
        }
    }
`;

export const VERIFY_CODE_MUTATION = gql`
    mutation VerifyCode($email: String!, $code: String!) {
        verifyCode(data: { email: $email, code: $code }) {
            success
        }
    }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
    mutation VerifyCode($email: String!, $code: String!) {
        verifyCode(data: { email: $email, code: $code }) {
            success
        }
    }
`;

export const RESET_PASSWORD_MUTATION = gql`
    mutation ResetPassword($email: String!, $code: String!, $password: String!, $confirmPassword: String!) {
        resetPassword(data: { email: $email, code: $code, password: $password, confirmPassword: $confirmPassword }) {
            success
        }
    }
`;

export const DELETE_ACCOUNT_MUTATION = gql`
    mutation DeleteUserAccount {
        deleteUserAccount {
            message
            success
        }
    }
`;

export const VERIFY_2FA_LOGIN_MUTATION = gql`
    mutation Verify2faLogin($code: String!) {
        verify2faLogin(code: $code) {
            access_token
            twoFa
            threeFa
            ${user_default_mutation}
        }
    }
`;

export const VERIFY_3FA_LOGIN_MUTATION = gql`
    mutation Verify3faLogin($code: String!) {
        verify3faLogin(code: $code) {
            access_token
            ${user_default_mutation}
        }
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation UpdatePassword($currentPassword: String!, $newPassword: String!) {
        updatePassword(currentPassword: $currentPassword, newPassword: $newPassword)
    }
`;

export const IS_USERNAME_AVAILABLE = gql`
    query IsUsernameAvailable($userName: String!) {
        isUsernameAvailable(userName: $userName) {
            message
            success
        }
    }
`;

export const IS_EMAIL_AVAILABLE = gql`
    query isEmailAvailable($email: String!) {
        isEmailAvailable(email: $email) {
            message
            success
        }
    }
`;

export const INVITATION_CODE_VERIFY = gql`
    mutation InvitationCodeVerify($code: String!) {
        invitationCodeVerify(code: $code) {
            access_token
            ${user_default_mutation}
        }
    }
`;

export const VALIDATE_TWITTER_ACCESS_TOKEN = gql`
    query ValidateTwitterAccessToken {
        validateTwitterAccessToken
    }
`;
