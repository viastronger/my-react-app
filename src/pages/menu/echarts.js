
import React, { Component } from 'react'
import { Row, Col, Card } from 'antd';
// import EchartsArea from '../../components/echarts/EchartsArea'
import EchartsForce from '../../components/echarts/EchartsForce'
import EchartsPie from '../../components/echarts/EchartsPie'
import EchartsEffectScatter from '../../components/echarts/EchartsEffectScatter'

export default class myEcharts extends Component {
    render() {
        return (
            <div className="gutter-example">
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="区域图" bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="关系图" bordered={false}>
                                <EchartsForce />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="饼图" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="散点图" bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}