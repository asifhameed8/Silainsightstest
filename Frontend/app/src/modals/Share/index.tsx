import { Button } from '@components/Button';
import ModalTopBar from '@modals/ModalTopBar';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
interface Iprops {
    link: string;
    setPopup(popup: boolean): void;
}

const Share = ({ link, setPopup }: Iprops) => {
    return (
        <div className="w-full overflow-hidden rounded-lg border border-borderColor py-0 sm:w-[32rem]">
            <ModalTopBar icon="icon-link" style="text-chinesesilver">
                Share link
            </ModalTopBar>
            <div className="my-10 mx-24 flex flex-col items-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary">
                    <i className="icon-link !font-extrabold text-black"> </i>
                </div>
                <h2 className="font-semibold">Copy the link below</h2>
                <div className="flex items-center justify-between rounded-md border border-borderColor p-2 px-3">
                    <span className="truncate text-sm font-semibold text-borderColor">{link}</span>
                </div>
            </div>
            <div className="flex justify-end bg-gray17 px-3 py-3.5">
                <CopyToClipboard text={link} onCopy={() => toast.success('Link is successfully copied')}>
                    <Button
                        size="lg"
                        className="py-1 text-sm"
                        onClick={() => {
                            setPopup(false);
                        }}
                    >
                        Copy
                    </Button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default Share;
