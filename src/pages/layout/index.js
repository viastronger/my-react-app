import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Head from './common/header';
import SiderBar from './common/siderBar';
import '../../less/layout.css';

const {
    Header,
    Sider,
} = Layout;

const antHeader = {
    backgroundColor: 'blueviolet',
};

class layout extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    }

    render() {
        return (
            <Layout>
                <Sider
                    width={150}
                    style={{ background: '#fff', textAlign: 'center' }}
                    collapsed={this.state.collapsed}
                >
                    <SiderBar collapsed={this.state.collapsed} />
                </Sider>
                <Layout>
                    <Header style={antHeader}>
                        <Head
                            toggleCollapsed={this.toggleCollapsed}
                            collapsed={this.state.collapsed}
                        />
                    </Header>
                </Layout>
            </Layout>
        );
    }
}

export default layout;
