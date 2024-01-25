import { Button } from '@components/Button';
import Input from '@components/Forms/Input';
import CalenderIcon from '@components/_Icons/CalenderIcon';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import BasicModal from '@modals/BasicModal';
import EditPost from '@modals/EditPost';
import React from 'react';

const EditTime = NiceModal.create(() => {
    const modal = useModal();
    const editModal = () => {
        modal.remove();
        NiceModal.show(EditPost);
    };

    return (
        <BasicModal
            show={modal.visible}
            hide={modal.hide}
            icon="top-[1.438rem]"
            className="!w-[32rem] rounded-lg border border-borderColor px-0 py-0"
        >
            <div className="border-b border-borderColor bg-gray17  px-4 pt-6 pb-[1.391rem]">
                <div className="flex items-center gap-3">
                    <CalenderIcon />
                    <h2 className=" font-display text-sm font-bold text-chinesesilver">Edit Time</h2>
                </div>
            </div>

            <div className="mt-3 px-3 py-3">
                <p className="text-xs text-secondary">Select a date to make your post public</p>
                <div className="mt-3 flex items-center gap-2">
                    <Input name="" type="date" className="bg-transparent text-white" placeholder="Mar 16, 2023" />
                    <Input name="" type="time" step="1800" className="bg-transparent text-white" placeholder="Mar 16, 2023" />
                </div>
            </div>
            <div className={`mt-6 flex items-center justify-end gap-3 border-b border-borderColor bg-gray17 px-5 py-3`}>
                <Button onClick={editModal}>Next</Button>
            </div>
        </BasicModal>
    );
});

export default EditTime;
