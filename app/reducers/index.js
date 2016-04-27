import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tabs from './tabs';

const rootReducer = combineReducers({
  tabs: tabs,
  routing: routing
});

export default rootReducer;
