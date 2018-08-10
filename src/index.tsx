/**
 * @file index.tsx
 * @author zhaoli
 *
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import * as store from './store';

import { RouterStore } from "mobx-react-router";
import { Utils } from './util';


/**
 * 启动 App
 */
const startApp = (data) => {
    ReactDOM.render(
      <Provider {...store}>
        <Router>
          <App user={data} />
        </Router>
      </Provider>,
      document.getElementById('root')
    );
}

startApp({});
