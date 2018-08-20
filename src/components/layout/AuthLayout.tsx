/**
 * @file Layout
 * @author zhaoli
 */

import * as React from "react";
import { withRouter } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import Route from '../../Route';
import './layout.scss';
import logo from '../../assets/logo.png'

const { Header, Content, Footer } = Layout;
class AuthLayout extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }

    componentWillMount() { }

    render() {
        const { user, pub, menu } = this.props;
        console.log('menu', menu)
        return (
            <Layout className="ant-layout">
                <Header className="ant-header">
                    <div className="logo">
                      <img src={logo} alt="logo"/>
                    </div>
                    <Menu
                        mode="horizontal"
                    >
                        <Menu.Item key="1">智联科技</Menu.Item>
                        <Menu.Item key="2">智慧e盖</Menu.Item>
                        <Menu.Item key="3">精益制造</Menu.Item>
                        <Menu.Item key="4">信息中心</Menu.Item>
                        <Menu.Item key="5">走近海普</Menu.Item>
                    </Menu>
                </Header>
                <Content className="ant-content">
                    <Route menu={menu} />
                </Content>
                <Footer className="ant-footer">
                    Copyright © 1998 - 2018 HICAP All Rights Reserved. 海普智联 版权所有 鲁ICP备05011473号-5
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(AuthLayout);
