import React from 'react'
import PropTypes from 'prop-types'

export default class DataProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { target: 'Zac' }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.children(this.state)}
            </div>
        )
    }
}

DataProvider.propTypes = {
    // render: PropTypes.func,
    children: PropTypes.func,
}

DataProvider.defaultProps = {
    // render: () => true,
    children: () => true,
}