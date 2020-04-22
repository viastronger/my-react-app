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
import Axios from '../../../../api/jsonp'
import { getWeather } from '../../../../api'
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

    componentDidMount() {
        const { ak } = this.props
        this.getWeather(ak)
    }

    getWeather = (ak) => {
        getWeather({
            district_id: 222405,
            data_type: 'all',
            ak,
        }).then((res) => {
            console.log(res)
        })
    }

    changeHeight = (tags) => {
        const antHeaderStyle = {}
        const { isMobile } = this.props
        antHeaderStyle.height = tags.length > 0 && !isMobile ? '80px' : '50px'
        return antHeaderStyle
    }

    render() {
        const {
            toggleCollapsed,
            collapsed,
            tags,
            isMobile,
        } = this.props
        const antHeader = this.changeHeight(tags)
        return (
            <Header
                className="antHeader"
                style={{
                    ...antHeader,
                }}
            >
                <Row>
                    <Col span={14}>
                        <Button type="primary" onClick={toggleCollapsed} size="small">
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                        {
                            !isMobile ? <Breadcrumb /> : null
                        }
                    </Col>
                    <Col span={10}>
                        kdl
                    </Col>
                </Row>
                {
                    tags.length > 0 && !isMobile ? <Tags /> : null
                }

            </Header>

        )
    }
}


Head.propTypes = {
    toggleCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool,
    isMobile: PropTypes.bool.isRequired,
    ak: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Head.defaultProps = {
    collapsed: false,
}

function mapStateToProps(state) {
    return {
        tags: state.tagsView.tags,
        ak: state.setting.ak,
        isMobile: state.setting.isMobile,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)