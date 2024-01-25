import { gql } from '@apollo/client';

export const SEND_2FA_CODE_MUTATION = gql`
    mutation Send2faCode {
        send2faCode {
            message
            success
        }
    }
`;

export const VERIFY_2FA_CODE_MUTATION = gql`
    mutation Verify2faCode($code: String!) {
        verify2faCode(code: $code) {
            message
            status
            success
            token
        }
    }
`;

export const SETTINGS_MUTATION = gql`
    mutation ChangeSettings($data: SettingsInput!) {
        changeSettings(data: $data) {
            message
            success
        }
    }
`;
