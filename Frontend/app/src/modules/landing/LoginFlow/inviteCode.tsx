import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@components/Forms/Input';
import { Button } from '@components/Button';
import ImageComponent from '@components/ImageComponent';
import { CodeSchema } from 'src/schema/schema';
import { useMutation } from '@apollo/client';
import { INVITATION_CODE_VERIFY } from 'src/graphql/auth';
import { useDispatch } from 'react-redux';
import { login, setUser } from 'src/store/reducers/auth.reducer';
import { toast } from 'react-toastify';
import useTranslation from 'next-translate/useTranslation';

const InviteCode = () => {
    const { t } = useTranslation('common');
    const {
        register,
        handleSubmit,
        // setValue,
        watch,
        formState: { errors }
    } = useForm({ resolver: yupResolver(CodeSchema) });

    const dispatch = useDispatch();

    const [loginByCode, { loading }] = useMutation(INVITATION_CODE_VERIFY, {
        onCompleted: (data) => {
            dispatch(login(data?.invitationCodeVerify?.access_token));
            if (data?.invitationCodeVerify?.twoFa) {
                // NiceModal.show(TwoFALogin);
                // !landing && setPopup(false);
                return;
            }

            dispatch(setUser(data?.invitationCodeVerify?.user));
            // !landing && setPopup(false);
        },
        onError: (error) => {
            toast.warning(error.message);
        }
    });

    const onSubmit = ({ code }: { code: string | any }) => {
        loginByCode({ variables: { code: code || 'BODWA' } });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-4">
                <ImageComponent
                    className="rounded object-cover"
                    src="/assets/images/logo.svg"
                    alt="login-logo"
                    fill
                    figclassname="h-[54px] w-[241px] block  mx-auto"
                />
                {/* <p className="mt-7 mb-3 text-center text-base text-white">Enter the invited code to login.</p> */}
                <Input
                    placeholder={t('EmailVerification.InvitedCode')}
                    name="code"
                    // value="BODWA"
                    type="string"
                    register={register}
                    className="mt-7 mb-3"
                    size="sm"
                    error={errors.code?.message?.toString()}
                />
                {/* <small className="cursor-pointer text-primary" onClick={() => setValue('code', 'BODWA')}>
                    Don&apos;t have invitation code?
                </small> */}

                <Button isLoading={loading} className="mt-4 w-full xs:mb-4" type="submit">
                    {watch('code') ? t('login.login') : t('EmailVerification.ContinueCode')}
                </Button>
                {/* {!watch('code') && (
                    <Button isLoading={loading} className="mt-4 w-full" type="button" onClick={() => onSubmit({ code: 'BODWA' })}>
                        Don&apos;t have code?
                    </Button>
                )} */}
            </div>
        </form>
    );
};

export default InviteCode;
