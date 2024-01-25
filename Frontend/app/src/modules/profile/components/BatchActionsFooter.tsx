/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Dispatch, SetStateAction } from 'react';
import { UserToken } from './BatchListings';

type Props = {
    selectedItems: UserToken[];
    setSelectedItems: React.Dispatch<React.SetStateAction<never[]>>;
    setShowListingPage: Dispatch<SetStateAction<boolean>>;
};
const BatchActionsFooter = ({ selectedItems, setSelectedItems, setShowListingPage }: Props) => {
    let selectedItemCount = selectedItems.length;
    if (selectedItemCount == 0) {
        return null;
    }
    let itemSubject = selectedItemCount > 1 ? 'items' : 'item';

    // function checkDiff(a: string) {
    //     return new Set(a).size !== 1;
    // }

    //@ts-ignore
    // const isDisabled = checkDiff(selectedItems.map((item) => item.token.chain));

    return (
        <div className=" DropDownShadow fixed left-0  bottom-0 z-50 hidden w-full bg-lightBg py-3 dark:bg-gray17 lg:block">
            <Container>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-6">
                        <p className="text-white">
                            {' '}
                            {selectedItemCount} {itemSubject}
                        </p>
                        <p className="cursor-pointer font-bold text-white" onClick={() => setSelectedItems([])}>
                            Clear
                        </p>
                    </div>
                    <div className="zack-chat  !right-[120px] !bg-transparent">
                        <Button
                            onClick={() => setShowListingPage(true)}
                            //@
                            // disabled={isDisabled}
                            className="h-8 w-[100px] flex-shrink-0 !px-0"
                        >
                            List {selectedItemCount} {itemSubject}
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BatchActionsFooter;
