import { Button } from '@components/Button';
import { Container } from '@components/Container';
import RangeSlider from '@components/RangeSlider';
import TurboSelection from '@components/TurboSelection/TurboSelection';
import React, { useContext, useState } from 'react';
// import NiceModal from '@ebay/nice-modal-react';
// import MakeOfferModal from '@modals/MakeOffer';
// import Sweep from '@components/buttons/Sweep';
import { CollectionContext } from '@context/CollectionContextProvider';
import { SWRResponse } from 'swr';

type Item = {
    name: string;
    key: string;
    desc: string;
    prob?: string;
    prior?: string;
};
const data1 = [
    { name: 'Standard', desc: 'Wallets Sets Gas', key: '1day' },
    { name: 'Fast', desc: '30 GWEI (2X)', prob: '95 % Probability', prior: 'Priority 0.44', key: '2day' },
    { name: 'Turbo', desc: '60 GWEI (2X)', prob: '95 % Probability', prior: 'Priority 0.97', key: '3day' }
];

type IProps = {
    handleSliderChange: (value: number) => void;
    value: number;
    totalItems: number;
    mutate: SWRResponse['mutate'];
};
// const ProfileBottomBar = ({ handleSliderChange, value, totalItems, mutate }: IProps) => {
const ProfileBottomBar = ({ handleSliderChange, value, totalItems }: IProps) => {
    const context = useContext(CollectionContext);

    if (!context) {
        throw new Error('ProfileBottomBar must be used within CollectionProvider');
    }

    //const { collection } = context;
    const [selected1, setSelected1] = useState<Item>(data1[0]);

    // const makeOfferdModal = () => {
    //     NiceModal.show(MakeOfferModal);
    // };

    const handleSelect1 = (item: Item | null) => {
        item && setSelected1(item);
    };

    // useEffect(async () => {
    //     // await validate();
    // }, []);

    return (
        <div className=" DropDownShadow fixed left-0  bottom-0 z-50 hidden w-full bg-lightBg py-1 dark:bg-gray17 lg:block">
            <Container>
                <div className="flex items-center justify-end gap-3">
                    <div className="items-center border-lightBorder pr-1 dark:border-borderColor">
                        <RangeSlider handleChange={handleSliderChange} value={value} totalItems={totalItems} RangeClass="w-[150px]" />
                    </div>
                    <p className="box-border flex h-full items-center gap-0.5 border-r-2 border-lightBorder py-2 pr-2 text-xs font-bold dark:border-borderColor">
                        NFTs <span className="box-border block w-6 text-white">{value}</span>
                    </p>
                    <p className="h-full border-r-2 border-lightBorder py-2 pr-3 text-xs font-bold dark:border-borderColor">
                        ETH <span className="text-white">7,16 </span>
                    </p>
                    <p className="mr-7 h-full border-r-2 border-lightBorder py-2 pr-3 text-xs font-bold dark:border-borderColor">
                        $ <span className="text-white">1,467.45</span>
                    </p>
                    <Button className="h-8 w-[100px] flex-shrink-0 !px-0" variant="outline">
                        View Cart (3)
                    </Button>
                    {/* <Button className="h-8 w-[100px] flex-shrink-0 !px-0" variant="outline" onClick={makeOfferdModal}>
                        Make Offer
                    </Button> */}
                    <Button className="h-8 w-[69px] flex-shrink-0">Buy</Button>
                    {/* <Sweep collectionId={collection?.contract} buttonChildren={<p>Sweep</p>} /*  mutate={mutate} */ /> */}
                    {/* <Sweep collectionId={collection.id} buttonChildren={<FontAwesomeIcon icon={faBroom} />} mutate={mutate} /> */}
                    <div className="flex w-[24.68rem] items-center justify-end gap-2">
                        <div className="group relative h-full cursor-pointer py-5">
                            <p className="flex items-center gap-2 text-xs">
                                <i className="icon-gwei text-base"></i>
                                45 GWEI
                            </p>
                            <div className="DropDownShadow absolute bottom-[100%] right-0 z-[100] hidden w-56 rounded-md  bg-white p-3  text-sm group-hover:block dark:bg-bgDark">
                                <p className="text-base text-black dark:text-white">45 GREI</p>
                                <p className="py-1 text-xs">@meta_cihan121</p>
                                <div className="flex items-center">
                                    <p className="border-r border-lightBorder pr-3 text-xs uppercase dark:border-borderColor">
                                        base fee 44 <span className="font-bold text-black dark:text-white">gwei</span>
                                    </p>
                                    <p className="pl-3 uppercase">
                                        priority <span className="font-bold text-black dark:text-white">1</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <TurboSelection Data={data1} setSelected={handleSelect1} selected={selected1} dropStyle="bottom-[107%]" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProfileBottomBar;
