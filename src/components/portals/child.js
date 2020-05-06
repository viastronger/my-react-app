import React from 'react'
import PropTypes from 'prop-types'

export default class Child extends React.Component {
    render() {
        console.log('子组件?')
        console.log(this.props)
        return (
            <div>
                我是一个子组件*{this.props.name.name}*
                <button type="button" onClick={this.props.clickHandle.bind(null, '小明')}>按钮</button>
            </div>
        )
    }
}

Child.propTypes = {
    name: PropTypes.objectOf(PropTypes.any),
    clickHandle: PropTypes.func,
}

Child.defaultProps = {
    name: {},
    clickHandle: () => (name) => name,
}