const playReducer = (state = {"1":false,"2":false, "3":false}, action) => {
    
    switch (action.type) {
        case 'CLICK': 
            return { ...state, [action.payload]:!state[action.payload] };
        default: return state;
    }

}

export default playReducer;