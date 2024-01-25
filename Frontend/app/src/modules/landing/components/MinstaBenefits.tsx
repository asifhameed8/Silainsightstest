import React from 'react';
import BenefitCard from './BenefitCard';
import useTranslation from 'next-translate/useTranslation';
interface IProps {
    className?: string;
}

const MinstaBenefits = ({ className }: IProps) => {
    const { t } = useTranslation('common');

    return (
        <div
            className={`${
                className ? className : ''
            } relative  space-y-2.5 bg-gray17 px-2 py-5 sm:space-y-1.5 sm:rounded-[10px] sm:px-2 sm:pb-5 sm:pt-2.5`}
        >
            <h2 className="text-center text-xl font-bold text-white">
                {t('Landing.extreme')} <span className="text-primary ">{t('Landing.benefits')}</span>
            </h2>
            <div className="grid grid-cols-2 flex-wrap gap-2 sm:flex xs:grid-cols-1 ">
                <BenefitCard
                    title={t('Landing.benefit_1_title')}
                    desc={t('Landing.benefit_1_dec')}
                    src="1"
                    className="sm:w-[246px]"
                    imageClass="w-[82px] h-[25px]"
                />
                <BenefitCard title={t('Landing.benefit_2_title')} desc={t('Landing.benefit_2_dec')} src="2" className="sm:w-[187px]" />
                <BenefitCard title={t('Landing.benefit_3_title')} desc={t('Landing.benefit_3_dec')} src="3" className="sm:w-[188px]" />
                <BenefitCard title={t('Landing.benefit_4_title')} desc={t('Landing.benefit_4_dec')} src="4" className="sm:w-[246px]" />
            </div>
        </div>
    );
};

export default MinstaBenefits;
