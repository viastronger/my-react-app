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
import { getWeather } from '../../../../api'
import './index.less'

const {
    Header,
} = Layout

class Head extends React.Component {
    constructor() {
        super()
        this.state = {
            pos: '',
            weather: '',
            windDir: '',
            windClass: '',
        }
        this.changeHeight = this.changeHeight.bind(this)
    }

    componentDidMount() {
        const { ak } = this.props
        this.getWeather(ak)
    }

    getWeather = (ak) => {
        getWeather({
            district_id: 330100,
            data_type: 'all',
            ak,
        }).then((res) => {
            console.log(res)
            const { location, now } = res.result
            const pos = `${location.country}${location.province}${location.city}${location.name}`
            this.setState({
                pos,
                weather: now.text,
                windDir: now.wind_dir,
                windClass: now.wind_class,
            })
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
        const {
            pos,
            weather,
            windDir,
            windClass,
        } = this.state
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
                        {
                            !isMobile ? <Breadcrumb /> : null
                        }
                    </Col>
                    <Col span={12}>
                        <p>
                            {pos},
                            天气：
                            {weather}
                            ，
                            风向：
                            {windDir}
                            ，
                            风力等级：
                            {windClass}
                        </p>
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