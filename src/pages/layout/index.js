import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import menu from '../menu'
import SiderBar from './common/siderBar'
import Header from './common/Header'
import Nomatch from './common/Nomatch'
import '../../less/layout.css'

class layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            contentStyle: {
                padding: '0 20px 20px',
                minHeight: 'calc(100vh - 90px)',
                transition: 'all .5s',
            },
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
        const { location, siderWidth, tags } = this.props
        const { contentStyle } = this.state
        const obj = {
            ...contentStyle,
            marginTop: tags.length > 0 ? 90 : 60,
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
                        <TransitionGroup>
                            <CSSTransition
                                key={location.pathname}
                                classNames="fade"
                                timeout={800}
                            >
                                <div>
                                    {/* Switch 加了location={location}这个，就避免了每次路由切换时出现两个同样的组件的问题
                                        （并不太清楚原因-_-!!估计跟key有关系，可能相当于加了一个key）
                                    */}
                                    <Switch location={location}>
                                        <Route path="/admin/home" component={menu.home} />
                                        <Route path="/admin/echarts" component={menu.echarts} />
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
