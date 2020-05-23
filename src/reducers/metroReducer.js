import {Howl} from 'howler';



const metroReducer = (state = [{
    metroOn: false,
    speed: 50, 
    sound:
    new Howl({
        src: [ '../sounds/metronome.mp3']
    })
      
}], action) => {

    switch (action.type) {
        case 'ADJUST': 
            return  { ...state, metroOn: !state.metroOn };
        case 'SPEED': 
            return { ...state, speed: action.payload};
        default: return state;
    }
}

export default metroReducer;