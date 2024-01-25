import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import FormCheck from '@components/Forms/FormCheck';
import setLanguage from 'next-translate/setLanguage';
import { tranxNovaGetDefaultLang } from '@utils/language';
import { AppStateStore } from 'src/store/zustand/AppState';
interface Iprops {
    setState(state: number): void;
    setPopup(popup: boolean): void;
}
const CurrencySetting = ({ setState }: Iprops) => {
    const { t } = useTranslation('common');
    const appStateStore = AppStateStore();

    const settingModal = () => {
        setState(1);
    };

    return (
        <div className="overflow-hidden rounded-md border border-lightBorder dark:border-borderColor sm:!w-[32rem]">
            <div className="flex gap-2 border-b border-lightBorder bg-lightBg py-6 dark:border-borderColor dark:bg-gray17">
                <div className="flex cursor-pointer items-center gap-3" onClick={settingModal}>
                    <i className="icon-Setting text-xs text-secondary"></i>
                    <h2 className="cursor-pointer text-sm font-semibold  text-secondary dark:hover:text-white">{t('Setting.Settings')}</h2>
                </div>
                <div className="flex items-center gap-3">
                    <i className="icon-rightarrow text-xs text-secondary"></i>
                    <h2 className=" font-display text-sm font-semibold dark:text-chinesesilver">{t('Setting.language')}</h2>
                </div>
            </div>
            <div className="py-4">
                {/* ################## English en ######################### */}
                <label
                    htmlFor={`default-en`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('en');
                        localStorage.setItem('defaultLang', 'en');
                        appStateStore.set({ activeLanguage: 'en' });
                    }}
                >
                    <FormCheck
                        id="en"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        // label={t('header.english')}
                        label="English"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'en'}
                    />
                </label>
                {/* ################## German gr ######################### */}
                <label
                    htmlFor={`default-gr`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('gr');
                        localStorage.setItem('defaultLang', 'gr');
                        appStateStore.set({ activeLanguage: 'gr' });
                    }}
                >
                    <FormCheck
                        id="gr"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        // label={t('header.german')}
                        label="German"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'gr'}
                    />
                </label>
                {/* ################## Japanese ja ######################### */}
                <label
                    htmlFor={`default-ja`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('ja');
                        localStorage.setItem('defaultLang', 'ja');
                        appStateStore.set({ activeLanguage: 'ja' });
                    }}
                >
                    <FormCheck
                        id="ja"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Japanese"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'ja'}
                    />
                </label>
                {/* ################## Ukrainian uk ######################### */}
                <label
                    htmlFor={`default-uk`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('uk');
                        localStorage.setItem('defaultLang', 'uk');
                    }}
                >
                    <FormCheck
                        id="uk"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Ukrainian"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'uk'}
                    />
                </label>
                {/* ################## Hindi hi ######################### */}
                <label
                    htmlFor={`default-hi`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('hi');
                        localStorage.setItem('defaultLang', 'hi');
                    }}
                >
                    <FormCheck
                        id="hi"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Hindi"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'hi'}
                    />
                </label>
                {/* ################## French fr ######################### */}
                <label
                    htmlFor={`default-fr`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('fr');
                        localStorage.setItem('defaultLang', 'fr');
                    }}
                >
                    <FormCheck
                        id="fr"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="French"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'fr'}
                    />
                </label>
                {/* ################## Thailand th ######################### */}
                <label
                    htmlFor={`default-th`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('th');
                        localStorage.setItem('defaultLang', 'th');
                    }}
                >
                    <FormCheck
                        id="th"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Thailand"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'th'}
                    />
                </label>
                {/* ################## Chinese zh ######################### */}
                <label
                    htmlFor={`default-zh`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('zh');
                        localStorage.setItem('defaultLang', 'zh');
                    }}
                >
                    <FormCheck
                        id="zh"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Chinese"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'zh'}
                    />
                </label>
                {/* ################## Turkish tr ######################### */}
                <label
                    htmlFor={`default-tr`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('tr');
                        localStorage.setItem('defaultLang', 'tr');
                    }}
                >
                    <FormCheck
                        id="tr"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Turkish"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'tr'}
                    />
                </label>
                {/* ################## Philippines tl ######################### */}
                <label
                    htmlFor={`default-tl`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('tl');
                        localStorage.setItem('defaultLang', 'tl');
                    }}
                >
                    <FormCheck
                        id="tl"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Philippines"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'tl'}
                    />
                </label>
                {/* ################## Urdu ur ######################### */}
                <label
                    htmlFor={`default-ur`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('ur');
                        localStorage.setItem('defaultLang', 'ur');
                    }}
                >
                    <FormCheck
                        id="ur"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Urdu"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'ur'}
                    />
                </label>
                {/* ################## Russian ru ######################### */}
                <label
                    htmlFor={`default-ru`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('ru');
                        localStorage.setItem('defaultLang', 'ru');
                    }}
                >
                    <FormCheck
                        id="ru"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Russian"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'ru'}
                    />
                </label>
                {/* ################## Italian it ######################### */}
                <label
                    htmlFor={`default-it`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('it');
                        localStorage.setItem('defaultLang', 'it');
                    }}
                >
                    <FormCheck
                        id="it"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Italian"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'it'}
                    />
                </label>
                {/* ################## Arabic ar ######################### */}
                <label
                    htmlFor={`default-ar`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('ar');
                        localStorage.setItem('defaultLang', 'ar');
                    }}
                >
                    <FormCheck
                        id="ar"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Arabic"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'ar'}
                    />
                </label>
                {/* ################## Indonesian in ######################### */}
                <label
                    htmlFor={`default-in`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('in');
                        localStorage.setItem('defaultLang', 'in');
                    }}
                >
                    <FormCheck
                        id="in"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Indonesian"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'in'}
                    />
                </label>
                {/* ################## Vietnamese vi ######################### */}
                <label
                    htmlFor={`default-vi`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('vi');
                        localStorage.setItem('defaultLang', 'vi');
                    }}
                >
                    <FormCheck
                        id="vi"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Vietnamese"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'vi'}
                    />
                </label>
                {/* ################## spain es ######################### */}
                <label
                    htmlFor={`default-es`}
                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                    onClick={async () => {
                        await setLanguage('es');
                        localStorage.setItem('defaultLang', 'es');
                    }}
                >
                    <FormCheck
                        id="es"
                        type="radio"
                        className="flex items-center gap-3 leading-0"
                        label="Spain"
                        name="language"
                        defaultChecked={tranxNovaGetDefaultLang() == 'es'}
                    />
                </label>
            </div>
        </div>
    );
};

export default CurrencySetting;
