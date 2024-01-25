import Input from '@components/Forms/Input';
import ModalTopBar from '@modals/ModalTopBar';
import { Button } from '@components/Button';
import { useMutation } from '@apollo/client';
import { RESET_PASSWORD_MUTATION } from 'src/graphql/auth';
import { toast } from 'react-toastify';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

interface IProps {
    email: string;
    code: string;
    setPopup?: Function;
    setState?: Function;
    landing?: boolean;
}

const NewPassword = ({ setPopup, email, code, landing, setState }: IProps) => {
    const { t } = useTranslation('common');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [ChangePasswordMu, { loading }] = useMutation(RESET_PASSWORD_MUTATION, {
        onCompleted: (data) => {
            if (data.resetPassword && data.resetPassword.success) {
                toast.success('Password reset successfully');
                landing ? setState(1) : setPopup(false);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = () => {
        if (password !== confirmPassword) return toast.error('Confirm Password does not match');
        if (!/^(?=.*\d)(?=.*[A-Z]).{8,}$/.test(password)) return toast.warning('Please provide valid password');
        ChangePasswordMu({ variables: { email, code, password, confirmPassword } });
    };

    return (
        <div className={`${landing ? '' : 'rounded-md  border border-borderColor sm:!w-[31.25rem]'}`}>
            {landing ? '' : <ModalTopBar icon="icon-key">{t('forgot.NewPassword')}</ModalTopBar>}
            <div className={`${landing ? 'px-4' : 'px-11'} mt-5 `}>
                <h2 className={`${landing ? 'text-center text-white' : 'text-left'} text-2xl font-bold `}>{t('forgot.NewPassword')}</h2>
                <p className={`${landing ? 'text-center' : 'text-left'} mt-2.5 text-xs text-davygrey`}>{t('forgot.EnterNewPassword')}</p>
                <div className="mt-2 ">
                    <Input
                        placeholder={t('forgot.NewPassword')}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        size="sm"
                        type="password"
                        autocapitalize="off"
                        autoComplete="new-password"
                    />
                </div>
                <div className="mt-2 ">
                    <Input
                        placeholder={t('forgot.ConfirmPassword')}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        name={'password'}
                        size="sm"
                        type="password"
                        autocapitalize="off"
                        autoComplete="new-password"
                    />
                </div>

                <div className="mt-5">
                    <div className="mb-3 flex items-center gap-x-2">
                        <i
                            className={`icon-check ${password == '' ? 'text-davygrey' : password.length >= 8 ? 'text-[#1FFF86]' : 'text-red-500'}`}
                        ></i>
                        <p className="font-display text-xs font-semibold text-white">{t('signUp.validation_1')}</p>
                    </div>

                    <div className="mb-3 flex items-center gap-x-2">
                        <i
                            className={`icon-check ${
                                password == '' ? 'text-davygrey' : /(?=.*[A-Z])/.test(password) ? 'text-[#1FFF86]' : 'text-red-500'
                            }`}
                        ></i>
                        <p className="font-display text-xs font-semibold text-white">{t('signUp.validation_2')}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <i
                            className={`icon-check ${
                                password == '' ? 'text-davygrey' : /(?=.*\d)/.test(password) ? 'text-[#1FFF86]' : 'text-red-500'
                            }`}
                        ></i>
                        <p className="font-display text-xs font-semibold text-white">{t('signUp.validation_3')}</p>
                    </div>
                </div>
                <Button isLoading={loading} className="mt-6 mb-9 w-full !py-2" onClick={onSubmit}>
                    {t('EmailSent.Submit')}
                </Button>
            </div>
        </div>
    );
};

export default NewPassword;
