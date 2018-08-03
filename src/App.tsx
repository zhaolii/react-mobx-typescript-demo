/**
 * @file App.js
 * @author zhaoli
 *
 */
import React from 'react';
import { Spin, Layout, Dropdown, Menu, Icon, Breadcrumb } from 'antd';
import { withRouter } from 'react-router';
import classnames from 'classnames';

const { Header, Content, Footer } = Layout;


function App (...props){
//   const { children } = props;


    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
          <div>智能工厂生产管理系统</div>
        </Header>
        <Content >
        {/* {children} */}
        </Content>
        <Footer>
          @Copyright 2018 海普智联 | 海维软件
        </Footer>
      </Layout>
    )
}


export default App;
