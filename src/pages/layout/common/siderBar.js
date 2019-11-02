import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import siderBarRoute from '../../../config/siderBar';

const { SubMenu } = Menu;
const brandIcon = {
    fontSize: 40,
    display: 'block',
    margin: '20px auto',
};


export default class siderBar extends React.Component {
    constructor() {
        super();
        this.state = {};
        // this.renderLeftNav = this.renderLeftNav.bind(this);
    }

    static renderLeftNav() {
        return siderBarRoute.map((item) => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.id}>
                        <Icon type={item.iconType} />
                        <span>{item.title}</span>
                    </Menu.Item>
                );
            }
            return (
                <SubMenu
                    key={item.id}
                    title={(
                        <span>
                            <Icon type={item.iconType} />
                            <span>{item.title}</span>
                        </span>
                    )}
                >
                    {
                        item.children.map((childItem) => (
                            <Menu.Item key={childItem.id}>{childItem.title}</Menu.Item>
                        ))
                    }
                </SubMenu>
            );
        });
    }

    render() {
        const { collapsed } = this.props;
        return (
            <Fragment>
                <Icon type="twitter" style={brandIcon} />
                {!collapsed ? <div style={{ textAlign: 'center', marginBottom: 20 }}>Brand</div> : ''}
                <Menu
                    mode="inline"
                    // defaultSelectedKeys={['2']}
                    // defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {this.renderLeftNav()}
                </Menu>
            </Fragment>

        );
    }
}

siderBar.propTypes = {
    collapsed: PropTypes.bool,
};

siderBar.defaultProps = {
    collapsed: true,
};
