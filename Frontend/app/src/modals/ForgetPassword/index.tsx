import Input from '@components/Forms/Input';
import ModalTopBar from '@modals/ModalTopBar';
import { Button } from '@components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotSchema } from 'src/schema/schema';
import { useMutation } from '@apollo/client';
import { FORGOT_MUTATION } from 'src/graphql/auth';
import { toast } from 'react-toastify';
import { userSelector } from 'src/store/selectors';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { SimpleEmailIcon } from '@components/_Icons/FilledIcon';
import useTranslation from 'next-translate/useTranslation';

interface IData {
    email?: string;
}
interface IProps {
    setState(state: number): void;
    setEmail: Function;
    data: { email: string };
    landing?: boolean;
    TextChanges?: any;
}

const ForgetPassword = ({ setState, setEmail, data, landing, TextChanges }: IProps) => {
    const { t } = useTranslation('common');
    const user = useSelector(userSelector);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(ForgotSchema),
        defaultValues: {
            email: user ? user.email : ''
        }
    });

    const loginModal = () => {
        landing ? setState(1) : setState(10);
    };

    // ----------------- Forgot Email -------------------

    const [SendMailMutation, { loading }] = useMutation(FORGOT_MUTATION, {
        onCompleted: (data) => {
            if (data.passwordResetEmail && data.passwordResetEmail.success) {
                landing ? setState(4) : setState(12);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = ({ email }: IData) => {
        SendMailMutation({ variables: { email } });
        setEmail(email);
    };

    return (
        <div className={`${landing ? '' : 'rounded-md border border-lightBorder dark:border-borderColor sm:!w-[31.25rem] '} overflow-hidden `}>
            {landing ? '' : <ModalTopBar icon="icon-key">{t('login.forgot_password')}</ModalTopBar>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${landing ? 'px-4' : 'px-11'} mt-4 `}>
                    <h2 className={`${landing ? 'text-center text-white' : 'text-left'} text-2xl font-bold`}>{t('forgot.title')}</h2>
                    <p className={`${landing ? 'text-center' : 'text-left'} mt-2.5 mb-5 text-xs text-secondary`}>
                        {TextChanges ? t('forgot.title') : t('forgot.registered')}
                    </p>
                    <Input
                        placeholder={t('forgot.email')}
                        name="email"
                        register={register}
                        size="sm"
                        defaultValue={data.email}
                        error={errors.email?.message?.toString()}
                        autocapitalize="none"
                        disabled={Boolean(user)}
                        AddIcon={<SimpleEmailIcon />}
                        className="h-12"
                    />
                    <Button isLoading={loading} className="mt-5 w-full !py-2" type="submit" /* onClick={showAntdModal} */>
                        {TextChanges ? t('forgot.SendEmail') : t('ForgotPassword')}
                    </Button>

                    <p className={` ${landing ? 'text-white' : 'text-black dark:text-white'} mt-4 mb-4 text-center`}>
                        {!user && (
                            <Fragment>
                                {t('forgot.remember_password')}{' '}
                                <span className=" cursor-pointer font-bold text-primary" onClick={loginModal}>
                                    {' '}
                                    {t('login.login')}
                                </span>{' '}
                            </Fragment>
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;
