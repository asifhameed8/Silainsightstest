import { Button } from '@components/Button';
import WarningDelete from '@components/_Icons/WarningDelete';
import { FeedModalsContext, FeedModalsProps } from '@modals/FeedModal';
import ModalTopBar from '@modals/ModalTopBar';
import { useContext } from 'react';

const DeleteSchedule = () => {
    const context: FeedModalsProps | undefined = useContext(FeedModalsContext);
    return (
        <div className="w-full rounded-md border border-borderColor px-0 py-0 sm:w-[31.25rem]">
            <ModalTopBar className="!rounded-t-md" icon="icon-select-collection">
                Delete post
            </ModalTopBar>
            <div className="my-12 flex flex-col items-center bg-bgDark px-5 md:px-11">
                <WarningDelete />
                <p className="mt-2 text-center text-white">Delete post </p>
                <p className=" w-[90%] text-center text-[#6B7280] xs:w-full">
                    Are you sure you want to delete your schedule post? All of your data will be permanently removed from our servers forever. // This
                    action cannot be undone.
                </p>
            </div>
            <div className={`flex justify-end gap-3 border-b border-borderColor bg-gray17 px-5 py-3`}>
                <Button
                    variant="outline"
                    onClick={() => {
                        context?.setState(9);
                    }}
                >
                    Cancel
                </Button>
                <Button className="bg-14A4A text-!black border-[#F14A4A] !bg-[#F14A4A] !px-5 hover:border-[#F14A4A]">Delete</Button>
            </div>
        </div>
    );
};

export default DeleteSchedule;
