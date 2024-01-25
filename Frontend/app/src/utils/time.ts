export const is24hoursCompleted = (d: string | number | Date) => {
    const dateString = new Date(d);
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
    const timestamp = new Date().getTime();
    const time = new Date(dateString).getTime();
    const timeDifference = timestamp - time;
    return timeDifference >= ONE_DAY_IN_MS ? true : false;
};

export const changeTimeZone = (date: Date) => {
    let now = null;
    if (typeof date === 'string') {
        now = new Date(
            new Date(date).toLocaleString('en-US', {
                timeZone: 'Europe/London'
            })
        );
    }

    now = new Date(
        date.toLocaleString('en-US', {
            timeZone: 'Europe/London'
        })
    );

    const londonDST = isDSTLondon(now); // Check if DST is in effect
    const londonTime = convertToLondonTime(now, londonDST);

    return londonTime;
};

export const isDSTLondon = (date: Date) => {
    const year = date.getFullYear();
    // DST in London typically starts on the last Sunday of March and ends on the last Sunday of October.
    const dstStart = new Date(Date.UTC(year, 2, 31 - ((5 + new Date(year, 2, 31).getDay()) % 7), 1, 0, 0, 0)); // March 31
    const dstEnd = new Date(Date.UTC(year, 9, 31 - ((5 + new Date(year, 9, 31).getDay()) % 7), 1, 0, 0, 0)); // October 31

    return date >= dstStart && date < dstEnd;
};

export const convertToLondonTime = (date: Date, isDST: boolean) => {
    const offset = isDST ? 1 : 0; // London is GMT+1 (BST) during DST and GMT (GMT) during standard time
    const londonTime = new Date(date.getTime() - offset * 60 * 60 * 1000);
    return londonTime;
};

export const checkIfTimeIsLessThenDay = (dateTime: Date): Boolean => {
    const currentDate: Date = changeTimeZone(new Date());
    const providedDate: Date = changeTimeZone(dateTime);

    // Calculate the time difference in milliseconds
    const timeDifferenceMs: number = providedDate.getTime() - currentDate.getTime();
    // Calculate the number of hours in the time difference
    const hoursDifference: number = timeDifferenceMs / (1000 * 60 * 60);
    if (hoursDifference <= 24) {
        return true;
    } else {
        return false;
    }
};

export const checkIfTimeIsLessThenNow = (dateTime: Date): Boolean => {
    const currentDate: Date = changeTimeZone(new Date());
    const providedDate: Date = changeTimeZone(dateTime);

    // Calculate the time difference in milliseconds
    const timeDifferenceMs: number = providedDate.getTime() - currentDate.getTime();

    // Calculate the number of hours in the time difference
    const hoursDifference: number = timeDifferenceMs / (1000 * 60 * 60);
    if (hoursDifference <= 0) {
        return true;
    } else {
        return false;
    }
};

export const getNumberOfDaysFromCurrentDate = (dateTime: Date): String => {
    const currentDate: Date = changeTimeZone(new Date());
    const providedDate: Date = changeTimeZone(dateTime);

    // Calculate the time difference in milliseconds
    const timeDifferenceMs: number = providedDate.getTime() - currentDate.getTime();

    // Calculate the number of hours in the time difference
    const hoursDifference: number = timeDifferenceMs / (1000 * 60 * 60);

    if (hoursDifference >= 24) {
        const daysDifference: number = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
        return `${daysDifference}`;
    }

    return '';
};
