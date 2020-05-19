import React, { Component } from 'react'
import {
    Route,
    Switch,
    Router,
} from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../history'
import { isLoginMethod } from '../config/permission'
// import AuthorizedRoute from '../pages/AuthorizedRoute'
import Common from '../pages/common/common'
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
                        <Route path="/common" component={Common} />
                        <Route path="/" component={Layout} />
                        {/* <AuthorizedRoute path="/" component={Layout} /> */}
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