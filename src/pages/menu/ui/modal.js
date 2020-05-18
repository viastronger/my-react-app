import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Collapse } from 'antd'
import ModalCom from '../../../components/modal'
import UseStateAndEffect from '../../../components/useStateAndEffect'
import './index.less'

const { Panel } = Collapse
// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef()
const FancyButton = React.forwardRef((props, ref) => (
    <button type="button" ref={ref} className="FancyButton">
        {props.children}
    </button>
))
FancyButton.propTypes = {
    children: PropTypes.string.isRequired,
}

export default class MyModal extends React.Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
        }
    }

    toggleModal = () => {
        console.log(ref)
        this.setState((prevState) => ({
            isShow: !prevState.isShow,
        }))
    }

    render() {
        const { isShow } = this.state
        return (
            <Fragment>
                <Button type="primary" onClick={this.toggleModal}>模态框</Button>
                <FancyButton ref={ref}>Click me!</FancyButton>;

                <Collapse defaultActiveKey={['1']} accordion style={{ margin: '20px 0' }}>
                    <Panel header="This is panel header 1" key="1">
                        <div className="box" style={{ margin: '20px 0' }}>
                            <div className="son1" />
                            <div className="son2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat exercitationem voluptatum aliquam error nisi quisquam. Velit unde sequi debitis necessitatibus ullam quia, tempora, sed blanditiis nam assumenda repellat iste.</p>
                            </div>
                        </div>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <UseStateAndEffect />
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>3</p>
                    </Panel>
                </Collapse>

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
