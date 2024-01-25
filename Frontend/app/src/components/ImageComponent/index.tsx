// import Image from 'next/image';
// import { FC } from 'react';

// interface IProps {
//     src: string;
//     width?: number;
//     height?: number;
//     className?: string;
//     figclassname?: string;
//     alt?: string;
//     blurEffect?: boolean;
//     priority?: boolean;
//     fill?: boolean;
// }

// const ImageComponent: FC<IProps> = ({ src, width, height, className, figclassname, alt, blurEffect, priority, fill, ...rest }: IProps) => {
//     return (
//         <>
//             <figure className={`relative leading-0 ${figclassname ? figclassname : ''}`}>
//                 <Image
//                     src={src}
//                     fill={fill}
//                     width={width}
//                     height={height}
//                     className={className}
//                     quality={100}
//                     placeholder={!blurEffect ? 'empty' : 'blur'}
//                     blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
//                     alt={alt ? alt : 'Image'}
//                     priority={priority}
//                     sizes=""
//                     {...rest}
//                 />
//             </figure>
//         </>
//     );
// };

// export default ImageComponent;

import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { cloudinaryService } from '../../services/cloudinary.service';

interface IProps {
    src: string;
    width?: number;
    height?: number;
    className?: string;
    figclassname?: string;
    alt?: string;
    layout?: any;
    objectFit?: any;
    defaultPlaceholder?: string;
    quality?: any;
    transformation?: any;
    fileType?: string;
    size?: string;
    isUserProfile?: boolean;
    user?: any;
    nftData?: any;
    blurEffect?: boolean;
    priority?: boolean;
    fill?: boolean;
    forceContainer?: boolean;
    forceShimmer?: boolean;
    resizeWidth?: Number | number;
}

const ImageComponent = ({
    src,
    width,
    height,
    className,
    figclassname,
    alt,
    objectFit,
    defaultPlaceholder = '/assets/images/placeholdercol.svg',
    quality,
    transformation,
    fileType,
    size,
    isUserProfile,
    user,
    resizeWidth = 120,
    // nftData,
    blurEffect,
    priority,
    fill,
    forceContainer,
    forceShimmer,
    ...rest
}: IProps) => {
    // const [error, setError] = useState(0);
    const error = 0;
    // const [isVideo, setIsVideo] = useState(false);
    // const [sourceImage, setSourceImage] = useState(
    //     src?.replace('ipfs://', 'https://ipfs.mintstargram.tech/ipfs/')?.replace('https://ipfs.infura.io', 'https://mintstar.infura-ipfs.io')
    // );
    // const sourceImage = src
    //     ?.replace('ipfs://', 'https://ipfs.mintstargram.tech/ipfs/')
    //     ?.replace('https://ipfs.infura.io', 'https://mintstar.infura-ipfs.io');

    const forceStyle = () => {
        let x = {};
        if (forceContainer) {
            x = {
                minWidth: width + 'px',
                minHeight: height + 'px',
                maxWidth: width + 'px',
                maxHeight: height + 'px'
            };
        }

        return x;
    };

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const shimmer = (w: any, h: any) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
            <stop stop-color="#efefef" offset="20%" />
            <stop stop-color="#b1b1b163" offset="50%" />
            <stop stop-color="#efefef" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#efefef" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>`;

    const toBase64 = (str: any) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));
    const loadingUrl = `data:image/svg+xml;base64,${toBase64(shimmer(width || 300, height || 300))}`;

    // useEffect(() => {

    //     if (error === 2) {
    //         fetch(src, { method: 'HEAD' })
    //             .then((res: any) => {
    //                 if (res.headers.get('Content-Type').startsWith('video')) {
    //                     setIsVideo(true);
    //                 }
    //             })
    //             .catch(() => {});
    //     }
    // }, [error]);

    const onError = useCallback((err) => {
        console.log(err, 'error');

        if (error <= 2) {
            // setError((prev) => prev + 1);
        }
        // do {
        //     setError((prev) => prev + 1);
        // } while (error == 2);
    }, []);

    let imageSrc = useMemo(
        () =>
            error == 1
                ? cloudinaryService.optimizeImageURL({ src: src, width: resizeWidth, height, quality, transformation, fileType, objectFit })
                : error == 2
                ? defaultPlaceholder
                : src?.includes('res.cloudinary.com') && src?.includes('upload')
                ? src.split('upload')[0] + `upload/w_${resizeWidth}` + src.split('upload')[1]
                : src?.includes('/assets/images') || src?.includes('/api/reservoir/') || src?.includes('blob')
                ? src
                : cloudinaryService.optimizeImageURL({ src: src, width: resizeWidth, height, quality, transformation, fileType, objectFit }),
        [defaultPlaceholder, error, fileType, height, objectFit, quality, src, transformation, width, resizeWidth]
    );
    if (imageSrc.startsWith('https://res.cloudinary.com')) {
        const parts = imageSrc.split('/upload/');
        imageSrc = parts[0] + '/upload/f_webp/' + parts[1];
    }

    // const imageSrc =
    //     error === 1
    //         ? src
    //         : error === 2
    //         ? defaultPlaceholder
    //         : src?.includes('res.cloudinary.com') || src?.includes('/assets/')
    //         ? src
    //         : cloudinaryService.optimizeImageURL({ src: src, width, height, quality, transformation, fileType, objectFit });

    const ImageView = useCallback(
        () => (
            <figure className={`relative ${forceShimmer ? 'image-handler' : ''} leading-0 ${figclassname ? figclassname : ''}`}>
                <Image
                    style={forceStyle()}
                    src={imageSrc || defaultPlaceholder}
                    fill={fill}
                    width={width}
                    height={height}
                    className={className}
                    quality={100}
                    placeholder={!blurEffect ? 'empty' : 'blur'}
                    blurDataURL={loadingUrl}
                    alt={alt ? alt : 'Image'}
                    priority={priority}
                    sizes={size ? size : '100vw'}
                    onError={onError}
                    onLoad={handleImageLoad}
                    {...rest}
                />
                {forceShimmer && !imageLoaded && <Image alt="image-shimmer" src={loadingUrl} width={1} height={1} className="image-shimmer" />}
            </figure>
        ),
        [alt, blurEffect, className, height, imageSrc, loadingUrl, objectFit, rest, width]
    );

    return (
        <>
            <ImageView />

            {isUserProfile && error > 1 && (
                <p className={`bg-themecolor h-full w-full text-${size}xl contain text-black1 flex items-center justify-center rounded-full`}>
                    {user?.firstName?.charAt(0)?.toUpperCase()}
                </p>
            )}
        </>
    );
};

export default React.memo(ImageComponent);
