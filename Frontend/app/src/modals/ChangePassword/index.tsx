import { useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import Input from '@components/Forms/Input';
import InputError from '@components/Forms/InputError';
import { yupResolver } from '@hookform/resolvers/yup';
import ModalTopBar from '@modals/ModalTopBar';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { UPDATE_PASSWORD } from 'src/graphql/auth';
import { UpdatePasswordSchema } from 'src/schema/schema';
import { login } from 'src/store/reducers/auth.reducer';
import useTranslation from 'next-translate/useTranslation';

interface Iprops {
    setState(state: number): void;
}

type FormValues = { oldPassword: string; password: string; confirmPassword: string };
const ChangePassword = ({ setState }: Iprops) => {
    const { t } = useTranslation('common');

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(UpdatePasswordSchema)
    });
    const dispatch = useDispatch();

    const [updatePassword, { loading }] = useMutation(UPDATE_PASSWORD, {
        // client: apolloClient,
        onError: (error) => {
            toast.error(error.message);
            console.error('Error updating password:', error.message);
        },
        onCompleted: (data) => {
            if (data?.updatePassword) {
                dispatch(login(data.updatePassword));
                toast.success('Password updated successfully');
            } else {
                toast.error('Failed to update password');
                console.error('Failed to update password');
            }
        }
    });

    const onSubmit = async (data: FormValues) => {
        await updatePassword({
            variables: {
                currentPassword: data.oldPassword,
                newPassword: data.password
            }
        });
    };

    const forgetModol = () => {
        setState(9);
    };

    const password = getValues('password');

    const hasMinLength = password?.length >= 8;
    const hasNumber = /(?=.*\d)/.test(password);
    const hasCapitalLetter = /(?=.*[A-Z])/.test(password);
    return (
        <div className="overflow-hidden rounded-md border border-lightBorder dark:border-borderColor sm:!w-[32rem]">
            <ModalTopBar icon="icon-lock dark:!text-chinesesilver text-xs">{t('Setting.ChangePassword')}</ModalTopBar>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3 px-3">
                    <p className=" text-xs text-secondary"> {t('Setting.CreatePassword')}</p>
                    <div className="mt-2 ">
                        <label className=" text-sm font-semibold">{t('Setting.CurrentPassword')}</label>
                        <Input
                            className="mt-1 placeholder:text-secondary"
                            placeholder={' Password'}
                            size="sm"
                            type="password"
                            name={'oldPassword'}
                            register={register}
                            autocapitalize="off"
                        />
                        <InputError error={errors.oldPassword && errors.oldPassword.message?.toString()} />
                    </div>
                    <div className="mt-2 ">
                        <label className=" text-sm font-semibold">{t('Setting.NewPassword')}</label>
                        <Input
                            className="mt-1 placeholder:text-secondary"
                            register={register}
                            placeholder={'New Password'}
                            name={'password'}
                            size="sm"
                            type="password"
                            autocapitalize="off"
                        />
                        <InputError error={errors.password && errors.password.message?.toString()} />
                    </div>
                    <div className="mt-2  ">
                        <label className=" text-sm font-semibold">{t('Setting.RetypePassword')}</label>
                        <Input
                            className="mt-1  placeholder:text-secondary"
                            register={register}
                            placeholder={'Retype password'}
                            name={'confirmPassword'}
                            size="sm"
                            type="password"
                            autocapitalize="off"
                        />
                        <InputError error={errors.confirmPassword && errors.confirmPassword.message?.toString()} />
                    </div>

                    {/* Validation indicators */}
                    <div className="mt-5">
                        <div className="mb-3 flex items-center gap-x-2">
                            <i className={`icon-check ${!hasMinLength ? ' text-secondary' : 'text-[#1FFF86]'}`}></i>
                            <p
                                className={`font-display text-xs ${
                                    !hasMinLength ? ' text-secondary' : 'text-[#1FFF86]'
                                } font-semibold text-secondary`}
                            >
                                {t('signUp.validation_1')}
                            </p>
                        </div>
                        <div className="mb-3 flex items-center gap-x-2">
                            <i className={`icon-check ${!hasNumber ? 'text-secondary' : 'text-[#1FFF86]'}`}></i>
                            <p className={`font-display text-xs ${!hasNumber ? ' text-secondary' : 'text-[#1FFF86]'} font-semibold text-secondary`}>
                                {t('signUp.validation_3')}
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <i className={`icon-check ${!hasCapitalLetter ? 'text-secondary' : 'text-[#1FFF86]'}`}></i>
                            <p
                                className={`font-display text-xs ${
                                    !hasCapitalLetter ? ' text-secondary' : 'text-[#1FFF86]'
                                } font-semibold text-secondary`}
                            >
                                {t('signUp.validation_2')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-end gap-3 border-b border-borderColor bg-lightBg px-5 py-3 dark:bg-gray17`}>
                    <a className="mt-2 cursor-pointer font-display text-xs " onClick={forgetModol}>
                        {t('login.forgot_password')}
                    </a>
                    <Button className=" !text-xs" type="submit" isLoading={loading} disabled={loading}>
                        {t('Setting.SavePassword')}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
