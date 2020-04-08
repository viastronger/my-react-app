import React, { Fragment } from 'react'
import { Button } from 'antd'
import ModalCom from '../../../components/modal'

export default class MyModal extends React.Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
        }
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            isShow: !prevState.isShow,
        }))
    }

    render() {
        const { isShow } = this.state
        return (
            <Fragment>
                <Button type="primary" onClick={this.toggleModal}>模态框</Button>
                <ModalCom
                    visibile={isShow}
                    onCancel={this.toggleModal}
                    style={{
                    }}
                >
                    <p>aosidjfoi</p>
                </ModalCom>
            </Fragment>
        )
    }
}