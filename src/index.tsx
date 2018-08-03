/**
 * @file index.tsx
 * @author zhaoli
 *
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
import { Provider } from 'mobx-react';
import store from './store/index';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { asyncRoutes } from './routers';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route {...asyncRoutes}/>
    </Router>,
  </Provider>,
  document.getElementById('root')
);
