export const getDiffTime = (diffInMinutes: number) => {
    return new Date(Date.now().valueOf() + diffInMinutes * 60000).getTime() - new Date().getTime();
};
