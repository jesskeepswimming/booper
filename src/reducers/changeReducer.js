const changeReducer = (state = {'curr': 0, 'sound': ""}, action) => {
    
    
    switch (action.type) {
        case 'NUM': 
            console.log("NUM " +action.num);
            return {...state, 'curr': action.num};

        case 'SAVE':
            console.log('changing');

            console.log("SAVE" + action.payload);
            return {...state, 'sound': action.payload};

        default: return state;
    }
}

export default changeReducer;