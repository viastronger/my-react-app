import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../less/layout.css'

const style = {
    width: '100vw',
    height: '100vh',
    fontSize: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

class AuthorizedRoute extends React.Component {
    render() {
        const {
            component: Component, pending, isLogin, togglePending, ...rest
        } = this.props
        setTimeout(() => {
            togglePending(false)
        }, 3000)
        return (
            <Route
                {...rest}
                render={(props) => {
                    if (pending) return <div style={style}>Loading...</div>
                    return isLogin ? (
                        <TransitionGroup>
                            <CSSTransition
                                appear
                                classNames="appAppear"
                                timeout={500}
                            >
                                <div>
                                    <Component {...props} />
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    ) : <Redirect to="/login" />
                }}
            />
        )
    }
}

AuthorizedRoute.propTypes = {
    component: PropTypes.objectOf(PropTypes.any).isRequired,
    togglePending: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
}

const stateToProps = (state) => ({
    pending: state.setting.pending,
    isLogin: state.setting.isLogin,
})


const mapDispatchToProps = (dispatch) => ({
    togglePending(pending) {
        dispatch({
            type: 'TOGGLE_PENDING',
            payload: pending,
        })
    },
})

export default connect(stateToProps, mapDispatchToProps)(AuthorizedRoute)
