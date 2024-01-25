import ImageComponent from '@components/ImageComponent';
import Star from '@components/_Icons/Star';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
const NftsView = () => {
    const { t } = useTranslation('common');
    return (
        <div className="relative space-y-2.5 bg-gray17 px-4 pt-14 pb-5 sm:space-y-1.5 sm:rounded-[10px] sm:py-20 sm:pr-11 sm:pl-8">
            <div className="flex flex-col justify-evenly gap-2 sm:flex-row">
                <div className="flex flex-col items-center gap-2.5">
                    <ImageComponent src="/assets/images/landing/nft1.png" width={239} height={339} alt="TEXT KEY" />
                    <h2 className="text-2xl font-semibold text-white">
                        {t('Landing.text')}
                        <span className="font-bold text-primary"> {t('Landing.key')}</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center gap-2.5">
                    <ImageComponent src="/assets/images/landing/nft2.png" width={239} height={339} alt="IMAGE KEY" />
                    <h2 className="text-2xl font-semibold text-white">
                        {t('Landing.image')} <span className="font-bold text-primary">{t('Landing.key')}</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center gap-2.5">
                    <ImageComponent src="/assets/images/landing/nft3.png" width={239} height={339} alt="VIDEO KEY" />
                    <h2 className="text-2xl font-semibold text-white">
                        {t('Landing.Video')} <span className="font-bold text-primary">{t('Landing.key')}</span>
                    </h2>
                </div>
            </div>
            <Star className="absolute left-1/2 top-1.5 -translate-x-1/2 sm:left-auto sm:top-2.5 sm:right-4 sm:-translate-x-0" />
        </div>
    );
};

export default NftsView;
