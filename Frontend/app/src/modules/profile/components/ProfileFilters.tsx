import React from 'react';
import FormCheck from '@components/Forms/FormCheck';

const ProfileFilters = () => {
    const Status = ['only buy now', 'show all'];
    const method = ['Bought', 'Sold', 'Listed'];
    return (
        <>
            <div className="relative mt-8 mb-2 xl:mt-0  ">
                <div className=" mb-4  flex items-center justify-between border-b border-borderColor py-2">
                    <div className="flex items-center gap-x-1">
                        <i className="icon-filterby text-xs text-white"></i>
                        <p className=" text-white">Filter By</p>
                    </div>
                    <div className=" relative cursor-pointer">
                        <i className="icon-delete  text-borderColor"></i>
                        <div className={`absolute bottom-4 left-2  flex  h-[16px] w-[16px]   items-center justify-center rounded-full bg-red-600 `}>
                            <p className="mt-0.5 text-xs text-white">6</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-md  border border-borderColor ">
                <div className="relative flex w-full items-center justify-between rounded-t border-b border-borderColor bg-gray17 p-3 hover:bg-[#272730]">
                    <div className="flex items-center gap-x-1">
                        <i className="icon-nft-status text-base text-chinesesilver"></i>
                        <p className="font-display text-sm font-semibold text-chinesesilver">Status</p>
                    </div>
                    <p className="font-display text-xs text-chinesesilver">Select all</p>
                </div>
                <div className="pt-4 pb-3">
                    {Status.map((item, i) => (
                        <label className="flex cursor-pointer items-center justify-between px-3 py-1 hover:bg-dark" key={i + 'jj'}>
                            <p className="cursor-pointer capitalize text-gray01">{item}</p>
                            <FormCheck label={''} />
                        </label>
                    ))}
                </div>
            </div>

            <div className="mt-4 rounded-md border border-borderColor">
                <div className="relative flex w-full items-center justify-between rounded-t border-b border-borderColor bg-gray17 p-3">
                    <div className="flex items-center gap-x-1">
                        <i className="icon-currency text-base text-chinesesilver"></i>
                        <p className="font-display text-sm font-semibold text-chinesesilver">Method</p>
                    </div>
                    <p className="font-display text-xs text-chinesesilver">Select all</p>
                </div>
                <ul className="pt-3 pb-3">
                    {method.map((item, i) => (
                        <label className="flex cursor-pointer items-center justify-between px-3 py-1 hover:bg-dark" key={i + 'kk'}>
                            <p className="cursor-pointer capitalize text-gray01">{item}</p>
                            <FormCheck label={''} />
                        </label>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ProfileFilters;
