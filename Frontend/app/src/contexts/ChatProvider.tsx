import React, { useState } from 'react';
import ChatContext from './ChatContext';
// import { useSelector } from 'react-redux';
// import { userSelector } from 'src/store/selectors';
import { IUser } from 'src/interfaces/user.interface';

interface IProps {
    children: any;
}

const ChatProvider = ({ children }: IProps) => {
    // const owner = useSelector(userSelector);
    const [boxes, setBoxes] = useState<Object[]>([]);
    // const [followCount,setFollowCount ] = useState<number>(0);

    const clickGroup = (group: Object) => {
        if (!boxes.some((item) => item?.data?._id === group?.data?._id)) {
            setBoxes([...boxes, group].slice(-3));
        }
    };
    const clickUser = (_user: { data: IUser; type: string }) => {
        if (!boxes.some((item) => item?.data?._id === _user?.data?._id)) {
            setBoxes([...boxes, _user].slice(-3));
        }
    };

    const closeBox = (_id: string) => {
        if (boxes.some((item) => item?.data?._id === _id)) {
            setBoxes(boxes.filter((item) => item?.data?._id !== _id));
        }
    };

    const openSupport = () => {
        if (!boxes.some((item) => item?.type === 'support')) {
            setBoxes([...boxes, { type: 'support' }].slice(-3));
        }
    };
    const closeSupport = () => {
        setBoxes(boxes.filter((item) => item?.type !== 'support'));
    };
    return (
        <ChatContext.Provider value={{ clickGroup, clickUser, closeBox, boxes, setBoxes, openSupport, closeSupport }}>
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider;
