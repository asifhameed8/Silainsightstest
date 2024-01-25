import { useMutation } from '@apollo/client';
import SwitchButton from '@components/SwitchButton';
import Authentication from '@components/_Icons/Authentication';
import NiceModal from '@ebay/nice-modal-react';
import AuthenticationFactor from '@modals/AuthenticationFactor';
import ModalTopBar from '@modals/ModalTopBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { SEND_2FA_CODE_MUTATION } from 'src/graphql/settings';
import { authSelector } from 'src/store/selectors';
import useTranslation from 'next-translate/useTranslation';
// import LanguageIcon from '@components/_Icons/LanguageIcon';

interface Iprops {
    setState(state: number): void;
    setPopup(popup: boolean): void;
}
const Setting = ({ setState }: Iprops) => {
    const { t } = useTranslation('common');
    const { user } = useSelector(authSelector);

    const [FACodeMu, { loading }] = useMutation(SEND_2FA_CODE_MUTATION, {
        onCompleted: (data) => {
            if (data.send2faCode.success) {
                toast.success(data.send2faCode.message);
                NiceModal.show(AuthenticationFactor);
                // modal.remove();
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const autenticationModal = () => {
        FACodeMu({});
    };
    const notifictionModal = () => {
        setState(2);
        // NiceModal.show(NotificationSetting);
        // modal.remove();
    };

    const messagerPrivacy = () => {
        setState(15);
        // NiceModal.show(MessagePrivacy);
        // modal.remove();
    };
    const walletModal = () => {
        setState(4);
        // NiceModal.show(WalletSetting);
        // modal.remove();
    };

    const AccountSetting = () => {
        setState(5);
        // NiceModal.show(DeleteAccount);
        // modal.remove();
    };
    const Languagechange = () => {
        setState(18);
        // NiceModal.show(DeleteAccount);
        // modal.remove();
    };

    const currencyChange = () => {
        setState(19);
        // NiceModal.show(DeleteAccount);
        // modal.remove();
    };

    return (
        <div className="overflow-hidden rounded-md border dark:border-borderColor sm:!w-[32rem]">
            <ModalTopBar style="dark:text-chinesesilver" icon="icon-settings dark:text-chinesesilver">
                {t('Setting.Settings')}
            </ModalTopBar>
            {user && (
                <div className="">
                    <div
                        className="flex cursor-pointer items-center justify-between p-2.5 hover:bg-lightHover dark:hover:bg-dark "
                        onClick={AccountSetting}
                    >
                        <div className="flex items-center gap-x-2.5">
                            <i className="icon-accsetting text-sm text-secondary"></i>
                            <p className="text-sm font-semibold text-black dark:text-white">{t('Setting.AccountSettings')}</p>
                        </div>
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                    </div>
                    <div
                        className="flex cursor-pointer items-center justify-between p-2.5 hover:bg-lightHover dark:hover:bg-dark "
                        onClick={notifictionModal}
                    >
                        <div className="flex items-center gap-x-2.5">
                            <i className="icon-notification  text-sm text-secondary"></i>
                            <p className="text-sm font-semibold text-black dark:text-white">{t('Setting.NotificationSettings')}</p>
                        </div>
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                    </div>
                    <div
                        className="flex cursor-pointer items-center justify-between p-2.5 hover:bg-lightHover dark:hover:bg-dark "
                        onClick={messagerPrivacy}
                    >
                        <div className="flex items-center gap-x-2.5">
                            <i className="icon-msgprivacy text-sm text-secondary"></i>
                            <p className="text-sm font-semibold text-black dark:text-white">{t('Setting.MessengerPrivacy')}</p>
                        </div>
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                    </div>
                    <div
                        className="flex cursor-pointer items-center  justify-between p-2.5 hover:bg-lightHover dark:hover:bg-dark "
                        onClick={walletModal}
                    >
                        <div className="flex items-center gap-x-2.5">
                            <i className="icon-wallet text-sm text-secondary"></i>
                            <p className="text-sm font-semibold text-black dark:text-white">{t('Setting.WalletSettings')}</p>
                        </div>
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                    </div>
                    <div
                        className="flex cursor-pointer items-center justify-between p-2.5 hover:bg-lightHover dark:hover:bg-dark "
                        onClick={Languagechange}
                    >
                        <div className="flex items-center gap-x-2.5">
                            <i className="icon-language text-sm text-secondary"></i>
                            {/* <LanguageIcon classNames="w-4 h-4" /> */}
                            <p className="text-sm font-semibold text-black dark:text-white">{t('Setting.language')}</p>
                        </div>
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                    </div>
                    <div
                        className="flex cursor-pointer items-center justify-between p-2.5 hover:bg-lightHover dark:hover:bg-dark "
                        onClick={currencyChange}
                    >
                        <div className="flex items-center gap-x-2.5">
                            <i className="icon-currency text-sm text-secondary"></i>
                            <p className="text-sm font-semibold text-black dark:text-white">{t('Setting.currency')}</p>
                        </div>
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                    </div>
                    <div className="flex items-center justify-between p-2.5">
                        <div className="flex gap-x-3 ">
                            <Authentication classNames="mt-1" />
                            <div className="flex-column flex ">
                                <div className="mb-4">
                                    <p className="mt-1.5 text-sm font-semibold text-black dark:text-white">{t('Setting.Authentication')}</p>
                                    <p className="mt-1 w-[90%] text-xs leading-5">{t('Setting.UnrecognizedDevice')}</p>
                                </div>
                                <div className="mb-2 flex justify-between gap-x-3">
                                    <div className="w-full">
                                        <p className="mt-1 w-[90%] text-xs leading-5">{t('Setting.E-Mail')}</p>
                                    </div>
                                    <div className=" cursor-pointer" onClick={autenticationModal}>
                                        <SwitchButton enable={user?.settings?.twoFa} loading={loading} />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-x-3">
                                    <div className="w-full">
                                        <p className="mt-1 w-[90%] text-xs leading-5">{t('Setting.AuthenticatorApp')}</p>
                                    </div>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => {
                                            if (user?.settings?.threeFa) {
                                                setState(17);
                                            } else {
                                                if (user?.settings?.twoFa) {
                                                    setState(16);
                                                } else {
                                                    toast.warning('You need to add Email Authentication first');
                                                }
                                            }
                                        }}
                                    >
                                        <SwitchButton enable={user?.settings?.threeFa || false} disabled={!user?.settings?.twoFa} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Setting;
