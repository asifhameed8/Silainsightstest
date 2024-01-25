import { Post } from 'src/interfaces';

export const getProfileLinkWithPost = (post: Post): string => {
    const link = post?._collection
        ? `/collection/${post._collection?.chain}/${post._collection?.contract}`
        : post?.collectionData
        ? `/collection/${post.collectionData.chain}/${post.collectionData.contract}`
        : post?.tokenData
        ? `/collection/${post.tokenData?.chain}/${post.tokenData.contract}`
        : post?.token && !post?.tokenData
        ? `/collection/${post.token?.chain}/${post.token?.contract}`
        : post?.author
        ? `/@${post.author.userName}`
        : 'javascript: void(0)';

    return link;
};

export const getProfileAvatarWithPost = (post: Post): string => {
    const link = post?._collection
        ? post?._collection?.image
        : post?.collectionData
        ? post?.collectionData?.image
        : post?.tokenData && !post?.author
        ? post?.tokenData?.collectionImage || post?.tokenData?.image
        : post?.tokenData && post?.tokenData?.collectionImage
        ? post?.tokenData?.collectionImage
        : post?.collectionOfToken
        ? post?.collectionOfToken.image
        : post?.mrland
        ? post?.mrland?.logo
        : post?.author?.avatar;

    return link;
};

export const goMetaverseWithLandId = (landId: number | undefined) => `/metaverse/#${landId}`;
export const goLandWithLandId = (landId: number | undefined) => `/interactivemap/?land_id=${landId}`;
