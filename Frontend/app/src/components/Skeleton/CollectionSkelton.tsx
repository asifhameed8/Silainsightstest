import React from 'react';

function CollectionSkelton() {
    return (
        <div className="relative  animate-pulse  bg-lightBg  p-3  dark:bg-dark ">
            <div className=" h-full grid-cols-2 gap-2  sm:flex Exl:grid Exl:gap-8 ">
                <div>
                    <div className="flex justify-between gap-2 sm:block sm:w-[60%] Exl:w-auto xs1:w-full xs1:flex-col">
                        <div className="flex items-center gap-3 sm:w-auto xs1:w-full">
                            <div className="h-12 w-12   rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="w-[70%]">
                                <div className="flex   cursor-pointer items-center justify-between gap-1 ">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                        <span>
                                            <div className="h-3 w-3   rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                        </span>
                                    </div>
                                    <div className="h-4 w-4   rounded-md bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-2 flex items-center justify-between border-t border-borderColor py-2">
                                    <div className="h-3 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="h-3 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="h-3 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="h-3 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden flex-col justify-end sm:mt-9 sm:flex sm:w-auto sm:flex-row sm:justify-start xs1:mt-4 xs1:w-full xs1:flex-row xs1:justify-center">
                        <div className="flex flex-col items-center gap-1 border-r-0 border-b border-borderColor px-2 sm:border-r sm:border-b-0 sm:px-5 xs1:border-b-0 xs1:border-r">
                            <div className="h-3 w-3 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="mt-2 h-2 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex flex-col items-center gap-1 px-2 sm:px-5">
                            <div className="h-3 w-3 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="mt-2 h-2 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-2 sm:mt-0 sm:w-[40%] Exl:w-[16.313rem]">
                        <div className="mt-2 h-2 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-2 w-40 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-2 w-40 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-2 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className=" mt-3  flex justify-end">
                        <div className="mt-2 h-2 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="p  mt-4  flex items-center gap-2">
                        <div className="h-6 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-6 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-6 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-6 w-8 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CollectionSkelton;
