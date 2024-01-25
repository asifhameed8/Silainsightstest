import { gql, useQuery } from '@apollo/client';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import NoItemFound from '@components/NoItemFound';
import ProductCard from '@components/ProductCard';
import CollectionCardSkelton from '@components/Skeleton/CollectionCardSkelton';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import CollectionFilters from 'src/modules/collection.detail.module/components/CollectionFilters';
type Product = {
    title: string;
    brand: string;
    description: string;
    price: number;
};

const PRODUCTS_QUERY = gql`
    query Products($page: Int, $limit: Int) {
        products(page: $page, limit: $limit) {
            total
            page
            limit
            data {
                id
                title
                brand
                feature
                description
                price
                also_view
                also_buy
                rank
                tech1
                date
                asin
                imageURL
                imageURLHighRes
            }
        }
    }
`;

const Marketplace = () => {
    const { t } = useTranslation('common');
    const [show, setShow] = useState<boolean>(false);

    const [page, setPage] = useState(1);
    const { data, fetchMore, loading } = useQuery(PRODUCTS_QUERY, {
        variables: { page, limit: 10 },
        notifyOnNetworkStatusChange: true
    });

    const loadMore = () => {
        fetchMore({
            variables: {
                page: page + 1
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                setPage(page + 1);
                return {
                    ...fetchMoreResult,
                    products: {
                        ...fetchMoreResult.products,
                        data: [...prev.products.data, ...fetchMoreResult.products.data]
                    }
                };
            }
        });
    };
    console.log(data, 'datatatat');

    return (
        <>
            <div className="">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setShow(false);
                    }}
                >
                    <div
                        className={`sidebar-shadow DropDownShadow fixed left-0 top-0 z-[99] h-full w-[22rem] transform bg-white px-6 py-7 shadow-lg duration-300 ease-linear dark:bg-bgcolor ${
                            show === false ? '-ml-[22rem]' : 'ml-0'
                        }`}
                    >
                        <div className="absolute top-1/2 left-full z-[999] -translate-y-1/2">
                            <Button
                                onClick={() => {
                                    setShow(!show);
                                }}
                                className={`${
                                    show == true ? 'border-primary ' : '!border-transparent  '
                                }  AtFilterClip relative h-[125px] w-[120px] rounded-sm `}
                            >
                                <span className="absolute bottom-8 left-[1px] z-[2] flex h-[16px] w-[16px] -rotate-90 text-sm font-semibold text-white">
                                    {t('buttons.filters')}
                                    <i className={`icon-filterarrow mt-1 ml-2 ${show == false ? '-rotate-90' : 'rotate-90'}  text-xs`}></i>
                                </span>
                            </Button>
                        </div>
                        {show && <CollectionFilters />}
                    </div>
                </OutsideClickHandler>
            </div>

            <div className="min-h-[calc(100vh-106px)]">
                <Container>
                    <div>
                        <div className="relative grid min-h-[20rem] grid-cols-2  gap-2 sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-4 xs:pb-[4.5rem] xs2:grid-cols-1">
                            {!loading && (!data || data?.products.data?.length == 0) && <NoItemFound text={'No Item Found'} />}
                            {data?.products?.data?.map((product: Product, key: number) => (
                                <ProductCard product={product} key={key} />
                            ))}

                            {loading && (
                                <>
                                    {Array(7)
                                        .fill(null)
                                        .map((_, index) => (
                                            <div key={`loading-card-${index}`}>
                                                <CollectionCardSkelton />
                                            </div>
                                        ))}
                                </>
                            )}
                        </div>
                        {data?.products.data.length > 0 && (
                            <div className="flex w-full items-center justify-center">
                                <Button onClick={loadMore} className="">
                                    Load More
                                </Button>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Marketplace;
