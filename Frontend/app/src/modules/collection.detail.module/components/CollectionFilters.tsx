import { useAttributes } from '@reservoir0x/reservoir-kit-ui';
import React from 'react';
import { Collection } from 'src/interfaces';

type ListingStatus = {
    name: string;
    value: string;
};

type Props = {
    mobileView?: boolean;
    status: ListingStatus[];
    open: boolean;
    setOpen: (open: boolean) => void;
    attributes: ReturnType<typeof useAttributes>['data'] | undefined;
    scrollToTop: () => void;
    handleStatusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedStatus: string;
    collection: Collection;
};

const CollectionFilters = ({ attributes, mobileView, scrollToTop /* status, handleStatusChange, selectedStatus */ /* collection */ }: Props) => {
    return (
        <div className="">
            <div className={`${mobileView ? '' : 'mt-8 mb-2 xl:mt-0'} relative  `}>
                <div
                    className={`${
                        mobileView ? 'hidden' : 'flex'
                    } mb-4 items-center justify-between border-b border-lightBorder py-2 dark:border-borderColor`}
                >
                    <div className="flex items-center gap-x-1">
                        <i className="icon-filterby text-xs text-black dark:text-white"></i>
                        <p className=" text-black dark:text-white">Filter By</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionFilters;
