import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Detail extends Component {
    render() {
        const { match } = this.props
        console.log(match)
        return (
            <div>
                shdhh
            </div>
        )
    }
}

Detail.propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
}