import React, { Component, Fragment } from 'react'
import { Button, Card, Icon } from 'antd'

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
                    <Button type="primary" shape="circle" icon="search" />
                    <Button icon="plus">按钮</Button>
                    <Button icon="edit">按钮</Button>
                    <Button type="dashed" icon="download">按钮</Button>
                </Card>
                <Card title="loading按钮">
                    <Button type="primary" shape="circle" loading />
                    <Button type="primary" loading>按钮</Button>
                </Card>
                <Card title="loading按钮">
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
            </Fragment>
        )
    }
}