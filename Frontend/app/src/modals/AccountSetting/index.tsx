import { Button } from '@components/Button';
import { useMutation } from '@apollo/client';
import { DELETE_ACCOUNT_MUTATION } from 'src/graphql/auth';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/reducers/auth.reducer';
import { toast } from 'react-toastify';
import WarningIcon from '@components/_Icons/WarningIcon';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

interface Iprops {
    setState(state: number): void;
    setPopup(popup: boolean): void;
}
const DeleteAccount = ({ setPopup }: Iprops) => {
    const { t } = useTranslation('common');
    const { handleLogOut } = useDynamicContext();

    const dispatch = useDispatch();
    const apolloClient = useApolloClient();
    const router = useRouter();

    const [deleteAccountMu, { loading }] = useMutation(DELETE_ACCOUNT_MUTATION, {
        onCompleted: (data) => {
            if (data.deleteUserAccount.success) {
                handleLogOut();
                dispatch(logout());
                apolloClient.resetStore();
                router.push('/');

                // modal.remove();
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return (
        <div className="w-full overflow-hidden rounded-md border border-lightBorder dark:border-borderColor sm:!w-[32rem]">
            <div className="flex gap-2 border-b  border-lightBorder bg-lightBg px-3 py-6 dark:border-borderColor dark:bg-gray17">
                <div className="flex items-center gap-3">
                    <i className="icon-delaccount text-sm dark:text-chinesesilver"></i>
                    <h2 className=" font-display text-sm font-semibold dark:text-chinesesilver">{t('Setting.Delete')}</h2>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
                <WarningIcon />
                <div>
                    <p className="mt-3  text-center font-semibold text-black dark:text-white">{t('Setting.Delete')}</p>
                    <p className="mt-3 w-[22rem] text-center text-xs text-secondary ">{t('Setting.permanentlyRemoved')}</p>
                </div>
            </div>
            <div className={`flex justify-end gap-3 border-b  border-lightBorder bg-lightBg  px-5 py-3 dark:border-borderColor dark:bg-gray17`}>
                <Button
                    className=""
                    variant="outline"
                    onClick={() => {
                        setPopup(false);
                    }}
                >
                    {t('buttons.cancel')}
                </Button>
                <Button
                    isLoading={loading}
                    color="danger"
                    onClick={() => {
                        deleteAccountMu({});
                    }}
                >
                    {t('buttons.delete')}
                </Button>
            </div>
        </div>
    );
};

export default DeleteAccount;
