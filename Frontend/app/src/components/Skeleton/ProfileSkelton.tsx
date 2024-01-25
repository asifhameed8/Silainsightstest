import { Container } from '@components/Container';
import React from 'react';

function ProfileSkelton() {
    return (
        <Container classNames="min-h-[calc(100vh-0px)] dark:bg-bgcolor pb-[69px] relative px-0 sm:px-auto w-full sm:overflow-auto">
            <div className={`relative mx-auto w-full px-4 pt-3 sm:top-[4.5rem] sm:h-[28.4rem] sm:w-[37.5rem] sm:px-0 xl:w-[42rem] Exl:w-[37.5rem]`}>
                <div className="rounded-md sm:h-[12.3rem] sm:bg-white sm:p-2 dark:sm:bg-gray17 2xl:pb-5 2xl:pl-3">
                    <div className="animate-pulse">
                        <div className="mb-2 flex items-center justify-between sm:hidden">
                            <div></div>
                            <div className="h-6 w-16 flex-shrink-0 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex items-center gap-x-2 sm:-mt-14 2xl:gap-x-3">
                            <div className="h-[98px] w-[98px] flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 sm:-mt-3"></div>
                            <div className="w-full">
                                <div className="hidden w-full justify-between sm:flex">
                                    <div className="">
                                        <div className="h-5 w-[10.5rem] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                        <div className="mt-2 h-4 w-[6.6rem] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="mt-2 h-8 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-6 grid w-full grid-cols-4 sm:grid-cols-6">
                                    <div className="border-r border-lightBorder py-1 px-2 dark:border-borderColor 2xl:px-4">
                                        <div className="mx-auto h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-10"></div>
                                        <div className="mx-auto mt-2 h-1 w-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="border-r border-lightBorder py-1  px-2 dark:border-borderColor 2xl:px-4">
                                        <div className="mx-auto h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-10"></div>
                                        <div className="mx-auto mt-2 h-1 w-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="border-r border-lightBorder py-1 px-1  dark:border-borderColor">
                                        <div className="mx-auto h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-10"></div>
                                        <div className="mx-auto mt-2 h-1 w-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="hidden border-r border-lightBorder py-1 px-2 dark:border-borderColor sm:block 2xl:px-4">
                                        <div className="mx-auto h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-10"></div>
                                        <div className="mx-auto mt-2 h-1 w-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="hidden border-r border-lightBorder py-1 px-2 dark:border-borderColor sm:block 2xl:px-4">
                                        <div className="mx-auto h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                        <div className="mx-auto mt-2 h-1 w-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="py-1 px-2 2xl:px-4">
                                        <div className="mx-auto h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-10"></div>
                                        <div className="mx-auto mt-2 h-1 w-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 block sm:hidden">
                            <div className="h-5 w-[10.5rem] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="mt-2 h-4 w-[6.6rem] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 h-3 w-[98%] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-3 w-[98%] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-2 h-3 w-[80%] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mt-7 flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-6 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                <div className="h-6 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                <div className="h-6 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                <div className="h-6 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                <div className="h-6 w-6 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <div className="hidden h-8 w-8 rounded-sm bg-gray-200 dark:bg-gray-700 sm:block"></div>
                        </div>
                        <div className="mt-4 grid w-full grid-cols-2 gap-4 sm:hidden">
                            <div className=" h-8 w-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className=" h-8 w-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-3 animate-pulse">
                    <div className="mt-3 h-5 w-[40%] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-2 hidden items-center gap-1.5 sm:flex">
                        <div className="flex h-[9.5rem] w-[25%] cursor-pointer flex-col items-center justify-center rounded-md border border-lightBorder dark:border-borderColor sm:w-[20%] lg:w-[17%]">
                            <div className="h-[3.25rem] w-[3.25rem] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        {Array(5)
                            .fill(' ')
                            .map((item, i) => (
                                <div
                                    key={i + item}
                                    className="flex h-[9.5rem] w-[25%] cursor-pointer flex-col items-center justify-center gap-y-1 rounded-md border border-lightBorder p-2 dark:border-borderColor sm:w-[20%] lg:w-[15.5%]"
                                >
                                    <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="mt-2 h-3 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="mt-2 h-2 w-16 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="mt-1 h-1.5 w-5 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="mt-2 h-2 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="mt-1 h-2 w-10 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                            ))}
                    </div>
                    <div className="flex gap-3 py-5 sm:hidden">
                        <div className="mt-6 h-6 w-6 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded-full border border-borderColor p-[2px]">
                                <div className="h-[3.25rem] w-[3.25rem] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-2 h-5 w-24 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-20"></div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded-full border border-borderColor p-[2px]">
                                <div className="h-[3.25rem] w-[3.25rem] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-2 h-5 w-24 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-20"></div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded-full border border-borderColor p-[2px]">
                                <div className="h-[3.25rem] w-[3.25rem] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-2 h-5 w-24 rounded-sm bg-gray-200 dark:bg-gray-700 xs1:w-20"></div>
                        </div>
                    </div>
                    <div className="mt-3 flex w-full justify-between border-b border-borderColor px-5 py-2">
                        <div className="h-5 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-5 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-5 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="h-20 w-20 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            <div className="mt-3 h-5 w-28 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ProfileSkelton;
