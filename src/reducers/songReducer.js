import {Howl} from 'howler';

const songReducer = (state = {}, action) => {
    
    switch (action.type) {
        case 'CHANGE': 
            var song = new Howl({
                src: [action.payload]
            });
            
            return { ...state, [action.num]: song };
        case "NOCHANGE":
            return state;
        /*case "BLOB":
            return { ...state, [action.num]: action.song };
        */
        default: return state;
    }

}

export default songReducer;