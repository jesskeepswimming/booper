const changeReducer = (state = 0, action) => {
    switch (action.type) {
        case 'NUM': 
            console.log("NUM " +action.num);
            return action.num;
       
        default: return state;
    }
}

export default changeReducer;