import React from 'react';

function CollectionCardSkelton() {
    return (
        <div className="relative animate-pulse rounded-md border border-borderColor bg-lightBg dark:bg-dark">
            <div className="round aspect-w-4 aspect-h-3 z-20 rounded-t-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="mx-2 flex items-center justify-between border-b border-borderColor py-2">
                <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="px-2 pb-16">
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <div className="h-5 w-10 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-5 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div>
                        <div className="h-5 w-10 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-5 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CollectionCardSkelton;
