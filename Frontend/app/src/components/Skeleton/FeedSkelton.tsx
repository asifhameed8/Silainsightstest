import React from 'react';

function FeedSkelton() {
    return (
        <div className="relative animate-pulse rounded-md bg-lightBg p-3 dark:bg-dark">
            <div className="flex justify-between gap-2">
                <div className="relative flex w-full gap-2 ">
                    <div className="z-20 mt-1 h-12 w-12 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="w-full">
                        <div className="h-3 w-32 rounded-md bg-gray-200 dark:bg-gray-700 "></div>
                        <div className="my-2 h-2 w-[94%] rounded-md bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-2 w-[50%] rounded-md bg-gray-200 dark:bg-gray-700"></div>{' '}
                        <div className="mt-2 h-[20rem] rounded-md bg-gray-200 dark:bg-gray-700"></div>
                        <div className="my-3 border-t-[2px] border-lightBorder dark:border-borderColor"></div>
                        <div className="flex justify-between ">
                            <div className="h-6 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 h-2 w-5 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>
    );
}

export default FeedSkelton;
