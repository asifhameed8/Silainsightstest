import { Button } from '@components/Button';
import ImageComponent from '@components/ImageComponent';
import EthIcon from '@components/_Icons/EthIcon';
import { useState } from 'react';
import { NameWithSortIcon } from '../../marketplace/components';

const AtHolderHead = 'px-3 !font-display uppercase py-3 text-xs text-center dark:text-white whitespace-nowrap text-lightText';
const AtHolderItems = 'px-3 py-[6.5px] whitespace-nowrap text-lightText text-black dark:text-white text-xs text-center';
interface Iprops {
    setTable(Table: string): void;
    mobile?: boolean;
}

const ProfileListedTable = ({ setTable, mobile }: Iprops) => {
    const [isShown, setIsShown] = useState(-1);
    return (
        <div className=" flex flex-col">
            {mobile ? (
                ''
            ) : (
                <div className="flex items-center justify-between rounded-b-none rounded-t-md border-lightBorder bg-lightBg p-3 dark:bg-gray17">
                    <p className="text-sm  font-semibold capitalize dark:text-chinesesilver">Listed</p>
                    <i
                        className="icon-close cursor-pointer text-xs dark:text-chinesesilver"
                        onClick={() => {
                            setTable('');
                        }}
                    ></i>
                </div>
            )}

            <div className="AtScrollHide overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="AtScrollHide relative h-[calc(100vh-84px)]  overflow-auto rounded-b border border-lightBorder bg-white dark:border-borderColor dark:bg-transparent xl:max-h-[23.5rem]">
                        <table className="min-w-full rounded">
                            <thead className="sticky top-0 z-20 border-b border-lightBorder bg-lightHover dark:border-borderColor dark:bg-gray17">
                                <tr>
                                    <th scope="col" className={AtHolderHead}>
                                        TIME
                                    </th>
                                    <th scope="col" className={AtHolderHead}>
                                        CHAIN
                                    </th>
                                    <th scope="col" className={AtHolderHead}>
                                        NFT
                                    </th>
                                    <th scope="col" className={AtHolderHead}>
                                        TOKEN ID
                                    </th>
                                    <th scope="col" className={AtHolderHead}>
                                        <NameWithSortIcon className=" !block !uppercase" name="PRICE" />
                                    </th>
                                    <th scope="col" className={AtHolderHead}>
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-lightBorder  dark:divide-[#727279]">
                                {Array(102)
                                    .fill('')
                                    ?.map((_, i: number) => (
                                        <tr
                                            key={i + 'aa'}
                                            onMouseEnter={() => setIsShown(i)}
                                            onMouseLeave={() => setIsShown(-1)}
                                            className={`cursor-pointer bg-transparent text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark`}
                                        >
                                            <td className={AtHolderItems}>1 sec</td>
                                            <td className={AtHolderItems}>
                                                <div className="flex justify-center">
                                                    <EthIcon classNames="h-5 w-5" />
                                                </div>
                                            </td>
                                            <td className={AtHolderItems}>
                                                <div className="flex justify-center">
                                                    <ImageComponent
                                                        src="/assets/images/nfts/1.png"
                                                        className="object-cover"
                                                        figclassname="overflow-hidden flex-shrink-0 h-7 w-7"
                                                        fill
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </td>
                                            <td className={AtHolderItems}>#4031</td>
                                            <td className={AtHolderItems}>61.2</td>
                                            <td className={AtHolderItems}>
                                                {mobile ? (
                                                    <Button size="sm"> Buy</Button>
                                                ) : (
                                                    <Button size="sm" className={` ${isShown === i ? '' : 'opacity-0'}`}>
                                                        Buy
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileListedTable;
