/**
 * @file Hello.tsx
 * @author zhaoli
 *
 */

import * as React from 'react';
// import { withRouter } from 'react-router';
import './hello.css'
import { observer, inject } from 'mobx-react';

@inject("hello")
@observer
class Hello extends React.Component<{}, {name:string}> {
    constructor() {
        super()
        this.state = {
            name: 'zhaoli11',
        }
        
    }
    handlerClick = () => {
        // 调用后触发重新渲染
        this.setState({
            name: 'hhh'
        })
    }
    render() {
        const counter : number = 0;
        console.log(this.props)
        return (
            <div className="hello">
                <div>hi,{counter},{this.state.name}</div>
                {/* <Button type="primary">click</Button> */}
                <button onClick={this.handlerClick}>click</button>
            </div>
        )
    }
}


export default Hello;

