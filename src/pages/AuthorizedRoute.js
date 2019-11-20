import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthorizedRoute extends React.Component {

    render() {
        const { component: Component, pending, isLogin, ...rest } = this.props
        return (
            <Route {...rest} render={props => {
                if (pending) return <div>Loading...</div>
                return isLogin ? <Component {...props} /> : <Redirect to="/login" />
            }} />
        )
    }
}

const stateToProps = (state) => ({
    pending: state.setting.pending,
    isLogin: state.setting.isLogin
})

export default connect(stateToProps)(AuthorizedRoute)
