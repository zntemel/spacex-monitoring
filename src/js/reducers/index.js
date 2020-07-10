import { combineReducers } from 'redux';
import launchesReducer from './launchesReducer';

const rootReducer = combineReducers({
  launches: launchesReducer,
});

export default rootReducer;
