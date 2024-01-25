import React, { memo } from 'react';
import ImageComponent from '@components/ImageComponent';
import { VideoPlayer } from '@components/VideoPlayer';
type Filepath = {
    filePath: string | File;
    className?: string;
    width?: number;
    height?: number;
    type?: string;
    onClick?: Function;
    dimensions?: string;
    isFeed?: boolean;
    resizeWidth?: number;
    autoplay?: boolean;
};

const MediaComponent = ({ filePath, type, isFeed, width, height, dimensions, onClick, autoplay = false, resizeWidth = 510 }: Filepath) => {
    if (!filePath) {
        // console.warn('MediaComponent: filePath is undefined or empty');
        return null;
    }
    let path: string;

    /* This will work if the file is locally selected */
    if (typeof window !== 'undefined' && filePath instanceof File) {
        // if (filePath) {

        path = typeof window !== 'undefined' && URL.createObjectURL(filePath);
    } else {
        path = filePath;
    }
    //@ts-ignore
    const extension = path.split('.').pop().toLowerCase();
    if (type == 'audio') {
        return (
            <audio style={{ maxWidth: '90%' }} controls controlsList="nodownload">
                <source src={path} type="audio/webm"></source>
            </audio>
        );
    }
    if (extension === 'mp4' || extension === 'webm' || type === 'mp4' || extension === 'mov' || type === 'quicktime') {
        return <VideoPlayer autoplay={autoplay} src={path} className={`${dimensions ? dimensions : 'aspect-w-1 aspect-h-1 mt-2'}`} />;
    } else if (extension === 'mp3' || extension === 'wav' || extension === 'ogg') {
        return <audio src={path} className={`${dimensions ? dimensions : 'mt-2'}`} controls />;
    } else if (extension === 'gif' || type === 'gif') {
        return (
            <div
                className="media-click-handler"
                onClick={() => {
                    onClick && onClick();
                }}
            >
                <ImageComponent
                    src={path}
                    className="object-cover"
                    figclassname={`${dimensions ? dimensions : 'mt-3 aspect-w-1 aspect-h-1'} rounded-md overflow-hidden`}
                    fill
                    resizeWidth={510}
                    forceShimmer={true}
                    alt={path + 'source'}
                />
            </div>
        );
    } else {
        return (
            <div
                className="media-click-handler"
                onClick={() => {
                    onClick && onClick();
                }}
            >
                {isFeed ? (
                    <ImageComponent
                        priority
                        src={path}
                        className="object-contain"
                        figclassname={`rounded-md overflow-hidden max-h-[670px] overflow-hidden`}
                        width={width ? width : 510}
                        height={height ? height : 480}
                        // fill
                        resizeWidth={resizeWidth}
                        forceShimmer={true}
                        alt={path + 'source'}
                    />
                ) : (
                    <ImageComponent
                        priority
                        src={path}
                        className="m-auto object-cover "
                        figclassname={`${dimensions ? dimensions : 'mt-3 aspect-w-1 aspect-h-1'} rounded-md overflow-hidden`}
                        // width={width ? width : 470}
                        // height={height ? height : 500}
                        resizeWidth={resizeWidth}
                        forceShimmer={true}
                        fill
                        alt={path + 'source'}
                    />
                )}
            </div>
        );
    }
};

export default memo(MediaComponent);
