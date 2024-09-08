export const getDiffTime = (diffInMinutes: number) => {
    return new Date(Date.now().valueOf() + diffInMinutes * 60000).getTime() - new Date().getTime();
};

export const getMinute = (timestamp: number) => Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));

export const getSecond = (timestamp: number) => Math.floor((timestamp % (1000 * 60)) / 1000);

export const getHour = (timestamp: number) => Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
