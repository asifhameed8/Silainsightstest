import { Button } from '@components/Button';
import ImageComponent from '@components/ImageComponent';
import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
// import { getStaticSupportUser, handleChatboxesLength } from 'src/modules/chatv1/helper/zackHelper';
// import { useZackChatBoxesStore } from 'src/modules/chatv1/store/ZackChatBoxesStore';
// import { ZackSocketContext } from 'src/modules/chatv1/zack-controller/zack-socket-provider';

const UsernotFound = () => {
    const { t } = useTranslation('common');

    return (
        <div className="pt-y flex min-h-screen items-center justify-center px-4 pb-20  sm:min-h-[calc(100vh-106px)] sm:pt-2 sm:pb-2">
            <div className="flex flex-col items-center justify-center">
                <ImageComponent
                    className="object-cover"
                    figclassname="overflow-hidden flex-shrink-0"
                    width={432}
                    height={456}
                    src={'/assets/images/placeholders/notfound.png'}
                    alt="marketplace"
                />
                <h1 className="text-3xl font-bold text-white sm:text-5xl">
                    <span className="font-normal text-primary">{t('userNotFound.whoops')}! </span>
                    {t('userNotFound.user_not_found')}
                </h1>
                <p className="mt-3 max-w-[54.375rem] text-center text-lg sm:text-2xl">
                    {t('userNotFound.some_trouble')} {t('userNotFound.please_refresh')}
                </p>
                <div className="mt-4 flex w-full justify-center gap-2 sm:mt-12 xs:flex-col xs:gap-3">
                    <Button size="lg" color="secondary" className="h-12 min-w-[192px] xs:w-full">
                        {t('userNotFound.contact_support')}
                    </Button>
                    <Link href="/">
                        <Button size="lg" className="h-12 min-w-[192px] xs:w-full">
                            {t('userNotFound.go_home')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UsernotFound;
