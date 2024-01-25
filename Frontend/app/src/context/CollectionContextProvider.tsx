import { useQuery } from '@apollo/client';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
import { useCollections } from '@reservoir0x/reservoir-kit-ui';
// import { useCollections } from '@reservoir0x/reservoir-kit-ui';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/collection/[chain]/[contract]';
// import { getStaticProps } from 'pages/collection/[chain]/[contract]';
import { createContext, ReactNode, useMemo } from 'react';
import { GET_CONTENT_CREATOR_COLLECTION } from 'src/graphql/collection';
import { GET_COLLECTION_POST } from 'src/graphql/feeds';
import { Collection, Post } from 'src/interfaces';
// import { Collection } from 'src/interfaces/collection.interface';

// If you have a specific type for your collection, replace `any` with that
export interface CollectionContextData {
    contentCreator: Collection;
    collection: ReturnType<typeof useCollections>['data']['0'];
    refetchCollection: Function;
    post: Post;
    refetchPost: Function;
}

// Initialize the context with an undefined value
const CollectionContext = createContext<CollectionContextData | undefined>(undefined);
type Props = InferGetStaticPropsType<typeof getStaticProps>;
interface CollectionProviderProps extends Props {
    children: ReactNode;
}

function CollectionProvider({ children, id, ssr }: CollectionProviderProps) {
    let collectionQuery: Parameters<typeof useCollections>['0'] = {
        id,
        includeTopBid: true
    };

    /* eslint-disable */
    const {
        data: collections,
        mutate,
        isLoading
    } = useCollections(collectionQuery, {
        fallbackData: [ssr.collection]
    });
    let collection = collections?.[0];
    const { routePrefix } = useMarketplaceChain();

    const { data: postData, refetch: refetchPost } = useQuery(GET_COLLECTION_POST, {
        variables: {
            contract: collection?.id?.toLowerCase() || collection?.contract?.toLowerCase(),
            chain: routePrefix
        },
        onError: (error) => {},
        skip: isLoading
    });

    const { data, refetch: refetchCollection } = useQuery(GET_CONTENT_CREATOR_COLLECTION, {
        variables: {
            address: collection?.id || collection?.contract,
            chain: routePrefix
        },
        onError: (error) => {},
        skip: isLoading
    });
    const contentCreator = data?.collection;

    // Memoize the value prop using useMemo
    const contextValue = useMemo(
        () => ({
            collection,
            contentCreator,
            refetchCollection: () => {
                refetchCollection();
                mutate();
            },
            post: postData?.postOfCollection,
            refetchPost
        }),
        [collection, mutate, postData?.postOfCollection, refetchPost, refetchCollection, contentCreator]
    );

    return <CollectionContext.Provider value={contextValue}>{children}</CollectionContext.Provider>;
}

export { CollectionContext, CollectionProvider };
