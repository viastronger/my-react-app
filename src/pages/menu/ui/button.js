import React, { Component, Fragment } from 'react'
import {
    DownloadOutlined,
    EditOutlined,
    LeftOutlined,
    PlusOutlined,
    RightOutlined,
    SearchOutlined,
} from '@ant-design/icons'
import { Button, Card } from 'antd'

const ButtonGroup = Button.Group
export default class ButtonUi extends Component {
    render() {
        return (
            <Fragment>
                <Card title="基础按钮">
                    <Button type="primary">按钮</Button>
                    <Button>按钮</Button>
                    <Button type="dashed">按钮</Button>
                </Card>
                <Card title="图形按钮">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    <Button icon={<PlusOutlined />}>按钮</Button>
                    <Button icon={<EditOutlined />}>按钮</Button>
                    <Button type="dashed" icon={<DownloadOutlined />}>按钮</Button>
                </Card>
                <Card title="loading按钮">
                    <Button type="primary" shape="circle" loading />
                    <Button type="primary" loading>按钮</Button>
                </Card>
                <Card title="loading按钮">
                    <ButtonGroup>
                        <Button type="primary">
                            <LeftOutlined />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <RightOutlined />
                        </Button>
                    </ButtonGroup>
                </Card>
            </Fragment>
        )
    }
}