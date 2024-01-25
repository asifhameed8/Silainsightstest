import React from 'react';

interface IProps {
    text: string;
}

const NoItemFound = ({ text }: IProps) => {
    return (
        <div className="absolute top-1/2 left-1/2  flex -translate-y-1/2 -translate-x-1/2 flex-col items-center">
            <i className="icon-no-item text-3xl sm:text-5xl"></i>
            <p className="mt-3 text-center text-sm sm:mt-5 sm:text-base">{text}</p>
        </div>
    );
};

export default NoItemFound;
