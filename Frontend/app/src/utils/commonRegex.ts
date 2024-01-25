export const youtubeVideoRx = /youtube\.com\/watch\?v=/;
export const facebookPostRx = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/[^\/]+\/photos\/[a-zA-Z0-9_.-]+\/\d+/;
export const instagramPostRx = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([a-zA-Z0-9_-]+)/;
export const twitterPostRx = /twitter\.com\/\w+\/status\/\d+/;
export const linkedinPostRx = /linkedin\.com\/posts\/\w+\/.*/;
export const tiktokPostRx = /https:\/\/www\.tiktok\.com\/@([^/]+)\/video\/(\d+)/;
export const userNameRx = /^[-a-zA-Z0-9_.]*[a-z][-a-zA-Z0-9_.]*$/;
export const FirstLastNameRx = /^[a-zA-Z0-9]*[a-z][a-zA-Z0-9]*$/;
export const EmailRx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
