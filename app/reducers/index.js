import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import url from './addressBar';

const rootReducer = combineReducers({
  url,
  routing
});

export default rootReducer;
