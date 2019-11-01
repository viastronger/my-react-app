import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Breadcrumb } from 'antd';

const breadcrumb = {
    display: 'inline-block',
    marginLeft: 20,
    color: 'white',
};

export default class Head extends React.Component {
    render() {
        const { toggleCollapsed, collapsed } = this.props;
        return (
            <div>
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
            </div>

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
