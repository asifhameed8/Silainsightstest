import { useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import BasicModal from '@modals/BasicModal';
import ModalTopBar from '@modals/ModalTopBar';
import React, { useState } from 'react';
import PinField from 'react-pin-field';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { VERIFY_2FA_CODE_MUTATION, SEND_2FA_CODE_MUTATION } from 'src/graphql/settings';
import { login, setUser } from 'src/store/reducers/auth.reducer';
import { authSelector } from 'src/store/selectors';
import useTranslation from 'next-translate/useTranslation';

const AuthenticationFactor = NiceModal.create(() => {
    const { t } = useTranslation('common');

    const modal = useModal();
    const [pin, setPin] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);

    const [VerifyFACode, { loading }] = useMutation(VERIFY_2FA_CODE_MUTATION, {
        onCompleted: (data) => {
            if (data.verify2faCode.success) {
                dispatch(login(data.verify2faCode.token));
                dispatch(
                    setUser({
                        ...user,
                        settings: { ...user.settings, twoFa: data.verify2faCode?.status, ...(user.settings.twoFa && { threeFa: false }) }
                    })
                );
                toast.success(data.verify2faCode.message);
                modal.remove();
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const [FACodeMu] = useMutation(SEND_2FA_CODE_MUTATION, {
        onCompleted: (data) => {
            if (data.send2faCode.success) {
                toast.success(data.send2faCode.message);
                // modal.remove();
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = () => {
        VerifyFACode({ variables: { code: pin } });
    };

    return (
        <BasicModal
            show={modal.visible}
            hide={modal.hide}
            icon="top-[1.438rem]"
            className="!w-[32rem] rounded-lg border border-borderColor px-0 py-0 xs:!w-full"
        >
            <ModalTopBar style="text-chinesesilver" icon="icon-fa text-chinesesilver">
                {t('Setting.Twofactor')}
            </ModalTopBar>
            <div className="mt-5 flex flex-col items-center justify-center px-12 xs:px-6 xs1:px-4">
                <h2 className=" text-2xl font-bold xs:text-xl ">
                    {user.settings.twoFa ? t('Setting.Un_AuthenticateAccount') : t('Setting.AuthenticateAccount')}{' '}
                </h2>
                <p className="text-se mt-2.5 w-[15rem] text-center text-xs leading-5  xs:w-full">{t('Setting.ConfirmAccount')} </p>
                <div className="mx-auto  mt-3 grid grid-cols-6  gap-3  ">
                    <PinField
                        type=""
                        length={6}
                        validate={/^[0-9]$/}
                        className="  email-shadow h-10 w-10 overflow-y-auto rounded-md border  border-borderColor bg-transparent text-center !text-base  font-bold text-white outline-primary"
                        onComplete={(p) => setPin(p)}
                    />
                </div>
                <p className="mt-4 mb-4  w-[20rem] text-center text-xs leading-6  xs:w-full">
                    {t('Setting.receiveCode')}{' '}
                    <span className=" cursor-pointer font-bold text-primary" onClick={() => FACodeMu({})}>
                        {t('Setting.ResendCode')}
                    </span>
                </p>
                <Button className="mb-8 w-full !py-2" onClick={onSubmit} isLoading={loading}>
                    {t('buttons.submit')}
                </Button>
            </div>
        </BasicModal>
    );
});

export default AuthenticationFactor;
