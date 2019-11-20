import React, { Fragment } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { history } from '../../../history'
import PropTypes from 'prop-types';
import siderBarRoute from '../../../config/siderBar';
import { connect } from 'react-redux'

const {
    Sider,
} = Layout;
const { SubMenu } = Menu;

const brandIcon = {
    fontSize: 40,
    display: 'block',
    margin: '20px auto',
};

class siderBar extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.renderLeftNav = this.renderLeftNav.bind(this);
        this.changeRoute = this.changeRoute.bind(this);
    }

    changeRoute(e) {
        history.push(`/${e.key}`)
        this.props.addTags(e)
        // 移动端，点击侧边栏后，隐藏侧边栏
        this.props.phoneCollapsed && this.props.toggleCollapsed()
    }

    renderLeftNav() {
        return siderBarRoute.map((item) => {
            if (!item.children) {
                return (
                    <Menu.Item
                        key={item.path ? item.path : item.id}
                        name={item.title}
                    >
                        <Icon type={item.iconType} />
                        <span>{item.title}</span>
                    </Menu.Item>
                );
            }
            return (
                <SubMenu
                    key={item.path ? item.path : item.id}
                    name={item.title}
                    title={(
                        <span>
                            <Icon type={item.iconType} />
                            <span>{item.title}</span>
                        </span>
                    )}
                >
                    {
                        item.children.map((childItem) => (
                            <Menu.Item
                                key={childItem.path ? childItem.path : childItem.id}
                                name={childItem.title}>
                                {childItem.title}
                            </Menu.Item>
                        ))
                    }
                </SubMenu>
            );
        });
    }

    render() {
        const { collapsed, phoneCollapsed, isMobile, toggleCollapsed } = this.props;
        return (
            <Fragment>
                {
                    isMobile ? (
                        <div className={[
                            "mask",
                            phoneCollapsed ? 'show' : null].join(' ')}
                            onClick={toggleCollapsed}>
                        </div>
                    ) : null
                }
                <Sider
                    width={150}
                    trigger={null}
                    collapsible
                    className={[
                        "sider-bar",
                        isMobile ? "hide" : null,
                        phoneCollapsed ? "phoneCollapsed" : null].join(' ')
                    }
                    collapsed={!isMobile ? collapsed : false}
                >
                    <Icon type="twitter" style={brandIcon} />
                    {!collapsed ? <div style={{ textAlign: 'center', marginBottom: 20 }}>Brand</div> : ''}
                    <Menu
                        onClick={this.changeRoute}
                        mode="inline"
                        defaultSelectedKeys={['route1']}
                        // defaultOpenKeys={['sub1']}
                        style={{ borderRight: 0 }}
                    >
                        {this.renderLeftNav()}
                    </Menu>
                </Sider>
            </Fragment>
        );
    }
}

siderBar.propTypes = {
    collapsed: PropTypes.bool,
};

siderBar.defaultProps = {
    collapsed: false,
};

function mapStateToProps(state) {
    return {
        isMobile: state.setting.isMobile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTags(route) {
            dispatch({
                type: 'ADD_TAGS',
                payload: route
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(siderBar)