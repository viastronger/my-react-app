import React from 'react';
import { Layout } from 'antd';
import Header from './common/header';
import SiderBar from './common/siderBar';
import '../../less/layout.css';
import { connect } from 'react-redux'

const {
    Sider,
} = Layout;

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
        const { children } = this.props;
        return (
            <Layout>
                <Sider
                    width={150}
                    style={{ background: '#fff' }}
                    collapsed={this.state.collapsed}
                >
                    <SiderBar collapsed={this.state.collapsed} />
                </Sider>
                <Layout>
                    <Header 
                        toggleCollapsed={this.toggleCollapsed}  
                        collapsed={this.state.collapsed} />
                    {children}
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
       
    }
}


export default connect(mapStateToProps, null)(layout);
