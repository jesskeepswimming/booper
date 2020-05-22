import playReducer from './playReducer';
import metroReducer from './metroReducer';
import songReducer from './songReducer';
import recordReducer from './recordReducer';
import changeReducer from './changeReducer';


import {combineReducers} from 'redux';

const allReducers = combineReducers({
    playReducer: playReducer, 
    metroReducer: metroReducer, 
    songReducer: songReducer,
    recordReducer: recordReducer,
    changeReducer: changeReducer
});

export default allReducers;