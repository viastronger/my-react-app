import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import menu from '../menu'
import SiderBar from './common/siderBar';
import Header from './common/header';
import '../../less/layout.css';

class layout extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.resize = this.resize.bind(this);
    }
    componentDidMount() {
        this.resize();
        window.addEventListener("resize", this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    resize() {
        const { width, toggleDevice } = this.props
        toggleDevice(window.innerWidth <= width)
    }

    toggleCollapsed = () => {
        const { isMobile } = this.props;
        this.setState((prevState) => ({
            // 控制pc端，侧边栏是否折叠的变量
            collapsed: !prevState.collapsed,
            // 控制移动端，侧边栏是否折叠的变量
            phoneCollapsed: isMobile ? !prevState.collapsed : null
        }));
    }

    render() {
        const { location, siderWidth } = this.props;
        return (
            <Layout>
                <SiderBar
                    collapsed={this.state.collapsed}
                    phoneCollapsed={this.state.phoneCollapsed}
                    toggleCollapsed={this.toggleCollapsed}
                />
                <Layout
                    style={{ marginLeft: siderWidth }}
                    className={["container-layout", this.state.collapsed ? "collapsed" : null].join(' ')}>
                    <Header
                        toggleCollapsed={this.toggleCollapsed}
                        collapsed={this.state.collapsed}
                    />
                    <div style={{ padding: '0 20px 20px', marginTop: 90, minHeight: 'calc(100vh - 90px)' }}>
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
                                        <Route path="/home" component={menu.home} />
                                        <Route path="/echarts" component={menu.echarts} />
                                        <Redirect to='/home'></Redirect>
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                        {/* {children} */}
                    </div>
                </Layout>
            </Layout >
        );
    }
}

function mapStateToProps(state) {
    return {
        width: state.setting.width,
        isMobile: state.setting.isMobile,
        siderWidth: state.setting.siderWidth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleDevice(isMobile) {
            dispatch({
                type: 'TOGGLE_DEVICE',
                payload: isMobile
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(layout);
