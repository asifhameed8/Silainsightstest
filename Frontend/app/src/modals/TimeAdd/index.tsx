import { Button } from '@components/Button';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import DateDropdown from '@components/CalenderPicker/CalenderPicker';
import TimePicker from '@components/TimePicker/TimePicker';
import { GET_SCHEDULE_POSTS } from 'src/graphql/feeds';
import { Post } from 'src/interfaces';
import useTranslation from 'next-translate/useTranslation';
type IAddTime = {
    onClose?: () => void;
    cb?: Function;
    date1: Date;
    time: Date | undefined;
    setTime: Function;
    setDate: Function;
};

const AddTime = ({ onClose, cb, date1, time, setTime, setDate }: IAddTime) => {
    const { t } = useTranslation('common');
    const [posts, setPosts] = useState<Post[]>([]);

    /* eslint-disable */
    const { loading } = useQuery<{ getSchedulePosts: Post[] }>(GET_SCHEDULE_POSTS, {
        onCompleted: (data) => {
            if (data.getSchedulePosts) {
                setPosts(data.getSchedulePosts);
            }
        }
    });
    const handleSelectDate = (date: string) => {
        setDate(date);
    };
    const handleSelecttime = (time: string) => {
        setTime(time);
    };

    return (
        <div className="relative mt-4 mr-3 w-full rounded-md border border-lightBorder px-3 pt-4 pb-2 dark:border-borderColor">
            <i className="icon-close absolute top-4 right-4 cursor-pointer text-xs hover:text-secondary1" onClick={onClose}></i>
            <p className="text-sm text-secondary xs:pr-10">{t('feeds.selectadate')}</p>
            <div className="mt-3 flex items-center gap-2 xs:flex-col">
                <div className="w-full">
                    <DateDropdown onSelectDate={handleSelectDate} selectedDateProp={date1} />
                </div>
                <div className="w-full">
                    <TimePicker onSelectTime={handleSelecttime} selectedDate={date1} selectedTimeProp={time} />
                </div>
            </div>

            <Button
                className="btn-view-post mt-3 cursor-pointer text-sm dark:text-primary disabled:dark:text-primary"
                onClick={() => {
                    cb && cb();
                }}
                disabled={posts.length === 0}
            >
                {t('feeds.viewschedulepost')}
            </Button>
        </div>
    );
};

export default AddTime;
