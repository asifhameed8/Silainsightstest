import { Button } from '@components/Button';
import VerifyIcon from '@components/_Icons/VerifyIcon';
import ModalTopBar from '@modals/ModalTopBar';

const VerifyNowModol = () => {
    return (
        <div className=" w-full overflow-hidden rounded-md border border-lightBorder dark:border-borderColor  sm:!w-[31.25rem]">
            <ModalTopBar icon="icon-email-verification">Email verification</ModalTopBar>
            <div className="my-10 flex flex-col items-center px-5 dark:bg-bgDark md:px-11">
                <VerifyIcon />
                <p className="mt-3 text-sm  !text-white">Confirm your email address</p>
                <p className="mt-2 w-[75%] text-center text-black dark:text-[#6B7280] xs:w-[90%]">
                    Verify your email to start receiving notifications from MintStargram and you’ll be able to create awesome NFTs.
                </p>
            </div>
            <div className={`flex justify-end gap-3  bg-lightBg px-5 py-3 dark:bg-gray17`}>
                <Button>Verify my email</Button>
            </div>
        </div>
    );
};
export default VerifyNowModol;
