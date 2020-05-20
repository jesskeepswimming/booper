export const adjust = () => {
    return {
        type: 'ADJUST'
    };  
};

export const speed = (nr) => {
    return {
        type: 'SPEED',
        payload: nr
    };
};