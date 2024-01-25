interface IProps {
    selectedTabIdx: number;
    // eslint-disable-next-line no-unused-vars
    setSelectedTabIdx: (toggle: number) => void;
    tabs: any;
}

const MobileResponsiveTabs = ({ selectedTabIdx, setSelectedTabIdx, tabs }: IProps) => {
    return (
        <div className="AtScrollHide relative z-40 my-3 w-full overflow-x-auto border-b  border-borderColor">
            <div className="flex w-full flex-shrink-0">
                {tabs.map((tab, i) => (
                    <a
                        key={tab.name}
                        className={`
                ${
                    i === selectedTabIdx
                        ? 'border-lightText font-bold  text-lightText dark:border-primary dark:font-semibold dark:text-primary'
                        : ' border-transparent text-lightText dark:text-secondary'
                } w-full cursor-pointer whitespace-nowrap border-b px-7 pb-3 text-center text-sm uppercase`}
                        onClick={() => setSelectedTabIdx(i)}
                    >
                        {tab.name}
                    </a>
                ))}
            </div>
        </div>
    );
};
export default MobileResponsiveTabs;
