/**
 * @file Layout
 * @author denglingbo
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Layout } from 'antd';
import Route from '../../Route';
// import './layout.scss';

const { Header, Content, Sider } = Layout;

class AuthLayout extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
        const { user, pub, menu } = this.props;
        console.log('menu', menu)
        return (
            <div> 
                <div>header</div>
                <div>
                    content:
                    <Route menu={menu} />
                </div>
                <div>
                    footer
                </div>
            </div>
            // <Layout>
            //     <Header>Header</Header>
            //     {/* Layout */}
            //     <Layout>

            //         {/* 侧边栏容器 */}
            //         <Sider>
            //             {/* <SiderMenu menu={user.menu} /> */}
            //         </Sider>

            //         {/* 内容主容器 */}
            //         <Content>
            //             {/* 面包屑 */}
            //             {/* <Breadcrumb menu={user.menu} /> */}

            //             {/* 内容容器 */}
            //             <div className="content-main">
            //                 <Route menu={user.menu} />
            //             </div>
            //         </Content>
            //     </Layout>
            // </Layout>
        );
    }
}

export default withRouter(AuthLayout);
