/**
 * @file Login.jsx
 * @author zhaoli
 */

import * as React from "react";
import { withRouter } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {}



    render() {
        return (
            <div>
                <input type="text" defaultValue="admin" />
                <input type="password" defaultValue="123456" />
                <button>Login!!</button>
            </div>
        )
    }
}


export default withRouter(App);
