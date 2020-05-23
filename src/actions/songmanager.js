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

export const saverecord = (song) => {

    console.log('saving', song.blobURL);
    //dispatch(songmanager(change, blob.blobURL, recorder[change][1]));
        return {
            type: 'SAVE',
            //num: num,
            payload: song.blobURL
        };
  
    
};
