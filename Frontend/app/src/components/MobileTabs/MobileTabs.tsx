import { useState, ReactNode, useEffect } from 'react';

interface Tab {
    id: number;
    title: string;
    content: ReactNode;
}

interface IProps {
    tabs: Tab[];
    overWriteTab?: any;
    overWriteTabCallback: Function;
}

const MobileTabs: React.FC<IProps> = ({ tabs, overWriteTab, overWriteTabCallback }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    useEffect(() => {
        setActiveTab(overWriteTab);
    }, [overWriteTab]);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
        overWriteTabCallback(tabId);
    };

    return (
        <div>
            <div className="relative grid w-full grid-cols-3 border-b border-lightBorder dark:border-borderColor">
                {tabs.map((tab) => (
                    <a
                        key={tab.id}
                        className={`cursor-pointer whitespace-nowrap  border-b-2 px-1 pb-2 text-center uppercase ${
                            activeTab === tab.id
                                ? 'border-lightText font-bold text-lightText dark:border-primary dark:font-semibold dark:text-primary'
                                : 'border-transparent text-lightText dark:text-secondary'
                        }`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.title}
                    </a>
                ))}
            </div>
            <div className="relative mt-3">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
        </div>
    );
};

export default MobileTabs;
