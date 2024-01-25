import { Button } from '@components/Button';
import BasicModal from '@modals/BasicModal';
import VerifyNowModol from '@modals/VerifyNowModal';
import React, { useState } from 'react';

const VerifyNow = () => {
    const [state, setState] = useState(false);
    const atVerify = () => {
        setState(true);
    };
    return (
        <>
            <div className=" AtScrollHide sticky top-11 z-40 mb-5 -mt-5 flex h-12 items-center justify-center gap-x-4 bg-primary">
                <p className="text-sm text-black">Email verification required! Please verify you Email</p>
                <Button
                    size="lg"
                    className="!border-none bg-bgcolor px-9  !text-xs text-primary hover:bg-bgcolor active:bg-bgcolor active:text-primary"
                    onClick={atVerify}
                >
                    Verify Now
                </Button>
            </div>
            {state && (
                <BasicModal show={state} hide={setState}>
                    <VerifyNowModol />
                </BasicModal>
            )}
        </>
    );
};

export default VerifyNow;
