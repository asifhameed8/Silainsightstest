import React from 'react';

function CommentSkeleton() {
    return (
        <div className="relative m-3 animate-pulse rounded-md bg-lightBg p-3 dark:bg-dark">
            <div className="flex items-center justify-between">
                <div className="relative flex w-full items-center gap-2">
                    <div className="z-20 h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-48 rounded-md bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2 w-5 rounded-sm  bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="my-2.5 h-2 w-[95%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
    );
}

export default CommentSkeleton;
