export const numchange = (num) => {
    return {
        type: 'NUM',
        num: num
    };
};


export const saverecord = (song) =>{

    return {
        type: 'SAVE',
        payload: song
    };
    
    return;
  
};

