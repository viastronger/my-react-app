import React from 'react'
import PropTypes from 'prop-types'
import {
    Layout,
    Button,
    Icon,
    Row,
    Col,
} from 'antd'
import { connect } from 'react-redux'
import Tags from '../tags'
import Breadcrumb from '../breadcrumb'
import './index.less'

const {
    Header,
} = Layout

class Head extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.changeHeight = this.changeHeight.bind(this)
    }

    changeHeight = (tags) => {
        const antHeaderStyle = {}
        antHeaderStyle.height = tags.length > 0 ? '80px' : '50px'
        return antHeaderStyle
    }

    render() {
        const { toggleCollapsed, collapsed, tags } = this.props
        const antHeader = this.changeHeight(tags)
        return (
            <Header
                className="antHeader"
                style={{
                    ...antHeader,
                }}
            >
                <Row>
                    <Col span={12}>
                        <Button type="primary" onClick={toggleCollapsed} size="small">
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                        <Breadcrumb />
                    </Col>
                    <Col span={12}>
                        kdl
                    </Col>
                </Row>

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