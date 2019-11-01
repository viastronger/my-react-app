import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import siderBarRoute from '../../../config/siderBar';

const { SubMenu } = Menu;
export default class siderBar extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         collapsed: true,
    //     };
    // }

    render() {
        const { collapsed } = this.props;
        return (
            <Fragment>
                <Icon type="twitter" style={{ fontSize: 40, marginTop: 20 }} />
                {!collapsed ? <div>Brand</div> : ''}
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        siderBarRoute.map((item) => {
                            return (
                                <SubMenu
                                    key={item.id}
                                    title={(
                                        <span>
                                            <Icon type="user" />
                                            <span>子路由1</span>
                                        </span>
                                    )}
                                >
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                            );
                        })
                    }
                    <SubMenu
                        key="sub1"
                        title={(
                            <span>
                                <Icon type="user" />
                                <span>子路由1</span>
                            </span>
                        )}
                    >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub6"
                        title={(
                            <span>
                                <Icon type="area-chart" />
                                <span>子路由2</span>
                            </span>
                        )}
                    >
                        <SubMenu
                            key="1-0"
                            title={(
                                <span>
                                    <Icon type="user" />
                                    subnav 1
                                </span>
                            )}
                        >
                            <Menu.Item key="1-1">
                                option5
                            </Menu.Item>
                            <Menu.Item key="1-2">option5</Menu.Item>
                            <Menu.Item key="1-3">option5</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={(
                            <span>
                                <Icon type="laptop" />
                                <span>子路由3</span>
                            </span>
                        )}
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={(
                            <span>
                                <Icon type="notification" />
                                <span>子路由4</span>
                            </span>
                        )}
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
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
