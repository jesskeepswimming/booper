import playReducer from './play';
import metroReducer from './metroredec';
import songReducer from './songs';


import {combineReducers} from 'redux';

const allReducers = combineReducers({playReducer: playReducer, metroReducer: metroReducer, songReducer: songReducer});

export default allReducers;