import React from 'react';

function NftCardskelton() {
    return (
        <div className="relative animate-pulse rounded-md border border-borderColor bg-lightBg dark:bg-dark">
            <div className="!aspect-w-1 !aspect-h-1 z-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2 px-2">
                <div className="flex items-center justify-between border-b border-borderColor py-2">
                    <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                </div>

                <div className="mt-2 flex justify-between">
                    <div className="h-5 w-10 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-5 w-14 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="h-6 w-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-6 w-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
}
export default NftCardskelton;
