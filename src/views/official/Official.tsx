/**
 * @file Hello.tsx
 * @author zhaoli
 *
 */

import * as React from 'react';
// import { withRouter } from 'react-router';
import './official.scss'
import { Layout, Menu, Breadcrumb } from 'antd';
import { observer, inject } from 'mobx-react';

const { Header, Content, Footer } = Layout;

class Official extends React.Component<{}, {name: string}> {
    constructor() {
        super()
        this.state = {
            name: 'zhaoli11',
        }
        
    }

    render() {
        return (
            <div className="official">
                
            </div>
        )
    }
}


export default Official;

