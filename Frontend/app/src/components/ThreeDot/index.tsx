import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

interface LoaderProps {
    width?: number | string;
    height?: number | string;
}

const ThreeDotLoader: React.FC<LoaderProps> = ({ width, height }) => {
    return (
        <div className=" inline-block">
            <ThreeDots
                height={height ? height : '70'}
                width={width ? width : '70'}
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                color="#fff"
                visible={true}
            />
        </div>
    );
};

export default ThreeDotLoader;
