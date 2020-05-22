const recordReducer = (state = {"0":[false, false], "1":[false, false],"2":[false, false], "3":[false, false],  "4":[false, false]}, action) => {
    
    switch (action.type) {
        case 'CLICKR': 
            var boo = [!state[action.payload][0], true];

            var n;
            for (const property in state) {
                if (property != action.payload && state[property][1]) n = property;
            }

            return { ...state, [action.payload]: boo, [n] : [false, false] };
        case "NOCLICKER":
            return state;
        default: return state;
    }

}

export default recordReducer;