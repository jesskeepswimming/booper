import {Howl, Howler} from 'howler';

const songReducer = (state = {}, action) => {
    
    switch (action.type) {
        case 'CHANGE': 
            var song = new Howl({
                src: [action.payload]
            });
            
            return { ...state, [action.num]: song };
        case "NOCHANGE":
            return state;
        default: return state;
    }

}

export default songReducer;