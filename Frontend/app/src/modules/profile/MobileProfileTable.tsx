// import { Button } from '@components/Button';
import Loader from '@components/Loader';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MobileTablesTabs from './components/MobileTablesTabs';

interface Iprops {
    setShowTables(showTables: boolean): void;
}
const MobileProfileTable = ({ setShowTables }: Iprops) => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // const router = useRouter();
    const [myState, setMyState] = useState(true);

    useEffect(() => {
        // Use setTimeout to change the state to true after a delay
        const timeoutId = setTimeout(() => {
            setMyState(false);
        }); // Change state to true after a 2-second (2000 milliseconds) delay

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const router = useRouter();
    const username: string | undefined | string[] = router.query.username;
    let withoutSpec = username?.includes('@') ? username?.split('@')[1] : username;
    const { t } = useTranslation('common');

    return (
        <>
            {screenSize.width >= 640 ? (
                ''
            ) : (
                <div className="fixed inset-0 top-0 z-[100] bg-bgcolor">
                    <div className="flex items-center justify-between border-b border-borderColor p-4 ">
                        <i className="icon-left-arrow" onClick={() => setShowTables(false)}></i>
                        <p className="text-center font-bold capitalize text-white">{t('header.profile')}</p>
                        <div></div>
                        {/* <Button size="sm">Follow</Button> */}
                    </div>
                    <div className="relative">
                        {myState && (
                            <div className="absolute z-50 flex h-full w-full justify-center bg-bgcolor pt-10">
                                <Loader />
                            </div>
                        )}
                        <MobileTablesTabs username={withoutSpec} />
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileProfileTable;
