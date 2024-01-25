import { extractMediaType, TokenMedia, useDynamicTokens } from '@reservoir0x/reservoir-kit-ui';
import { MutatorCallback } from 'swr';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
import React from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import HideTokenButton from '@components/buttons/HideButton';
import { Address } from 'wagmi';
import ImageComponent from '@components/ImageComponent';

interface IProps {
    token: ReturnType<typeof useDynamicTokens>['data'][0];
    mutate?: MutatorCallback;
    chainName?: string;
    disable?: boolean;
    address: Address;
    hiddenIcon?: boolean;
    byPassUserRoute?: boolean;
    isOwner?: boolean;
}

const ProfileMobileCard = ({ token, mutate, chainName, isOwner: isOwnerValue, disable, address, hiddenIcon, byPassUserRoute }: IProps) => {
    const mediaType = extractMediaType(token?.token);
    const marketplaceChain = useMarketplaceChain();
    const showPreview =
        mediaType === 'other' || mediaType === 'html' || mediaType === null || mediaType === 'gif' || mediaType === 'gltf' || mediaType === 'glb';

    const isOwner = isOwnerValue !== null && isOwnerValue !== undefined ? isOwnerValue : token?.token?.owner?.toLowerCase() == address?.toLowerCase();

    return (
        <div className="relative ">
            <HideTokenButton
                contract={token?.token?.contract}
                chain={marketplaceChain?.routePrefix}
                tokenId={token?.token?.tokenId}
                mutate={mutate}
                isOwner={isOwner}
                hiddenIcon={hiddenIcon}
                byPassUserRoute={byPassUserRoute}
            />
            <Link
                passHref
                href={`/collection/${chainName || marketplaceChain?.routePrefix}/${token?.token?.contract}/${token?.token?.tokenId}`}
                className={`cursor-pointer ${disable && 'pointer-events-none'}`}
            >
                {!token?.token?.image ? (
                    <ImageComponent
                        src={'/assets/images/black-collection-bg.webp'}
                        className="rounded-t-md object-cover"
                        figclassname="aspect-w-1 aspect-h-1 round    "
                        fill
                        resizeWidth={450}
                        alt={'image'}
                    />
                ) : (
                    <div className="!aspect-w-1 !aspect-h-1 relative overflow-hidden rounded-md object-cover">
                        <TokenMedia
                            token={token?.token}
                            videoOptions={{ autoPlay: false, muted: true }}
                            style={{
                                width: '100%',
                                height: '100%',
                                // minHeight: isMounted && isSmallDevice ? 300 : 445,
                                borderRadius: 0,
                                overflow: 'hidden'
                            }}
                            staticOnly={showPreview}
                            imageResolution={'medium'}
                            className=" object-cover"
                            onRefreshToken={() => {
                                mutate?.();
                                toast.success('Request to refresh this token was accepted.');
                                // addToast?.({
                                //     title: 'Refresh token',
                                //     description: 'Request to refresh this token was accepted.'
                                // });
                            }}
                            alt={token?.token?.collection?.name}
                            // audioOptions={{
                            //     onPlay: (e) => {
                            //         onMediaPlayed?.(e);
                            //     }
                            // }}
                            // videoOptions={{
                            //     onPlay: (e) => {
                            //         onMediaPlayed?.(e);
                            //     }
                            // }}
                        />
                    </div>
                )}
            </Link>
        </div>
    );
};

export default ProfileMobileCard;
