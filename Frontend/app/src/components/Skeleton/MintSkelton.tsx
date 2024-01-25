import React from 'react';

function MintSkelton() {
    return (
        <div className="relative    bg-lightBg  py-2  dark:bg-dark ">
            <div className="  flex h-full w-full animate-pulse items-center  justify-between  gap-2 p-3   xl:gap-10">
                <div className="   h-[120px] w-[120px] sm:w-[170px]  ">
                    <div className=" z-20 h-full w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="flex   w-[40%] flex-col  items-center justify-center sm:w-full">
                    <div className="h-2 w-24 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-2 h-2  w-40 rounded-sm bg-gray-200 dark:bg-gray-700 xs:w-28"></div>
                </div>
            </div>
        </div>
    );
}
export default MintSkelton;
