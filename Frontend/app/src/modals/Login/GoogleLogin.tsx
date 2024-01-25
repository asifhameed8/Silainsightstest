import ImageComponent from '@components/ImageComponent';
import { CodeResponse, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from 'src/store/selectors';
import useTranslation from 'next-translate/useTranslation';
interface IProps {
    onSuccess: ((codeResponse: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) => void) | undefined;
    disabled?: boolean;
}
export default function GoogleLogin({ onSuccess }: IProps) {
    const [showButton, setShowButton] = useState(false);

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'uyuy'} onScriptLoadSuccess={() => setShowButton(true)}>
            <GoogleCustomButton disabled={!showButton} loginCallback={onSuccess} />
        </GoogleOAuthProvider>
    );
}
interface IGoogleButton {
    loginCallback: ((codeResponse: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) => void) | undefined;
    disabled?: boolean;
}

const GoogleCustomButton = ({ loginCallback }: IGoogleButton) => {
    const { t } = useTranslation('common');
    const user = useSelector(userSelector);
    const login = useGoogleLogin({
        onSuccess: loginCallback,
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        flow: 'auth-code'
    });
    return (
        <div
            onClick={() => login()}
            className={`${
                user ? 'border-lightBorder  hover:bg-lightHover dark:border-borderColor dark:hover:bg-dark' : 'bg-bgDark'
            } flex h-[38px] cursor-pointer items-center  justify-center gap-x-3 rounded-md`}
        >
            <ImageComponent className="rounded object-cover" src="/assets/images/google.svg" fill figclassname="h-5 w-5" alt="Google" />
            <p className={`${user ? 'text-black dark:text-white' : 'text-white'} h3 `}>{t('login.google')}</p>
        </div>
    );
};
