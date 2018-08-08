/**
 * @file Route.js
 * @author denglingbo
 *
 * Route 被 framework 引入，用于创建路由
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getRoutes, WithRoutes } from './routes/util';

const App = (props:any) => {
    const menu = props.menu;
    console.log(1, menu)
    if (menu.length === 0) {
        return null;
    }

    return (
        <Switch>
            {menu.map((route, index) => {
                console.log(1222, route)
                // route.component()
                return (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                        // render={props => {
                        //     return <route.component {...props} routes={route.routes} />
                        // }}
                    />
                )
            })}
            <Redirect to="/404" />
        </Switch>
    )
}

export default App;


