import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Head from './common/header';
import SiderBar from './common/siderBar';
import '../../less/layout.css';
import { connect } from 'react-redux'

const {
    Header,
    Sider,
} = Layout;

let antHeader = {
    backgroundColor: 'blueviolet',
    lineHeight: '30px',
    padding: '10px 20px',
    overflow: 'hidden',
    transition: 'all 0.5s'
};

class layout extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
    }

    toggleCollapsed = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    }

    changeHeight = (tags) => {
        let antHeaderStyle = { ...antHeader }
        antHeaderStyle.height = tags.length > 0 ? '80px' : '50px'
        return antHeaderStyle
    }

    render() {
        const { tags, children } = this.props;
        antHeader = this.changeHeight(tags)
        console.log(children)
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

function mapStateToProps(state) {
    return {
        tags: state.tagsView.tags
    }
}


export default connect(mapStateToProps, null)(layout);
