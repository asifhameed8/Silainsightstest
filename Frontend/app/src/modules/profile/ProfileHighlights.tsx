import React, { FC, useState } from 'react';
import { Address } from 'wagmi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper';
import ImageComponent from '@components/ImageComponent';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IUser } from 'src/interfaces';
import { userSelector } from 'src/store/selectors';
import { useSelector } from 'react-redux';
// import { useUserCollections } from '@reservoir0x/reservoir-kit-ui';
import { useQuery } from '@apollo/client';
import BasicModal from '@modals/BasicModal';
import SelectHighlights from '@modals/SelectHighlights';
import { HIGHLIGHTS } from 'src/graphql/highlight';
import { Token } from 'src/interfaces/token.interface';
import ShowHighlights from '@modals/SelectHighlights/ShowHighlights';
import useTranslation from 'next-translate/useTranslation';
type Highlight = {
    name: string;
    avatar: string;
    tokens: Token[];
};

type Props = {
    address: Address;
    user: IUser | null | undefined;
    isOwner: boolean;
};
const ProfileHighlights: FC<Props> = ({ address, user, isOwner }) => {
    const { t } = useTranslation('common');
    const authUser = useSelector(userSelector);
    const [editHighlight, setEditHighlight] = useState(null);

    const uId = isOwner ? authUser?._id : user?._id;
    const { data: highlightsData } = useQuery(HIGHLIGHTS, {
        variables: {
            user: uId
        },
        skip: !uId
    });
    const highlights = highlightsData?.highlights || [];
    const [popup, setPopup] = useState(false);

    const handleCreateCollection = () => {
        setPopup(true);
    };

    const removeEditState = () => {
        setEditHighlight(null);
    };

    return (
        <>
            <div className="relative mt-3">
                {isOwner ? (
                    <p className={`mb-2 px-4 text-base font-bold dark:text-white sm:px-0`}>{t('profile.highlights')}</p>
                ) : (
                    highlights?.length !== 0 && <p className={`mb-2 px-4 text-base font-bold dark:text-white sm:px-0`}>Highlights</p>
                )}
                <div className="flex items-center gap-1.5">
                    {authUser && authUser?._id == user?._id && (
                        <div
                            className={` flex w-[25%] cursor-pointer flex-col items-center justify-center lg:w-[10%]`}
                            onClick={handleCreateCollection}
                        >
                            <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-white dark:bg-dark">
                                <i className="icon-plus text-base text-black dark:text-white "></i>
                            </div>
                        </div>
                    )}
                    <div className={`w-[75%] ${highlights === 0 ? 'w-full lg:w-[90%]' : 'lg:w-[90%]'} `}>
                        <div>
                            <Swiper
                                mousewheel={true}
                                grabCursor={true}
                                modules={[Pagination, Mousewheel, Navigation]}
                                className="AtSocialSlider"
                                style={{ position: 'unset' }}
                                slidesPerView={1.5}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 3,
                                        spaceBetween: 6
                                    },
                                    640: {
                                        slidesPerView: 4,
                                        spaceBetween: 6
                                    },
                                    1024: {
                                        slidesPerView: 7,
                                        spaceBetween: 6
                                    }
                                }}
                            >
                                {highlights?.map((highlight: Highlight, index: number) => (
                                    <SwiperSlide className="" key={index}>
                                        <Slide
                                            light={highlight}
                                            isOwner={isOwner}
                                            onEdit={(highlight: Highlight) => {
                                                setEditHighlight(highlight);
                                                setPopup(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <BasicModal
                show={popup}
                hide={setPopup}
                iconClass="h-6 w-6 text-secondary"
                icon="top-3.5 right-3.5"
                onClose={() => {
                    setEditHighlight(null);
                }}
            >
                <SelectHighlights
                    setPopup={setPopup}
                    address={address}
                    editHighlight={editHighlight?.name ? editHighlight : null}
                    removeEditState={removeEditState}
                />
            </BasicModal>
        </>
    );
};

export default ProfileHighlights;

// type ISlide = {
//     collection: Collection;
// };
const Slide = ({ light, isOwner, onEdit }: { light: Highlight; isOwner: boolean; onEdit: Function }) => {
    const [popup, setPopup] = useState(false);

    return (
        <>
            <div
                className="group cursor-pointer"
                onClick={() => {
                    isOwner ? onEdit(light) : setPopup(true);
                }}
            >
                <div className="relative flex-col justify-center rounded-md bg-white pt-2 pb-2 text-center group-hover:bg-primary/10 dark:bg-transparent">
                    <div className="">
                        <ImageComponent
                            src={light.avatar || '/assets/images/placeholdercol.svg'}
                            alt="a"
                            fill
                            figclassname="flex-shrink-0 h-12 w-12 mx-auto"
                            className="rounded-full object-cover"
                        />

                        {/* <div className="absolute top-1 right-1">
                    <OpenSeaVerified openseaVerificationStatus={collection?.opensea_verified} />
                </div> */}
                        <p className="AtWordBreak mt-1.5 w-full px-2 text-center text-xs font-bold text-black dark:text-white">{light.name}</p>
                    </div>
                    {isOwner && <i className="icon-edit mt-2 block text-center text-sm text-primary"></i>}
                </div>
            </div>
            <BasicModal show={popup} hide={setPopup} icon="hidden">
                <ShowHighlights setPopup={setPopup} highlight={light} />
            </BasicModal>
        </>
    );
};
