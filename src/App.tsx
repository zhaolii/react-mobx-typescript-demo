/**
 * @file App.js
 * @author zhaoli
 *
 * 此处调用 framework 的 App.js
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { withRouter } from 'react-router';
// import { Layout } from 'antd';
import AuthLayout from './components/layout/AuthLayout';
import LoginLayout from './views/login/LoginLayout';
// import './style/common.scss';
import { asyncRoutes } from './routes/index'

class App extends React.Component<any> {
    render() {
        const { user } = this.props;
        console.log(user)
        return (
            <div>
                {user
                    ? <AuthLayout menu={asyncRoutes} />
                    : <LoginLayout />
                }
            </div>
        );
    }
}

export default App;

