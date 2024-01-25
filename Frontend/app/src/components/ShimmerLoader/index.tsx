import React from 'react';

const ShimmerLoading = () => (
    <div className="flex animate-pulse items-center space-x-4">
        {Array(6)
            .fill(null)
            .map((_, index) => (
                <div className="shimmer-effect h-[197px] w-[264px] rounded-lg bg-gray-200" key={`loading-card-${index}`} />
            ))}
    </div>
);

export default ShimmerLoading;
