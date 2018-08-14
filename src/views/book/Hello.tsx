/**
 * @file Hello.tsx
 * @author zhaoli
 *
 */

import * as React from 'react';
// import { withRouter } from 'react-router';
import './hello.scss'
import { observer, inject } from 'mobx-react';

@inject("hello")
@observer
class Hello extends React.Component<{hello}, {name: string}> {
    constructor() {
        super()
        this.state = {
            name: 'zhaoli11',
        }
        
    }

    render() {
        const store = this.props.hello
        return (
            <div className="hello">
                <div>hi,{store.counter},{this.state.name}</div>
                {/* <Button type="primary">click</Button> */}
                <button onClick={store.handlerChange}>click</button>
            </div>
        )
    }
}


export default Hello;

