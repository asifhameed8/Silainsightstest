import Star from '@components/_Icons/Star';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
const MinstaExplanation = () => {
    const { t } = useTranslation('common');
    return (
        <div className="relative space-y-2.5 bg-gray17 px-4 pt-14 pb-5 sm:space-y-1.5 sm:rounded-[10px] sm:py-9 sm:pr-20 sm:pl-8">
            <p className="text-sm font-semibold text-white">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
            <h3 className="my-4 text-xl font-bold text-primary">
                {' '}
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </h3>
        </div>
    );
};

export default MinstaExplanation;
