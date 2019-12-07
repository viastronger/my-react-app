import React, { Component } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../history'
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { isLoginMethod } from '../config/permission'
import AuthorizedRoute from '../pages/AuthorizedRoute'
import Layout from '../pages/layout'
// import menu from '../pages/menu'
import login from '../pages/login'

class routes extends Component {
    render() {
        const { isLogin } = this.props
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={login} render={isLoginMethod(isLogin)} />
                        <AuthorizedRoute path="/" component={Layout} />
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
        )
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.setting.isLogin,
    }
}

routes.propTypes = {
    isLogin: PropTypes.bool,
}

routes.defaultProps = {
    isLogin: false,
}

export default connect(mapStateToProps, null)(routes)