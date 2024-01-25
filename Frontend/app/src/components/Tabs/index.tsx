import React, { useState } from 'react';

const tabs = [
    { name: 'Gamerse', current: true },
    { name: 'Trending', current: false },
    { name: 'Avatar', current: false }
];

const Tabs = () => {
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);

    return (
        <div>
            <div className="overflow-x-auto border-b border-gray-200 pb-4">
                <nav className="flex items-center space-x-4 lg:w-full" aria-label="Tabs">
                    {tabs.map((tab, i) => (
                        <a
                            key={tab.name}
                            className={`
                ${i === selectedTabIdx ? 'rounded-full bg-black py-3 text-white focus:outline-none ' : 'border-transparent'}
                cursor-pointer  whitespace-nowrap px-10 text-base sm:px-14`}
                            onClick={() => setSelectedTabIdx(i)}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
            {selectedTabIdx === 0 && (
                <div className="mt-12">
                    <h3>Show Data</h3>
                </div>
            )}
            {selectedTabIdx === 1 && (
                <div className="mt-12">
                    <h3>Please Add Data</h3>
                </div>
            )}
            {selectedTabIdx === 2 && (
                <div className="mt-12">
                    <h3>No Data Found</h3>
                </div>
            )}
        </div>
    );
};
export default Tabs;
