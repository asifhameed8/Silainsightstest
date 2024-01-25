import ModalTopBar from '@modals/ModalTopBar';
import { Button } from '@components/Button';
import WarningIcon from '@components/_Icons/WarningIcon';
import { useState } from 'react';

interface IProps {
    /* Text & Content */
    titleIcon?: string;
    title: string;
    headingIcon?: string;
    heading: string;
    message: string;

    /* Show/Hide Buttons */
    btnConfirm: boolean;
    btnDenied?: boolean;
    btnCancel: boolean;

    /* Rename Buttons */
    btnConfirmText?: string;
    btnDeniedText?: string;
    btnCancelText?: string;

    /* Style */
    className?: string;
    id?: string;

    /* Actions */
    onConfirm: Function;
    onCancel: Function;
    onDenied?: Function;
}

const AlertModal = ({
    titleIcon,
    title,
    headingIcon,
    heading,
    message,
    btnConfirm,
    btnCancel,
    btnDenied,
    btnConfirmText,
    btnCancelText,
    btnDeniedText,
    className,
    id,
    onConfirm,
    onCancel,
    onDenied
}: IProps) => {
    const [loading, setLoading] = useState(false);
    //popup: boolean;
    //useEffect(() => {});

    return (
        // <BasicModal
        //     show={modal.visible}
        //     hide={modal.hide}
        //     icon="top-[1.438rem] dark:!text-chinesesilver"
        //     className="w-full overflow-hidden rounded-[0.625rem] border border-lightBorder dark:border-borderColor  sm:!w-[31.25rem]"
        // >

        <div
            className={`w-full overflow-hidden rounded-[0.625rem] border border-lightBorder dark:border-borderColor  sm:!w-[31.25rem] ${className}`}
            id={id}
        >
            <ModalTopBar icon={titleIcon ? titleIcon : 'icon-select-collection'}>{title}</ModalTopBar>
            <div className="my-10 flex flex-col items-center px-5 md:px-11">
                {/* Icons */}
                {headingIcon == 'warning' && <WarningIcon />}

                <p className="mt-3 font-semibold text-black dark:text-white">{heading}</p>
                <p className="smt-2 w-[75%] text-center text-[#6B7280] xs:w-[90%]">{message}</p>
            </div>
            <div className={`flex justify-end gap-3 border-lightBorder bg-lightBg px-5 py-3 dark:border-borderColor dark:bg-gray17`}>
                {btnCancel && (
                    <Button
                        variant="outline"
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        {btnCancelText ? btnCancelText : 'Cancel'}
                    </Button>
                )}

                {btnConfirm && (
                    <Button
                        isLoading={loading}
                        disabled={loading}
                        color="primary"
                        onClick={async () => {
                            setLoading(true);
                            const res: Function = await onConfirm();
                            setLoading(false);
                            if (res) res();
                        }}
                    >
                        {btnConfirmText ? btnConfirmText : 'Submit'}
                    </Button>
                )}

                {btnDenied && (
                    <Button
                        disabled={loading}
                        color="secondary"
                        onClick={async () => {
                            if (onDenied) onDenied();
                        }}
                    >
                        {btnDeniedText ? btnDeniedText : 'Not Sure'}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default AlertModal;
