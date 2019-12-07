import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthorizedRoute extends React.Component {
    render() {
        const {
            component: Component, pending, isLogin, ...rest
        } = this.props
        return (
            <Route
                {...rest}
                render={(props) => {
                    if (pending) return <div>Loading...</div>
                    return isLogin ? <Component {...props} /> : <Redirect to="/login" />
                }}
            />
        )
    }
}

AuthorizedRoute.propTypes = {
    component: PropTypes.objectOf(PropTypes.any).isRequired,
    pending: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
}

const stateToProps = (state) => ({
    pending: state.setting.pending,
    isLogin: state.setting.isLogin,
})

export default connect(stateToProps)(AuthorizedRoute)
