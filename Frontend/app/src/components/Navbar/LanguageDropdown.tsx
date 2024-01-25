import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import LanguageIcon from '@components/_Icons/LanguageIcon';
import FormCheck from '@components/Forms/FormCheck';
import setLanguage from 'next-translate/setLanguage';
import { tranxNovaGetDefaultLang } from '@utils/language';
import { AppStateStore } from 'src/store/zustand/AppState';
export default function LanguageDropdown() {
    const { t } = useTranslation('common');
    const appStateStore = AppStateStore();
    return (
        <>
            <Menu as="div" className={`relative`}>
                <Menu.Button className="group relative flex items-center justify-center rounded-md  ">
                    <LanguageIcon />
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="DropDownShadow absolute right-0 !z-[60] mt-3 w-[237px] origin-top-left overflow-hidden rounded-lg border border-lightBorder bg-lightBg dark:border-borderColor 
                  dark:bg-gray17"
                    >
                        <Menu.Item>
                            {() => (
                                <div className="flex items-center justify-between border-b border-lightBorder px-3 py-4 dark:border-borderColor">
                                    <div className="flex items-center gap-3">
                                        <LanguageIcon classNames="w-4 h-4" />
                                        <p className="font-semibold dark:text-chinesesilver">Select language</p>
                                    </div>
                                </div>
                            )}
                        </Menu.Item>
                        <div className="AtScrollHide max-h-[25rem] overflow-hidden overflow-y-scroll bg-white py-2 dark:bg-bgDark">
                            <div>
                                <div
                                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                                    onClick={async () => {
                                        await setLanguage('en');
                                        localStorage.setItem('defaultLang', 'en');
                                        appStateStore.set({ activeLanguage: 'en' });
                                    }}
                                >
                                    {/* <input type="redio" name="lang" id="a" className="w-2" />
                                    <label htmlFor="a">English</label> */}
                                    <FormCheck
                                        id="b"
                                        type="radio"
                                        className="flex items-center gap-3 leading-0"
                                        label={t('header.english')}
                                        name="language"
                                        defaultChecked={tranxNovaGetDefaultLang() == 'en'}
                                    />
                                </div>
                                <div
                                    className="flex cursor-pointer justify-between gap-3 py-2 px-3 hover:bg-lightHover dark:hover:bg-dark"
                                    onClick={async () => {
                                        await setLanguage('gr');
                                        localStorage.setItem('defaultLang', 'gr');
                                        appStateStore.set({ activeLanguage: 'gr' });
                                    }}
                                >
                                    <FormCheck
                                        id="a"
                                        type="radio"
                                        className="flex items-center gap-3 leading-0"
                                        label={t('header.german')}
                                        name="language"
                                        defaultChecked={tranxNovaGetDefaultLang() == 'gr'}
                                    />
                                    {/* <input type="redio" name="lang" id="b" />
                                    <label htmlFor="a">German</label> */}
                                </div>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}
