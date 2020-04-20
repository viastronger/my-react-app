import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import pic from '../../../images/FoG8lotg7AA.jpg'

const { Meta } = Card
export default class ButtonUi extends Component {
    render() {
        return (
            <Fragment>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={pic} />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Fragment>
        )
    }
}