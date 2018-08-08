/**
 * @file 404.tsx
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
                404
            </div>
        )
    }
}


export default withRouter(App);
