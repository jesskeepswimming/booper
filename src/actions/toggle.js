export const toggle = (num, upload) => {
    if (upload) {

        
        return {
            type: 'CLICK',
            payload: num
        };
    } else {
        return {
            type:'NOCLICK',
            payload: num
        }
    }
   
};
