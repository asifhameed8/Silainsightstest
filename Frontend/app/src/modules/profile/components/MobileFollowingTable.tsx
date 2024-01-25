import { Button } from '@components/Button';
import ImageComponent from '@components/ImageComponent';
import NameWithIcon from '@components/NameWithIcon';

const AtHolderItems = 'px-4 py-1.5 whitespace-nowrap text-lightText text-black dark:text-white text-xs';

const MobileFollowingTable = () => {
    return (
        <div className="AtScrollHide overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
                <div className="AtScrollHide relative max-h-[calc(100vh-84px)] overflow-auto rounded-b border border-t-0 border-lightBorder bg-white dark:border-borderColor dark:bg-transparent">
                    <table className="min-w-full rounded">
                        <thead className="sticky top-0 z-20 bg-lightBg dark:bg-gray17">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-lightBorder dark:divide-[#727279]">
                            {Array(102)
                                .fill('')
                                .map((u, i) => (
                                    <tr
                                        key={i + 'aa'}
                                        className={` cursor-pointer bg-transparent text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark`}
                                    >
                                        <td className={AtHolderItems}>
                                            <div className="flex items-center gap-x-2">
                                                <ImageComponent
                                                    className="rounded-full"
                                                    fill
                                                    src={'/assets/images/avatars/userProfile.png'}
                                                    figclassname="flex-shrink-0 h-5 w-5"
                                                    alt="Elf Fantasy"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-x-1">
                                                        <NameWithIcon name="Elf Fantasy" isVerified={true} />
                                                    </div>
                                                    <p className="text-xs text-secondary">@fantas_1122</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={AtHolderItems}>122 Follower</td>
                                        <td className={AtHolderItems}>
                                            <Button variant="outline">Following</Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MobileFollowingTable;
