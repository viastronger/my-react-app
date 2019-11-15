import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Button, Icon, Breadcrumb} from 'antd';

import { connect } from 'react-redux'
import Tags from './tags'

const {
    Header,
} = Layout;

const breadcrumb = {
    display: 'inline-block',
    marginLeft: 20,
    color: 'white',
};

let antHeader = {
    backgroundColor: 'blueviolet',
    lineHeight: '30px',
    padding: '10px 20px',
    overflow: 'hidden',
    transition: 'all 0.5s'
};


class Head extends React.Component {
    constructor() {
        super();
        this.state = {
            inputVisible: false,
            inputValue: '',
        };
        this.changeHeight = this.changeHeight.bind(this);
    }

    changeHeight = (tags) => {
        let antHeaderStyle = { ...antHeader }
        antHeaderStyle.height = tags.length > 0 ? '80px' : '50px'
        return antHeaderStyle
    }
    render() {
        const { toggleCollapsed, collapsed, tags } = this.props;
        antHeader = this.changeHeight(tags)
        return (
            <Header style={antHeader}>
                <Button type="primary" onClick={toggleCollapsed} size="small">
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Breadcrumb style={breadcrumb}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="javascript" style={{ color: 'white' }}>Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/" style={{ color: 'white' }}>Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={{ color: 'rgba(255,255,255,0.8)' }}>An Application</Breadcrumb.Item>
                </Breadcrumb>
                {
                    tags.length > 0 ? <Tags/> : ''
                }

            </Header>

        );
    }
}


Head.propTypes = {
    toggleCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool,
};

Head.defaultProps = {
    collapsed: true,
};

function mapStateToProps(state) {
    return {
        tags: state.tagsView.tags
    }
}

function mapDispatchToProps(dispatch) {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)