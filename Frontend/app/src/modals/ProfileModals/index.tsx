import BasicModal from '@modals/BasicModal';
import React from 'react';
import EditProfile from '@modals/EditProfile';

interface ILogin {
    state: number;
    popup: boolean;
    setState(state: number): void;
    setPopup(popup: boolean): void;
}

const ProfileModals = ({ state, popup, setPopup }: ILogin) => {
    return (
        <BasicModal show={popup} hide={setPopup}>
            {(() => {
                switch (state) {
                    case 1: {
                        return <EditProfile setPopup={setPopup} />;
                    }

                    default:
                        break;
                }
            })()}
        </BasicModal>
    );
};

export default ProfileModals;
