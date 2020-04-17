import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { history } from '../../../history'

class Nomatch extends Component {
    componentDidMount() {
        const { tags, removeTags } = this.props
        const removeTag = tags.filter((item) => item.key !== history.location.pathname)
        removeTags(removeTag)
    }

    render() {
        return (
            <div> 404 </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tags: state.tagsView.tags,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeTags(newTags) {
            dispatch({
                type: 'REMOVE_TAGS',
                payload: newTags,
            })
        },
    }
}

Nomatch.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeTags: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Nomatch)