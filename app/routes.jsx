import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Browser from './components/Browser';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Browser} />
  </Route>
);
