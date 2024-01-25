// import ImageComponent from '@components/ImageComponent';
import TwitterIcon from '@components/_Icons/TwitterIcon';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, setUser } from 'src/store/reducers/auth.reducer';
import NiceModal from '@ebay/nice-modal-react';
import TwoFALogin from '@modals/AuthenticationFactor/2FALogin';
import useTranslation from 'next-translate/useTranslation';

// interface IProps {
//     onSuccess: ((codeResponse: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) => void) | undefined;
//     disabled?: boolean;
// }
interface IProps {
    setState?: Function;
    // setPopup?: Function;
    // setData?: Function;
    // data?: { email: string };
    // landing?: boolean;
}
export default function TwitterLogin({ setState }: IProps) {
    const dispatch = useDispatch();
    const router = useRouter();
    const params = useSearchParams();
    const { t } = useTranslation('common');

    // ------------ TWITTER LOGIN ----------

    let isTwitterLogin = params?.get('twitter_login');
    let TwitterUser = params.get('twitter_user');
    let TwitterUserToken = params.get('user_token');
    let isTwoFa = params.get('two_fa');
    let isNotAffiliated = params.get('not_affiliated');

    useEffect(() => {
        if (isTwitterLogin == 'true') {
            if (TwitterUserToken) {
                dispatch(login(TwitterUserToken));
            }

            if (isTwoFa == 'true') {
                NiceModal.show(TwoFALogin);
            }
            // password protection
            if (isNotAffiliated == 'true') {
                TwitterUserToken && localStorage.setItem('jwt', TwitterUserToken);
                setState && setState(7);
            } else {
                TwitterUser && dispatch(setUser(JSON.parse(decodeURIComponent(TwitterUser))));
            }
        }
        return () => {
            if (isTwitterLogin == 'true') {
                const newPathObject = {
                    pathname: router.pathname,
                    query: ''
                };
                router.push(newPathObject, undefined, { shallow: true });
            }
        };
    }, [isTwitterLogin]);

    const handleTwitterLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/twitter`;
    };

    return (
        <div
            onClick={() => handleTwitterLogin()}
            className={`${'bg-bgDark'} mt-2 flex h-[38px] cursor-pointer  items-center justify-center gap-x-3 rounded-md`}
        >
            <TwitterIcon classNames="h-[14px] w-[14px]" />
            <p className={`h3 text-white `}>{t('login.twitter')} </p>
        </div>
    );
}
