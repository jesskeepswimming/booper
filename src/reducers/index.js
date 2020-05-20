import playReducer from './play';
import metroReducer from './metroredec';


import {combineReducers} from 'redux';

const allReducers = combineReducers({playReducer: playReducer, metroReducer: metroReducer});

export default allReducers;