import {Howl} from 'howler';
import {useSelector, useDispatch} from 'react-redux';



const songReducer = (state = {}, action) => {

    
    switch (action.type) {
        /*case 'SAVE':

            var song = new Howl({
                src: change,
                format: "weba"
            });
            
            return { ...state, [action.num]: song };
        */
        case 'CHANGE': 

            var song = new Howl({
                src: action.payload,
                format: "weba"
            });
            
            return { ...state, [action.num]: song };
        
        case "NOCHANGE":
            return state;
        
        default: return state;
    }

}

export default songReducer;