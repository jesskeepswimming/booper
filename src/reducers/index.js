import playReducer from './playReducer';
import metroReducer from './metroReducer';
import songReducer from './songReducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({playReducer: playReducer, metroReducer: metroReducer, songReducer: songReducer});

export default allReducers;