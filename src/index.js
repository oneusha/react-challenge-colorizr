import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import Create from './containers/Create/index';
import Explore from './containers/Explore/index';

import configureStore from './store/configureStore';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/create" />
        <Route path="/create" component={Create} />
        <Route path="/explore" component={Explore} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
