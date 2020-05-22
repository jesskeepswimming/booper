export const togglerecord = (num, change) => {
    
    if (change) {
        return {
            
            type: 'CLICKR',
            payload: num
        };
    } else return {
        type: 'NOCLICKR',
        payload: num
    }
};

