import activeReducer from './activeReducer';
import searchReducer from './searchReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({activeReducer,searchReducer});

export default rootReducer;