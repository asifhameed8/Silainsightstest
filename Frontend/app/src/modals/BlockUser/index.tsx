import ModalTopBar from '@modals/ModalTopBar';
import { Button } from '@components/Button';
import WarningDelete from '@components/_Icons/WarningDelete';
import { useMutation } from '@apollo/client';
import { BLOCK_USER } from 'src/graphql/feeds';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'src/store/reducers/auth.reducer';
import { userSelector } from 'src/store/selectors';
interface Iprops {
    userId: string;
    setState(state: number): void;
    setPopup(popup: boolean): void;
}
const BlockUser = ({ userId, setPopup }: Iprops) => {
    const owner = useSelector(userSelector);
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [BlockUserMut] = useMutation(BLOCK_USER, {
        onCompleted: (data) => {
            setLoading(false);
            setPopup(false);
            dispatch(setUser({ ...owner, blockedUsers: data?.blockUser?.blockedUsers }));
            toast.success('You blocked successfully.');
        },
        onError: (error) => {
            setLoading(false);
            setPopup(false);
            toast.error(error.message);
        }
    });
    const blockUserHandler = async () => {
        setLoading(true);
        await BlockUserMut({ variables: { userId } });
    };
    return (
        <div className="w-full rounded-md border border-borderColor sm:w-[31.25rem]">
            <ModalTopBar icon="icon-report">Block User</ModalTopBar>
            <div className="my-10 flex flex-col items-center bg-white px-5 dark:bg-bgDark md:px-11">
                <WarningDelete />
                <p className="mt-3 text-sm font-semibold text-black dark:text-white">Block User</p>
                <p className="mt-2 w-[75%] text-center text-secondary1 xs:w-[90%]">
                    Are you sure you want to block this user? You can later unblock the user from settings.
                </p>
            </div>
            <div className={`flex justify-end gap-3 border-b border-borderColor bg-lightBg px-5 py-3 dark:bg-gray17`}>
                <Button
                    variant="outline"
                    onClick={() => {
                        setPopup(false);
                    }}
                >
                    Cancel
                </Button>
                <Button isLoading={loading} color="danger" onClick={blockUserHandler}>
                    Block
                </Button>
            </div>
        </div>
    );
};

export default BlockUser;
