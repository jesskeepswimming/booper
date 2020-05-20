const playReducer = (state = [false, false], action) => {
    switch (action.type) {
        case 'CLICK0': 
            return [!state[0], state[1]];
        case 'CLICK1': 
            return [state[0], !state[1]];
        default: return state;
    }
}

export default playReducer;