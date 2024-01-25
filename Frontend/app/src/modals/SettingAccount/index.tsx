import { Button } from '@components/Button';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

interface Iprops {
    setState(state: number): void;
    setPopup(popup: boolean): void;
}
const SettingAccount = ({ setState }: Iprops) => {
    const { t } = useTranslation('common');
    // const modal = useModal();

    const settingModal = () => {
        setState(1);
        // NiceModal.show(Setting);
        // modal.remove();
    };
    const deleteModol = () => {
        setState(6);
        // NiceModal.show(Setting);
        // modal.remove();
    };
    const passwordModol = () => {
        setState(7);
        // NiceModal.show(Setting);
        // modal.remove();
    };

    return (
        <div className="overflow-hidden rounded-md border border-lightBorder dark:border-borderColor  sm:!w-[32rem]">
            <div className="flex gap-2 border-b border-lightBorder bg-lightBg px-2 py-6 dark:border-borderColor dark:bg-gray17">
                <div className="flex cursor-pointer items-center gap-3" onClick={settingModal}>
                    <i className="icon-Setting text-xs text-secondary"></i>
                    <h2 className=" cursor-pointer font-display text-sm font-semibold  text-secondary dark:hover:text-white">
                        {t('Setting.Settings')}
                    </h2>
                </div>
                <div className="flex items-center gap-3">
                    <i className="icon-rightarrow text-xs text-secondary"></i>
                    <h2 className=" font-display text-sm font-semibold dark:text-chinesesilver">{t('Setting.AccountSettings')}</h2>
                </div>
            </div>
            <div className="">
                <div
                    className="flex cursor-pointer items-center justify-between px-4 py-2.5 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={passwordModol}
                >
                    <div className="flex items-center gap-2">
                        <i className="icon-lock text-xs text-secondary"></i>
                        <p className="text-sm text-black dark:text-white">{t('Setting.ChangePassword')}</p>
                    </div>
                    <i className="icon-rightarrow text-xs text-secondary "></i>
                </div>
                <div className="flex items-center justify-between px-4 py-2 hover:bg-lightHover dark:hover:bg-dark">
                    <div className="flex items-center gap-2">
                        <i className="icon-delaccount text-xs text-secondary"></i>
                        <p className="text-sm text-black dark:text-white">{t('Setting.DeleteAccount')}</p>
                    </div>
                    <Button color="danger" className="cursor-pointer" onClick={deleteModol}>
                        {t('Setting.Delete')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SettingAccount;
