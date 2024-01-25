import DiscordIcon from '@components/_Icons/DiscordIcon';
import FacebookIcon from '@components/_Icons/FacebookIcon';
import InstagramIcon from '@components/_Icons/Instagram';
import TiktokIcon from '@components/_Icons/TiktokIcon';
import TwitterIcon from '@components/_Icons/TwitterIcon';
import WebsiteIcon from '@components/_Icons/WebsiteIcon';
import YoutubeIcon from '@components/_Icons/YouTubeIcon';
import clsx from 'clsx';
import React from 'react';
import { IUser } from 'src/interfaces';
interface IProps {
    isOwner: boolean;
    owner: IUser;
    user: IUser;
}

function ProfileSocialLinks({ isOwner, owner, user }: IProps) {
    const facbookURL = isOwner ? owner?.facebook : user?.facebook,
        twitterURL = isOwner ? owner?.twitter : user?.twitter,
        instagramURL = isOwner ? owner?.instagram : user?.instagram,
        youtubeURL = isOwner ? owner?.youtube : user?.youtube,
        discordURL = isOwner ? owner?.discord : user?.discord,
        tiktokURL = isOwner ? owner?.tiktok : user?.tiktok,
        webURL = isOwner ? owner?.web : user?.web;
    return (
        <div
            className={clsx(
                facbookURL || instagramURL || twitterURL || youtubeURL || discordURL || tiktokURL || webURL ? 'mt-3' : 'mt-0',
                'flex items-center gap-x-2'
            )}
        >
            {facbookURL && <FacebookIcon classNames="h-6 w-6" href={facbookURL} />}
            {instagramURL && <InstagramIcon classNames="h-6 w-6" href={instagramURL} />}
            {twitterURL && <TwitterIcon classNames="h-6 w-6" href={twitterURL} />}
            {youtubeURL && <YoutubeIcon classNames="h-6 w-6" href={youtubeURL} />}
            {discordURL && <DiscordIcon classNames="h-6 w-6" href={discordURL} />}
            {tiktokURL && <TiktokIcon classNames="h-6 w-6" href={tiktokURL} />}
            {webURL && <WebsiteIcon classNames="h-6 w-6" href={webURL} />}
        </div>
    );
}

export default ProfileSocialLinks;
