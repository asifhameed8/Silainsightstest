import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { userSelector } from 'src/store/selectors';

interface IProps {
    selectedTabIdx: number;
    // eslint-disable-next-line no-unused-vars
    setSelectedTabIdx: (toggle: number) => void;
}

const ProfileTabs = ({ selectedTabIdx, setSelectedTabIdx }: IProps) => {
    const router = useRouter();
    const { username } = router.query;

    const user = useSelector(userSelector);

    const tabs = [
        { name: 'NFTs', current: true },
        { name: 'Feed', current: false }
    ];

    if (user && `@${user?.userName}` == username) {
        tabs.push({ name: 'All', current: false });
    }
    return (
        <div>
            <div className="  relative z-40 overflow-x-auto">
                <nav className="flex items-center px-1 lg:w-full" aria-label="Tabs">
                    <div className={`grid w-full grid-cols-${tabs?.length} border-b border-lightBorder dark:border-borderColor`}>
                        {tabs.map((tab, i) => (
                            <a
                                key={tab.name}
                                className={`
                ${
                    i === selectedTabIdx
                        ? 'border-lightText !font-bold text-lightText dark:border-primary dark:font-semibold dark:text-primary'
                        : 'border-transparent text-lightText dark:text-secondary'
                }
                cursor-pointer whitespace-nowrap border-b-2  px-1 pb-2 text-center uppercase`}
                                onClick={() => setSelectedTabIdx(i)}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default ProfileTabs;
