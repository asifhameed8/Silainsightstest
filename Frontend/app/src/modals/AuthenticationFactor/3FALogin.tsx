import { useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import BasicModal from '@modals/BasicModal';
import ModalTopBar from '@modals/ModalTopBar';
import React, { useState } from 'react';
import PinField from 'react-pin-field';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { VERIFY_3FA_LOGIN_MUTATION } from 'src/graphql/auth';
import { setUser, login } from 'src/store/reducers/auth.reducer';

const ThreeFALogin = NiceModal.create(() => {
    const modal = useModal();
    const [pin, setPin] = useState('');
    const dispatch = useDispatch();

    const [Verify3FALogin, { loading }] = useMutation(VERIFY_3FA_LOGIN_MUTATION, {
        onCompleted: (data) => {
            if (data.verify3faLogin) {
                dispatch(login(data.verify3faLogin.access_token));
                dispatch(setUser(data?.verify3faLogin?.user));
                modal.remove();
                // toast.success(data.verify2faCode.message);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = () => {
        Verify3FALogin({ variables: { code: pin } });
    };

    return (
        <BasicModal
            show={modal.visible}
            hide={modal.hide}
            icon="top-[1.438rem]"
            className="!w-[32rem] rounded-lg border border-borderColor px-0 py-0"
        >
            <ModalTopBar style="dark:text-chinesesilver" icon="icon-fa dark:text-chinesesilver">
                Three-factor Authentication
            </ModalTopBar>
            <div className="mt-5 flex flex-col items-center justify-center px-12">
                <h2 className=" text-2xl font-bold ">Authenticate Your Account By Authenticator (Google)</h2>
                <p className="mt-2.5 w-[15rem] text-center text-xs leading-5 text-davygrey">
                    Please confirm your account by entering the authentication code of Google Authenticator{' '}
                </p>
                <div className="mx-auto  mt-3 grid grid-cols-6  gap-3  ">
                    <PinField
                        type=""
                        length={6}
                        validate={/^[0-9]$/}
                        className="  email-shadow h-10 w-10 overflow-y-auto rounded-md border border-lightBorder  text-center !text-base font-bold text-black  outline-primary dark:border-borderColor dark:bg-transparent dark:text-white"
                        onComplete={(p) => setPin(p)}
                    />
                </div>
                <Button className="mb-8 mt-4 w-full !py-2" onClick={onSubmit} isLoading={loading}>
                    Submit
                </Button>
            </div>
        </BasicModal>
    );
});

export default ThreeFALogin;
