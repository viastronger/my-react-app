import React, { Fragment } from 'react'
import { Icon, Tabs } from 'antd'

const { TabPane } = Tabs

export default class MyModal extends React.Component {
    callback = (key) => {
        console.log(key)
    }

    render() {
        return (
            <Fragment>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane
                        tab={(
                            <span>
                                <Icon type="step-forward" />
                                Tab 2
                            </span>
                        )}
                        key="2"
                    >
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Fragment>
        )
    }
}