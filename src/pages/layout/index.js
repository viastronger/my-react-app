import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import menu from '../menu'
import SiderBar from './common/SiderBar'
import Header from './common/Header'
import Nomatch from './common/Nomatch'
import '../../less/layout.css'

class layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
        this.toggleCollapsed = this.toggleCollapsed.bind(this)
        this.resize = this.resize.bind(this)
    }

    componentDidMount() {
        this.resize()
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    toggleCollapsed = () => {
        const { isMobile } = this.props
        this.setState((prevState) => ({
            // 控制pc端，侧边栏是否折叠的变量
            collapsed: !prevState.collapsed,
            // 控制移动端，侧边栏是否折叠的变量
            phoneCollapsed: isMobile ? !prevState.collapsed : null,
        }))
    }

    resize() {
        const { width, toggleDevice } = this.props
        toggleDevice(window.innerWidth <= width)
    }

    render() {
        const {
            location,
            siderWidth,
            tags,
            isMobile,
        } = this.props
        const distance = tags.length > 0 && !isMobile ? 90 : 60
        const obj = {
            padding: '0 20px 20px',
            minHeight: `calc(100vh - ${distance}px)`,
            transition: 'all .5s',
            marginTop: distance,
        }
        return (
            <Layout>
                <SiderBar
                    collapsed={this.state.collapsed}
                    phoneCollapsed={this.state.phoneCollapsed}
                    toggleCollapsed={this.toggleCollapsed}
                />
                <Layout
                    style={{ marginLeft: siderWidth }}
                    className={['container-layout', this.state.collapsed ? 'collapsed' : null].join(' ')}
                >
                    <Header
                        toggleCollapsed={this.toggleCollapsed}
                        collapsed={this.state.collapsed}
                    />
                    <div style={obj}>
                        <TransitionGroup style={{ position: 'relative' }}>
                            <CSSTransition
                                key={location.pathname}
                                classNames="fade"
                                timeout={800}
                                appear
                            >
                                {/* div加上可以和绝对定位，就避免了每次路由切换时出现两个同样的组件的问题,而且父级元素需要相对定位 */}
                                <div
                                    key={location.pathname}
                                    style={{ position: 'absolute', width: '100%' }}
                                >
                                    <Switch location={location}>
                                        <Route path="/admin/home" component={menu.home} />
                                        <Route path="/admin/echarts" component={menu.echarts} />
                                        <Route path="/admin/ui/button" component={menu.button} />
                                        <Route path="/admin/ui/modal" component={menu.modal} />
                                        <Route path="/admin/ui/tab" component={menu.tab} />
                                        <Route path="/admin/ui/gallery" component={menu.gallery} />
                                        <Route path="/admin/form/formLogin" component={menu.formLogin} />
                                        <Route exact path="/admin/route2" component={menu.route2} />
                                        <Route component={Nomatch} />
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                        {/* {children} */}
                    </div>
                </Layout>
            </Layout>
        )
    }
}


layout.propTypes = {
    toggleDevice: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    location: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    siderWidth: PropTypes.number.isRequired,
    isMobile: PropTypes.bool.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
}

layout.defaultProps = {}

function mapStateToProps(state) {
    return {
        width: state.setting.width,
        isMobile: state.setting.isMobile,
        siderWidth: state.setting.siderWidth,
        tags: state.tagsView.tags,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleDevice(isMobile) {
            dispatch({
                type: 'TOGGLE_DEVICE',
                payload: isMobile,
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(layout)
