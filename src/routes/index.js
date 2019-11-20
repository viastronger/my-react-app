import React, { Component } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { history } from '../history'
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux'
import AuthorizedRoute from '../pages/AuthorizedRoute';
import Layout from '../pages/layout';
// import menu from '../pages/menu'
import login from '../pages/login'
import { isLoginMethod } from '../config/permission'

class routes extends Component {

    render() {
        const { isLogin } = this.props
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={login} onEnter={isLoginMethod(isLogin)} ></Route>
                        <AuthorizedRoute path="/" component={Layout} ></AuthorizedRoute>
                        <Redirect to='/login'></Redirect>
                        {/* <Route path="/" render={({ history, location, match }) => (
                            <Layout history={history} location={location} match={match}>
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.pathname}
                                        classNames="fade"
                                        timeout={800}
                                    >
                                        <div>
                                            <Switch location={location}>
                                                <Route path="/echarts" component={menu.echarts} />
                                                <Route path="/home" component={menu.home} />
                                            </Switch>
                                        </div>
                                    </CSSTransition>
                                </TransitionGroup>
                            </Layout>
                        )} /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.setting.isLogin
    }
}

export default connect(mapStateToProps, null)(routes)