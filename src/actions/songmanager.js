import songReducer from "../reducers/songs";

//import {useSelector, useDispatch} from 'react-redux';

//const songer = useSelector(state => state.songReducer); 

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
