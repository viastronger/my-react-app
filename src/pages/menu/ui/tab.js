import React, { Fragment } from 'react'
import { StepForwardOutlined } from '@ant-design/icons'
import { Tabs, Row } from 'antd'
import Portals from '../../../components/portals'
import RenderProps from '../../../components/renderProps'
import Cat from '../../../components/renderProps/cat'

const { TabPane } = Tabs

export default class MyModal extends React.Component {
    callback = (key) => {
        console.log(key)
    }

    render() {
        return (
            <Fragment>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Portals" key="1">
                        <div id="box" />
                        <Portals> Portals</Portals>
                    </TabPane>
                    <TabPane
                        tab={(
                            <span>
                                <StepForwardOutlined />
                                renderProps
                            </span>
                        )}
                        key="2"
                    >
                        {/*
                            renderProps可以在 标签attributes列表中，也可以在标签内部，
                            在renderProps组件内部会始终渲染传递过去的内容/子组件，在这里可以判断需要渲染哪个组件/内容
                        */}
                        <RenderProps>
                            {
                                (data) => <Cat target={data.target} />
                            }
                        </RenderProps>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Fragment>
        )
    }
}