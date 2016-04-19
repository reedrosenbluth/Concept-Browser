import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import url from './addressBar';

const rootReducer = combineReducers({
  counter,
  url,
  routing
});

export default rootReducer;
