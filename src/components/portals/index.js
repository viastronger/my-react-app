import React, {
    Fragment,
} from 'react'
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
                {/* 使用Portal传送门 */}
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