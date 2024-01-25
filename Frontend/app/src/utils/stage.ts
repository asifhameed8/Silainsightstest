import moment from 'moment';
import { Room } from 'src/modules/rooms/utils/ext';

export const isScheduleRoomReady = (date?: Date) => {
    if (!date) return false;
    const now = moment();
    const givenDate = moment(date); // Example given date and time in ISO 8601 format
    const duration = moment.duration(now.diff(givenDate));
    const seconds = duration.seconds();
    if (seconds > 0) return true;

    return false;
};

export function sortStageByLive(arrayOfObjects?: Room[]): Room[] {
    if (!arrayOfObjects) return [];
    return arrayOfObjects.sort((a, b) => {
        const nameA = a.is_live;
        const nameB = b.is_live;
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    });
}

export function sortStageBySchedule(arrayOfObjects?: Room[]): Room[] {
    if (!arrayOfObjects) return [];
    return arrayOfObjects.sort((a, b) => {
        const nameA = a.schedule_at ? a.schedule_at : null;
        const nameB = b.schedule_at ? b.schedule_at : null;

        if (!nameA || !nameB) return 0;

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}
