const playReducer = (state = {"0":[false, false], "1":[false, false],"2":[false, false], "3":[false, false]}, action) => {
    
    switch (action.type) {
        case 'CLICK': 
            var tempstate = state;
            var boo = [!state[action.payload][0], true];
            
            for (const property in tempstate) {
                if (property != action.payload) tempstate[property][1] = false;
            }

            return { ...tempstate, [action.payload]: boo};
        case "NOUPLOAD":
            return state;
        default: return state;
    }

}

export default playReducer;