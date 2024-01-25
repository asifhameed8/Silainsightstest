import jwt, { JwtPayload } from 'jsonwebtoken';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { dummyProfile } from 'src/data/BarChartData';
import { Feed, IUser, Post } from 'src/interfaces';

export const slicedAddress = (address: string, nftHover?: boolean) => {
    if (!address) {
        return '';
    }
    if (nftHover) {
        return address?.slice(address?.length - 10, address?.length);
    } else {
        return address?.slice(address?.length - 4, address?.length);
    }
    // return address?.slice(0, 8) + '...' + address?.slice(address?.length - 4, address?.length);
};

export const isTokenExpired = (token: string) => {
    try {
        const decoded: JwtPayload | null = jwt.decode(token) as JwtPayload | null;
        if (!decoded || !('exp' in decoded)) {
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded?.exp && decoded?.exp < currentTime) {
            return true;
        }

        return false;
    } catch (error) {
        return true;
    }
};

export function formatCount(count: number) {
    if (!count) {
        return 0;
    }
    if (count >= 1000000000) {
        return Number((count / 1000000000).toFixed(1)).toLocaleString() + 'B';
    } else if (count >= 1000000) {
        return Number((count / 1000000).toFixed(1)).toLocaleString() + 'M';
    } else if (count >= 1000) {
        return Number((count / 1000).toFixed(1)).toLocaleString() + 'K';
    } else {
        return count.toString();
    }
}
export function formatNotationSymbol(count: number) {
    if (count >= 1000000000) {
        return 'B';
    } else if (count >= 1000000) {
        return 'M';
    } else if (count >= 1000) {
        return 'K';
    } else {
        return '';
    }
}

export function formatNotation(count: number): number {
    if (count >= 1000000000) {
        return Number((count / 1000000000).toFixed(1));
    } else if (count >= 1000000) {
        return Number((count / 1000000).toFixed(1));
    } else if (count >= 1000) {
        return Number((count / 1000).toFixed(1));
    } else {
        return count;
    }
}

export const parseMentionsAndHashtags = (content: string) => {
    const mentionRegex = /@\[(.*?)\]\((.*?)\)/g;
    const hashtagRegex = /#\[(.*?)\]\((.*?)\)/g;

    const mentions = [];
    const hashtags = [];

    let mentionMatch = mentionRegex.exec(content);
    while (mentionMatch) {
        mentions.push({ display: mentionMatch[1], id: mentionMatch[2] });
        mentionMatch = mentionRegex.exec(content);
    }

    let hashtagMatch = hashtagRegex.exec(content);
    while (hashtagMatch) {
        hashtags.push({ display: hashtagMatch[1], id: hashtagMatch[2] });
        hashtagMatch = hashtagRegex.exec(content);
    }

    return { mentions, hashtags };
};

export const timeFormat = (date: string) => {
    const currentTime = new Date(date);

    const formattedTime = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    return formattedTime;
};

export const dateTimeFormat = (date: string) => {
    const currentTime = new Date(date);

    const formattedTime = currentTime.toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        month: '2-digit',
        year: '2-digit',
        day: '2-digit',
        hour12: true
    });
    return formattedTime;
};

export const getSocketWithToken = (token: string | null, namespace: string) => {
    return io(`${process.env.NEXT_PUBLIC_SOCKET_URL}${namespace}`, {
        transports: ['websocket'],
        ...(token && { query: { token } })
    });

    /* return io(`${process.env.NEXT_PUBLIC_SOCKET_URL}${namespace}`, {
        transports: ['websocket'],
        extraHeaders: {
            Authorization: "Bearer authorization_token_here"
        }
    });

    let optionsX: any = {
        transports: ['websocket']
    };
    if(token) {
        optionsX = {
            transports: ['websocket'],
            auth: {
                token: token
            }
        }
        console.log('Options Options 1', optionsX)
    }

    return io(`${process.env.NEXT_PUBLIC_SOCKET_URL}${namespace}`, optionsX); */
};

export const dateExtractor = (
    dateString: string | Date
): { year: number; month: number; day: number; hours: number; minutes: number; seconds: number; date: string; time: string } => {
    const dateObj = new Date(dateString);

    const year = dateObj.getFullYear(); // 2023
    const month = dateObj.getMonth() + 1; // 5 (months are 0-indexed, so we add 1)
    const day = dateObj.getDate(); // 6

    const hours = dateObj.getHours(); // 16
    const minutes = dateObj.getMinutes(); // 13
    const seconds = dateObj.getSeconds(); // 0

    const date = year + '-' + month + '-' + day;
    const time = hours + '-' + minutes + '-' + seconds;

    return { year, month, day, hours, minutes, seconds, date, time };
};

export const convertValueToDate = (value: number) => {
    const date = new Date(value * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
};

export const getAvatarURL = (url: string) => {
    return url ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_YOUR_CLOUD_NAME}/image/fetch/w_50/` + url : dummyProfile;
};
export const splitParagraph = (paragraph: string) => {
    const firstGroup = paragraph.substring(0, 300);
    const secondGroup = paragraph.substring(300);

    return [firstGroup, secondGroup];
};

export function isVideo(filename: File | unknown) {
    var videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'wmv'];
    if (filename?.type) {
        return filename?.type?.startsWith('video');
    } else if (filename?.url) {
        var extension = filename.url?.split('.')?.pop()?.toLowerCase();
        return videoExtensions?.includes(extension);
    } else {
        return false;
    }
}

export const isAllFilesGreaterThan100MB = (files: Array<File> | unknown, uploadedFiles: Array<File> | unknown) => {
    if (files.length > 0) {
        const fileSizes = [...uploadedFiles, ...files].map((file: File) => file?.size).reduce((a: number, b: number) => a + b, 0);
        const convert = (fileSizes / 1048576).toFixed(2);
        return parseInt(convert) > 100;
    }
};

export const isAllFilesGreaterThan10MB = (files: Array<File> | unknown, uploadedFiles: Array<File> | unknown) => {
    if (files.length > 0) {
        const fileSizes = [...uploadedFiles, ...files].map((file: File) => file?.size).reduce((a: number, b: number) => a + b, 0);
        const convert = (fileSizes / 1048576).toFixed(2);
        return parseInt(convert) > 10;
    }
};

export const getFilesSize = (files: Array<File> | unknown) => {
    if (files.length > 0) {
        const fileSizes = files.map((file: File) => file?.size).reduce((a: number, b: number) => a + b, 0);
        const convert = (fileSizes / 1048576).toFixed(2);
        return parseInt(convert);
    }
    return 0;
};
export const isSameFileUploaded = (newFile: File | unknown, uploadedFiles: Array<File> | unknown) => {
    let isSameFile: boolean = false;
    if (uploadedFiles.length > 0) {
        uploadedFiles.map((file) => {
            if (file?.name === newFile?.name) isSameFile = true;
        });
    }
    return isSameFile;
};

export const updatePostFieldInFeed = (feed: Feed, key: string, value: string | number, user: IUser | undefined): Feed => {
    const newFeed: Feed = { ...feed };
    const post: Post = { ...newFeed.post };
    // eslint-disable-next-line no-prototype-builtins
    if (key in post) post[key] = value;
    if (user && !post.commentsBy.find((c) => c._id === user._id)) {
        post['commentsBy'] = [...post.commentsBy, { _id: user._id }];
    }
    const updatedFeed: Feed = { ...feed, post };
    return updatedFeed;
};

export const updatePostLikeFieldInFeed = (feed: Feed, key: string, value: string | number): Feed => {
    const newFeed: Feed = { ...feed };
    const post: Post = { ...newFeed.post };
    // eslint-disable-next-line no-prototype-builtins
    if (key in post) post[key] = post[key] + value;
    const updatedFeed: Feed = { ...feed, post };
    return updatedFeed;
};

export const copyToClipboardToText = (text: string) => {
    navigator.clipboard
        .writeText(`${text}`)
        .then(() => {
            toast.success('Copied !');
            // Perform any additional actions after successful copy
        })
        .catch((error) => {
            toast.error('Error copying text to clipboard:', error);
            // Handle any errors that occur during the copy process
        });
};

export const copyToClipboard = (text: string) => {
    navigator.clipboard
        .writeText(`${process.env.NEXT_PUBLIC_URL}${text}`)
        .then(() => {
            toast.success('Copied !');
            // Perform any additional actions after successful copy
        })
        .catch((error) => {
            toast.error('Error copying text to clipboard:', error);
            // Handle any errors that occur during the copy process
        });
};

export const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds

    // Define month names
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Extract month, day, hour, and minute
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    // Format the string
    const formattedDate = `${month} ${day} / ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
    return formattedDate;
};

export const capitalize = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};

export const cryptoKey = {
    key: '0x2420984b031abd28e2f5275fa0941ee11f5710c4ae952e679b6af12de9ad8a33'
};

export function convertHashesMentionsToSimpleText(text: string) {
    /* eslint-disable no-useless-escape */
    const hashtagRegex = /\#\[(.+?)\]\(\w+\)/g;
    /* eslint-disable no-useless-escape */
    const userMentionRegex = /\@\[([^\]]+)\]\(\w+\)/g;
    const linkRegex = /\$\[([^\]]+)\]\(([^)]+)\)/g;

    const convertedText = text ? text.replace(hashtagRegex, '#$1').replace(userMentionRegex, '@$1').replace(linkRegex, '$$$1') : text;

    return convertedText;
}
