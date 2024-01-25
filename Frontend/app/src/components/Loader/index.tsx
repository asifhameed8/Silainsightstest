import ImageComponent from '@components/ImageComponent';
import React from 'react';
// import { ColorRing } from 'react-loader-spinner';

interface LoaderProps {
    width?: number | string;
    height?: number | string;
}

const Loader: React.FC<LoaderProps> = ({ width, height }) => {
    return (
        <>
            <div
                style={{ height: `${height ? height + 'px' : '30px'}`, width: `${width ? width + 'px' : '30px'}` }}
                className="inline-block"
                role="status"
            >
                <ImageComponent
                    figclassname={`flex-shrink-0 h-full w-full animate-spin`}
                    fill
                    src={'/assets/images/mintstargram.svg'}
                    className="object-contain"
                    alt=""
                />
            </div>
            {/* <div
                style={{ height: `${height ? height + 'px' : '36px'}`, width: `${width ? width + 'px' : '36px'}` }}
                className={`inline-block animate-spin rounded-full border-[6px] border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div> */}
            {/* <div className=" inline-block">
                <ColorRing
                    visible={true}
                    height={height ? height : '70'}
                    width={width ? width : '70'}
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#F1C94A', '#F1C94A', '#F1C94A', '#F1C94A', '#F1C94A']}
                />
            </div> */}
        </>
    );
};

export default Loader;
