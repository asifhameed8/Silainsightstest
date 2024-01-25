import PinField from 'react-pin-field';
import ModalTopBar from '@modals/ModalTopBar';
import { Button } from '@components/Button';
import { useMutation } from '@apollo/client';
import { VERIFY_CODE_MUTATION } from 'src/graphql/auth';
import { toast } from 'react-toastify';
import { useState } from 'react';
// import NewPassword from '@modals/NewPassword';
import useTranslation from 'next-translate/useTranslation';

interface IProps {
    setState(state: number): void;
    email: string;
    setCode: Function;
    landing?: boolean;
}

const EmailSent = ({ setState, email, setCode, landing }: IProps) => {
    const { t } = useTranslation('common');
    const [pin, setPin] = useState('');

    const [VeridyCodeMutation, { loading }] = useMutation(VERIFY_CODE_MUTATION, {
        onCompleted: (data) => {
            if (data.verifyCode && data.verifyCode.success) {
                landing ? setState(5) : setState(13);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = () => {
        VeridyCodeMutation({ variables: { email, code: pin } });
        setCode(pin);
    };

    return (
        <div className={`${landing ? '' : 'rounded-md border  border-borderColor sm:!w-[31.25rem]'}`}>
            {landing ? '' : <ModalTopBar icon="icon-mail">{t('EmailSent.EmailSent1')}</ModalTopBar>}
            <div className={`${landing ? 'px-4' : 'px-[6.625rem]'} mt-5 flex flex-col items-center justify-center `}>
                <h2 className=" text-2xl font-bold text-white ">{t('EmailSent.EmailSent2')}</h2>
                <p className="mt-2.5 text-xs text-davygrey">{t('EmailSent.verificationCode')}</p>
                <div className="mx-auto  mt-5   grid grid-cols-6  gap-3  ">
                    <PinField
                        type="string"
                        length={6}
                        validate={/^[0-9]$/}
                        className=" email-shadow h-10 w-10 overflow-y-auto rounded-md border  border-borderColor bg-transparent text-center !text-base  font-bold text-white outline-primary"
                        onComplete={(p) => setPin(p)}
                    />
                </div>
                <Button isLoading={loading} disabled={pin.length < 5} className="mt-6 w-full !py-2" onClick={onSubmit}>
                    {t('EmailSent.Submit')}
                </Button>
                <p className="mt-4  mb-4 text-center text-white">
                    {t('EmailSent.receiveCode')} <span className=" cursor-pointer font-bold text-primary"> {t('EmailSent.Resend')}</span>{' '}
                </p>
            </div>
        </div>
    );
};

export default EmailSent;
