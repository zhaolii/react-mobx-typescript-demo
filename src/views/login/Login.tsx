/**
 * @file Login.jsx
 * @author zhaoli
 */

import * as React from "react";
import { withRouter } from 'react-router';
import ls from '../../util/localStorage'

class App extends React.Component<{history}> {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    login = () => {
        ls.set('isLogin', true)
        this.props.history.push('/hello')
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <input type="password"  />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}


export default withRouter(App);
