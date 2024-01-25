import { Button } from '@components/Button';
import ImageComponent from '@components/ImageComponent';
// import FacebookIcon from '@components/_Icons/FacebookIcon';
// import InstagramIcon from '@components/_Icons/Instagram';
// import LinkedinIcon from '@components/_Icons/LinkedinIcon';
// import TwitterIcon from '@components/_Icons/TwitterIcon';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
// import DiscordIcon from '@components/_Icons/DiscordIcon';
import Navbar from '@components/Navbar';

const Custom404 = () => {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <div className="sm:hidden">
                <Navbar show={true} />
            </div>
            <div className="relative -mt-5 flex h-[calc(100vh-138px)] sm:h-[calc(100vh-68px)]">
                <div className="hidden w-1/2 sm:block xs:bg-gray17">
                    <ImageComponent
                        src="/assets/images/dotted.png"
                        alt="dotted"
                        fill
                        className="object-cover"
                        figclassname="w-full sm:h-[calc(100vh-68px)]"
                    />
                </div>
                <div className="flex w-full items-end justify-center bg-[#242F3D] p-5 sm:w-1/2 sm:justify-end sm:bg-gray17">
                    <div className="flex items-center gap-2.5">
                        <a href="https://twitter.com/meta_ruffy" target="_blank">
                            <ImageComponent
                                src="/assets/images/social/twiter.png"
                                alt="dotted"
                                height={24}
                                width={24}
                                className="object-cover"
                                figclassname=""
                            />
                            {/* <TwitterIcon href="" textColor="white" bgColor="#6B7280" /> */}
                        </a>
                        <a href="https://www.linkedin.com/company/meta-ruffy/" target="_blank">
                            <ImageComponent
                                src="/assets/images/social/link.png"
                                alt="dotted"
                                height={24}
                                width={24}
                                className="object-cover"
                                figclassname=""
                            />
                            {/* <LinkedinIcon href="" textColor="#FFC200" bgColor="#6B7280" /> */}
                        </a>
                        {/* <FacebookIcon href="" textColor="#FFC200" bgColor="#17212B" /> */}
                        <a href="https://www.instagram.com/metaruffy_international/" target="_blank">
                            <ImageComponent
                                src="/assets/images/social/fb.png"
                                alt="dotted"
                                height={24}
                                width={24}
                                className="object-cover"
                                figclassname=""
                            />
                            {/* <InstagramIcon icon textColor="#FFC200" bgColor="#6B7280" /> */}
                        </a>
                        <a href="https://www.instagram.com/metaruffy_international/" target="_blank">
                            <ImageComponent
                                src="/assets/images/social/instagram.png"
                                alt="dotted"
                                height={24}
                                width={24}
                                className="object-cover"
                                figclassname=""
                            />
                            {/* <DiscordIcon icon /> */}
                        </a>
                    </div>
                </div>
                <div className="absolute top-0 left-1/2 z-20 flex h-[90%] w-[90%] -translate-x-1/2 flex-col items-center justify-center rounded-md bg-[#0E1621] sm:top-1/2 sm:h-[458px] sm:-translate-y-1/2 sm:flex-row lg:w-[1034px]">
                    <div className="flex flex-col items-center justify-center sm:w-[40%] lg:w-1/2">
                        <div className="h-[226px] rounded-md border border-borderColor bg-transparent p-3.5 sm:h-[289px] xs:h-[180px]">
                            <div className="flex h-full items-center justify-center rounded-md bg-garylight px-7 py-3 text-center">
                                <ImageComponent
                                    src="/assets/images/404.png"
                                    alt="404-logo"
                                    fill
                                    className=""
                                    figclassname="h-[90px] w-[90px] sm:w-[130px] sm:h-[130px]"
                                />
                                {/* <p className="mt-5 text-base text-white">Minting....</p>
                                <h3 className="text-[1.75rem] font-bold leading-tight text-white">404%</h3> */}
                            </div>
                            {/* <Button className="mt-2 w-full text-[1.875rem]">Free Mint</Button> */}
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center px-3 text-center sm:mt-0 sm:w-[60%] sm:px-0 sm:pr-4 lg:w-1/2 lg:pr-24">
                        <h1 className="text-[100px] font-bold leading-none text-primary lg:text-[128px]">404</h1>
                        <h3 className="text-xl font-bold text-secondary lg:whitespace-nowrap">Why did the NFT website have a 404 error?</h3>
                        <p className="my-3 text-base  text-white">
                            Because even the missing pages are now considered rare digital art! Unfortunately, the masterpiece you&apos;re seeking
                            remains elusive.
                        </p>
                        <Link href="https://www.mintstargram.tech/">
                            <Button className="text-xs sm:text-base">Go to Feeds</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Custom404;
