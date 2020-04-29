import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Portals extends React.Component {
    constructor() {
        super()
        this.el = document.createElement('div')
    }

    componentDidMount() {
        this.someRoot = document.getElementById('box')
        this.someRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        this.someRoot.removeChild(this.el)
    }

    render() {
        return (
            <Fragment>
                哈哈哈
                <UserDisplay />
                {
                    ReactDOM.createPortal(
                        this.props.children,
                        this.el,
                    )
                }
            </Fragment>

        )
    }
}

Portals.propTypes = {
    children: PropTypes.node,
}

Portals.defaultProps = {
    children: null,
}

const UserDisplay = () => {
    const [user, setUser] = useState({
        name: 'myname',
        age: 10,
        address: '0000 onestreet',
    })
    return (
        <Fragment>
            <div>
                <div className="label">Name:</div>
                <div>{user.name}</div>
            </div>
            <div>
                <div className="label">Address:</div>
                <div>{user.address}</div>
            </div>
            <div>
                <div className="label">Age:</div>
                <div>{user.age}</div>
            </div>
            <button type="button" onClick={() => setUser({ name: 'name changed' })}>
                Click me
            </button>
        </Fragment>
    )
}