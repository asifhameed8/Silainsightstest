import Comments from '@components/Comments';
import ImageComponent from '@components/ImageComponent';
import LikePost from '@components/Likes/LikePost';
import Views from '@components/Views';
import { CollectionContext } from '@context/CollectionContextProvider';
import ModalTopBar from '@modals/ModalTopBar';
import { useContext } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { GET_COLLECTIONS } from 'src/graphql/collection';
import RepostDropdown from 'src/modules/home/components/CommentsThreads/RepostDropdown';
import useTranslation from 'next-translate/useTranslation';

const Description = ({ address, user }: any) => {
    const { t } = useTranslation('common');
    const context = useContext(CollectionContext);
    const { post, collection, refetchPost, contentCreator } = context;

    return (
        <div className="w-full overflow-hidden rounded-[0.625rem] border border-lightBorder dark:border-borderColor  sm:!w-[31.25rem]">
            <ModalTopBar icon="icon-info">{t('collectionDetail.collection-Description')}</ModalTopBar>
            <div className="p-4">
                <div className="mb-6 flex w-[70%] items-center gap-3 xs:w-full">
                    <ImageComponent
                        fill
                        className="rounded-full"
                        src={contentCreator?.image || collection?.image || '/assets/images/placeholdercol.svg'}
                        figclassname="relative flex-shrink-0 w-12 h-12 rounded-full"
                        alt={collection?.name}
                    />
                    <div className="w-full">
                        <div className="h2 flex w-full cursor-pointer items-center justify-between gap-1 border-b border-lightBorder pb-1 text-base font-bold text-black dark:border-borderColor dark:text-white">
                            <div className="flex items-center gap-1">
                                <span className="block max-w-[10.4rem] truncate lg:max-w-[8.4rem] xl:max-w-[10.4rem]">{collection?.name}</span>
                                <i className="icon-verified text-lg text-blue1" />
                            </div>
                            <CopyToClipboard text={address || '--'} onCopy={() => toast.success('Address copied')}>
                                <i className="icon-copy cursor-pointer text-sm text-secondary hover:text-primary"></i>
                            </CopyToClipboard>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-1">
                            <Comments
                                post={post}
                                valueClass={
                                    user && post?.commentsBy && post?.commentsBy.find((x) => x._id === user._id)
                                        ? 'text-xs dark:text-comments'
                                        : 'dark:text-secondary text-xs'
                                }
                                iconClass={
                                    user && post?.commentsBy && post?.commentsBy.find((x) => x._id === user._id)
                                        ? 'text-sm  dark:text-comments'
                                        : 'dark:text-secondary text-sm'
                                }
                            />
                            <RepostDropdown
                                // collectionId={collection?._id}
                                post={post}
                                iconClass={
                                    user && post?.repostedBy && post.repostedBy?.find((x) => x?._id === user?._id)
                                        ? 'text-repost text-sm '
                                        : ' dark:text-secondary text-sm'
                                }
                                valueClass={
                                    user && post?.repostedBy && post.repostedBy?.find((x) => x?._id === user?._id)
                                        ? 'text-repost text-xs'
                                        : 'text-xs dark:text-secondary'
                                }
                                afterRepost={() => refetchPost()}
                            />
                            <LikePost
                                post={post}
                                iconClass=" text-secondary text-sm"
                                valueClass="text-xs"
                                afterClick={() => refetchPost()}
                                refetchQueries={[GET_COLLECTIONS]}
                            />
                            <Views iconClass="text-sm text-secondary" post={post} />
                        </div>
                    </div>
                </div>
                <p className="h1 text-black dark:text-white">{t('collections.description')}</p>
                <p className="AtScrollHide  mt-1.5 text-xs">{collection?.description || contentCreator?.description}</p>
            </div>
        </div>
    );
};

export default Description;
