import React from 'react';

function LeaderboardSkelton() {
    return (
        <div className="relative animate-pulse bg-lightBg dark:bg-dark">
            <div className="h-[198px] px-4 pt-4">
                <div className="flex h-full items-center justify-center gap-4">
                    <div className="flex flex-col items-center">
                        <div className="AtBGClip h-24 w-[5.25rem] bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-4 w-[50%] bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="AtBGClip h-24 w-[5.25rem] bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-4 w-[50%] bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="AtBGClip h-24 w-[5.25rem] bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-4 w-[50%] bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
            <div className="h-[88px] p-2">
                <div className="mb-2 h-8 w-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-8 w-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>
    );
}
export default LeaderboardSkelton;
