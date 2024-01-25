import React, { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

interface ILikedPost {
    postId: string;
    countStatus: 'increase' | 'decrease';
}

interface ILikeContext {
    likedPost: ILikedPost;
    setLikedPost: Dispatch<SetStateAction<ILikedPost>>;
}

export const LikeContext = createContext({} as ILikeContext);

export const useLikeContext = () => {
    const context = useContext(LikeContext);
    if (!context) throw new Error('useLikeContext must be used within the LikeProvider');

    return context;
};

const LikeProvider = ({ children }: { children: React.ReactNode }) => {
    const [likedPost, setLikedPost] = useState<ILikedPost>({} as ILikedPost);

    const value = useMemo(
        () => ({
            likedPost,
            setLikedPost
        }),
        [likedPost]
    );

    return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};

export default LikeProvider;
