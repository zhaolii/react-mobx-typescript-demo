/**
 * @file Layout
 * @author zhaoli
 */

import * as React from "react";
import { withRouter } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import Route from '../../Route';
import './layout.scss';

const { Header, Content, Footer } = Layout;

class AuthLayout extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
        const { user, pub, menu } = this.props;
        console.log('menu', menu)
        return (
            <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Route menu={menu} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                footer Created by al
            </Footer>
        </Layout>
        );
    }
}

export default withRouter(AuthLayout);
