import React from 'react';
import { useState } from 'react';
import LoginFlow from './LoginFlow';
import Header from '@components/Header/Header';
// import MinstaBenefits from './components/MinstaBenefits';
// import MinstaExplanation from './components/MinstaExplanation';
import Link from 'next/link';
import NftsView from './components/NftsView';
import MinstaBenefits from './components/MinstaBenefits';
import MinstaExplanation from './components/MinstaExplanation';
import useTranslation from 'next-translate/useTranslation';

// import MinstaBenefits from './components/MinstaBenefits';

const LandingModule = () => {
    const { t } = useTranslation('common');
    const [state, setState] = useState(1);
    const [show, setShow] = useState(true);

    return (
        <>
            <div className="min-h-screen">
                <div className="mx-auto sm:px-4  md:max-w-[1584px] lg:py-12">
                    <Header />
                    <div className="relative mt-3 flex w-full flex-col-reverse gap-3 sm:mt-2.5 sm:gap-2.5 lg:flex-row">
                        <div className="w-full flex-1">
                            <div className="space-y-3 sm:space-y-2.5">
                                <MinstaExplanation />
                                <MinstaBenefits className="sm:hidden" />
                                <NftsView />
                            </div>
                            {show && (
                                <div className="fixed  bottom-0 left-0 right-0 z-50 mt-0 flex h-[4.5rem] items-center gap-2 bg-primary p-4 sm:mt-1.5 sm:rounded-[10px] lg:hidden">
                                    <p className="text-xs font-semibold text-white">
                                        {t('Landing.reject')}{' '}
                                        <Link
                                            href="https://docs.mintstargram.tech/organization/data-protection"
                                            target="_blank"
                                            className="text-[#083864]"
                                        >
                                            {t('Landing.data_protection')}
                                        </Link>
                                        ,{' '}
                                        <Link
                                            href="https://docs.mintstargram.tech/organization/terms-of-use"
                                            target="_blank"
                                            className="text-[#083864]"
                                        >
                                            {t('Landing.terms_conditions')}
                                        </Link>
                                        , {t('Landing.and')}{' '}
                                        <Link
                                            href="https://docs.mintstargram.tech/organization/terms-of-use"
                                            target="_blank"
                                            className="text-[#083864]"
                                        >
                                            {t('Landing.privacy_policy')}
                                        </Link>
                                        .
                                    </p>
                                    <u
                                        className="cursor-pointer whitespace-nowrap text-xs text-white"
                                        onClick={() => {
                                            setShow(false);
                                        }}
                                    >
                                        {t('Landing.reject_all')}
                                    </u>
                                    <i
                                        className="icon-close absolute top-2 right-2 cursor-pointer text-[10px] text-white hover:text-light"
                                        onClick={() => {
                                            setShow(false);
                                        }}
                                    ></i>
                                </div>
                            )}
                            <div className="bg-[#17212B] p-6 sm:hidden">
                                <p className="mt-2.5 text-center text-sm  font-semibold">
                                    {t('login.year')} <Link href="/"> {t('login.Mintstargram')}</Link> {t('login.copy_rights')}
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full flex-col  space-y-2.5 sm:flex lg:w-[460px]">
                            <div className="h-full w-full flex-col justify-between  space-y-2.5  sm:flex ">
                                <MinstaBenefits className="hidden sm:block" />
                                <div className={'relative flex h-full flex-col justify-center bg-gray17 sm:rounded-[10px]'}>
                                    <LoginFlow state={state} setState={setState} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingModule;
