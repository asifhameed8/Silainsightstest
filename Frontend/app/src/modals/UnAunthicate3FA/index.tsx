import { Button } from '@components/Button';
import { useMutation } from '@apollo/client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SETTINGS_MUTATION } from 'src/graphql/settings';
import { setSettings } from 'src/store/reducers/auth.reducer';
import { userSelector } from 'src/store/selectors';
import { toast } from 'react-toastify';
import useTranslation from 'next-translate/useTranslation';

interface Iprops {
    setState(state: number): void;
    setPopup(popup: boolean): void;
}
const UnuAthenticat3FA = ({ setState, setPopup }: Iprops) => {
    const { t } = useTranslation('common');
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const { settings } = user;
    const settingModal = () => {
        setState(1);
    };

    const [changeSettingsMu, { loading }] = useMutation(SETTINGS_MUTATION, {
        onCompleted: () => {
            dispatch(
                setSettings({
                    threeFa: false
                })
            );
            setPopup(false);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const remove3fa = () => {
        changeSettingsMu({ variables: { data: { ...settings, threeFa: false, base32_secret: 'null' } } });
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
                    <h2 className=" font-display text-sm font-semibold dark:text-chinesesilver">{t('Setting.Disable3FA')}</h2>
                </div>
            </div>

            <p className="mx-auto px-5 py-16 text-center sm:w-[60%]">{t('Setting.RemoveThreeFactor')}</p>
            <div className={`flex items-center justify-end gap-4 border-b border-borderColor bg-lightBg px-3 py-2 dark:bg-gray17`}>
                <p
                    className="cursor-pointer text-sm text-white"
                    onClick={() => {
                        setPopup(false);
                    }}
                >
                    {t('buttons.cancel')}
                </p>
                <Button isLoading={loading} onClick={() => remove3fa()} className="w-20">
                    {t('Setting.Yes')}
                </Button>
            </div>
        </div>
    );
};

export default UnuAthenticat3FA;
