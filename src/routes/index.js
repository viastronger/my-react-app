import React, { Component } from 'react'
import {
    Route,
    Switch,
    Router,
    Redirect,
} from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../history'
import { isLoginMethod } from '../config/permission'
import AuthorizedRoute from '../pages/AuthorizedRoute'
import Common from '../pages/common'
import Layout from '../pages/layout'
import login from '../pages/login'

class routes extends Component {
    render() {
        const { isLogin } = this.props
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={login} render={isLoginMethod(isLogin)} />
                        <AuthorizedRoute path="/admin" component={Layout} />
                        <Route path="/common" component={Common} />
                        <Redirect to="/admin" />
                        {/* <Route
                            path="/admin"
                            render={({ history, location, match }) => (
                                <Layout history={history} location={location} match={match}>
                                    <TransitionGroup>
                                        <CSSTransition
                                            key={location.pathname}
                                            classNames="fade"
                                            timeout={800}
                                        >
                                            <div>
                                                <Switch location={location}>
                                                    <Route path="/admin/echarts" component={menu.echarts} />
                                                    <Route path="/admin/home" component={menu.home} />
                                                </Switch>
                                            </div>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </Layout>
                            )}
                        /> */}
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