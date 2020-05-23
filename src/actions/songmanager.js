export const songmanager = (num, song, change) => {

    if (change) {
        return {
            type: 'CHANGE',
            num: num,
            payload: song
        };
    } else {
        return {
            type: 'NOCHANGE',
            num: num,
            payload: ""
        };
    }
    
};

