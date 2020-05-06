import React from 'react'
import PropTypes from 'prop-types'

export default class Cat extends React.Component {
    render() {
        const { target } = this.props
        return (
            <div>{target}</div>
        )
    }
}

Cat.propTypes = {
    target: PropTypes.string.isRequired,
}