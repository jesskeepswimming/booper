import {Howl} from 'howler';

const songReducer = (state = {}, action) => {
    
    switch (action.type) {
        case 'CHANGE': 
            var song = new Howl({
                src: action.payload,
                loop: true,
                format: "weba"
            });   
            return { ...state, [action.num]: song };
        
        case "NOCHANGE":
            return state;
        
        default: return state;
    }

}

export default songReducer;