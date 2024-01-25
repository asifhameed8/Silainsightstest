import React from 'react';

function CreatorSkelton() {
    return (
        <div className="relative flex h-full w-full items-center  justify-center bg-lightBg  py-2  dark:bg-dark  sm:block ">
            <div className="     w-full   animate-pulse p-3   ">
                <div className="mx-auto h-2 w-24 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                <div className="    mt-6 flex w-auto justify-center sm:mt-9 sm:px-8  ">
                    <div className="flex flex-col items-center gap-1 border-r-0 border-b border-borderColor px-2 sm:border-r sm:border-b-0 sm:px-2 xs1:border-b-0 xs1:border-r">
                        <div className="h-3 w-3 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className=" mt-2 h-2  w-12 rounded-sm bg-gray-200 dark:bg-gray-700 sm:w-16 "></div>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-r-0 border-b border-borderColor px-2 sm:border-r  sm:border-b-0 sm:px-2 xs1:border-b-0 xs1:border-r">
                        <div className="h-3 w-3 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-2 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 sm:w-16"></div>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-r-0 border-b border-borderColor px-2 sm:border-r  sm:border-b-0 sm:px-2 xs1:border-b-0 xs1:border-r">
                        <div className="h-3 w-3 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-2 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 sm:w-16"></div>
                    </div>
                    <div className="flex flex-col items-center gap-1  px-2">
                        <div className="h-3 w-3 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-2 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 sm:w-16"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreatorSkelton;
