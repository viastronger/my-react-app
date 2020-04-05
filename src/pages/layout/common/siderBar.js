import React, { Fragment } from 'react'
import { Menu, Icon, Layout } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../../../history'
import siderBarRoute from '../../../config/siderBar'


const {
    Sider,
} = Layout
const { SubMenu } = Menu

const brandIcon = {
    fontSize: 40,
    display: 'block',
    margin: '20px auto',
}

class siderBar extends React.Component {
    constructor() {
        super()
        this.state = {
            pathname: '',
            hasPathname: false,
        }
        this.renderLeftNav = this.renderLeftNav.bind(this)
        this.changeRoute = this.changeRoute.bind(this)
        this.setPathname = this.setPathname.bind(this)
    }

    componentDidMount() {
        history.listen(() => {
            this.setPathname && this.setPathname()
        })
    }

    componentWillUnmount() {
        this.setPathname = null
    }

    setPathname(childrenRouter) {
        const routeArr = childrenRouter || siderBarRoute
        const currentPath = history.location.pathname.slice(1)
        let flag = false
        routeArr.forEach((item) => {
            if (!flag) {
                if (currentPath === item.path) {
                    flag = true
                    return
                }
                if (item.children) {
                    flag = this.setPathname(item.children)
                }
            }
        })

        if (flag) {
            this.setState({
                pathname: currentPath,
            })
        }
        return flag
    }

    changeRoute(e) {
        console.log(e)
        history.push(`/${e.key}`)
        this.props.addTags(e)
        // 移动端，点击侧边栏后，隐藏侧边栏
        this.props.phoneCollapsed && this.props.toggleCollapsed()
    }

    renderLeftNav(childrenRouter) {
        const routeArr = childrenRouter || siderBarRoute
        return routeArr.map((item) => {
            if (item.children) {
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
                        {this.renderLeftNav(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item
                    key={item.path ? item.path : item.id}
                    name={item.title}
                >
                    <Icon type={item.iconType} />
                    <span>{item.title}</span>
                </Menu.Item>
            )
        })
    }

    render() {
        const {
            collapsed, phoneCollapsed, isMobile, toggleCollapsed, siderWidth,
        } = this.props
        return (
            <Fragment>
                {
                    isMobile ? (
                        <div
                            className={['mask', phoneCollapsed ? 'show' : null].join(' ')}
                            onClick={toggleCollapsed}
                            onKeyDown={toggleCollapsed}
                            role="button"
                            tabIndex={0}
                        />
                    ) : null
                }
                <Sider
                    width={siderWidth}
                    trigger={null}
                    collapsible
                    className={[
                        'sider-bar',
                        isMobile ? 'hide' : null,
                        phoneCollapsed ? 'phoneCollapsed' : null].join(' ')}
                    collapsed={!isMobile ? collapsed : false}
                >
                    <Icon type="twitter" style={brandIcon} />
                    {!collapsed ? <div style={{ textAlign: 'center', marginBottom: 20 }}>Brand</div> : ''}
                    <Menu
                        onClick={this.changeRoute}
                        mode="vertical"
                        selectedKeys={[this.state.pathname]}
                        // defaultOpenKeys={['sub1']}
                        style={{ borderRight: 0 }}
                    >
                        {this.renderLeftNav()}
                    </Menu>
                </Sider>
            </Fragment>
        )
    }
}

siderBar.propTypes = {
    collapsed: PropTypes.bool,
    isMobile: PropTypes.bool.isRequired,
    siderWidth: PropTypes.number.isRequired,
    addTags: PropTypes.func.isRequired,
    phoneCollapsed: PropTypes.bool,
    toggleCollapsed: PropTypes.func.isRequired,
}

siderBar.defaultProps = {
    collapsed: false,
    phoneCollapsed: false,
}

function mapStateToProps(state) {
    return {
        isMobile: state.setting.isMobile,
        siderWidth: state.setting.siderWidth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTags(route) {
            dispatch({
                type: 'ADD_TAGS',
                payload: route,
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(siderBar)