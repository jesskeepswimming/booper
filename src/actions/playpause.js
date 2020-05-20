export const toggle = (num) => {
    
    if (num == 0) {
        return {
            type: 'CLICK0'
        };
    } else if (num == 1) {
        return {
            type: 'CLICK1'
        };
    }      
    
};
