import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import Tags from './tags'
import Breadcrumb from './breadcrumb'


const {
    Header,
} = Layout

let antHeader = {
    backgroundColor: 'blueviolet',
    lineHeight: '30px',
    padding: '10px 20px',
    overflow: 'hidden',
    transition: 'all 0.5s',
}

class Head extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.changeHeight = this.changeHeight.bind(this)
    }

    changeHeight = (tags) => {
        const antHeaderStyle = { ...antHeader }
        antHeaderStyle.height = tags.length > 0 ? '80px' : '50px'
        return antHeaderStyle
    }

    render() {
        const { toggleCollapsed, collapsed, tags } = this.props
        antHeader = this.changeHeight(tags)
        return (
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                    ...antHeader,
                }}
            >
                <Button type="primary" onClick={toggleCollapsed} size="small">
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Breadcrumb />
                {
                    tags.length > 0 ? <Tags /> : null
                }

            </Header>

        )
    }
}


Head.propTypes = {
    toggleCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Head.defaultProps = {
    collapsed: false,
}

function mapStateToProps(state) {
    return {
        tags: state.tagsView.tags,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)