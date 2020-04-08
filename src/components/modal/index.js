import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux'
import './index.less'

export default class MyModal extends React.Component {
    constructor() {
        super()
        this.state = {
            isHide: false, // 控制动画类名的变量
            canMove: false,
            mouseClickLeft: null,
            mouseClickTop: null,
            halfWidth: null,
            container: null,
            clientHeight: null,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        }
    }

    cancel = () => {
        const {
            container,
        } = this.state
        // 先触发隐藏动画
        this.setState({
            isHide: true,
        })
        setTimeout(() => {
            // 再触发 visibile 变化，使元素display:none
            this.props.onCancel()
            // 元素隐藏之后，将动画变量设置为默认
            this.setState({
                isHide: false,
            })
            // 元素隐藏之后，将元素归位
            if (container) {
                const top = this.props.style && this.props.style.top ? this.props.style.top : 50
                container.style.left = '50%'
                container.style.top = `${top}px`
            }
        }, 500)
    }

    mouseDown = (e) => {
        const container = document.getElementsByClassName('modal-container')[0]
        const {
            offsetLeft,
            offsetTop,
            clientWidth,
            clientHeight,
        } = container
        const halfWidth = Math.ceil(clientWidth / 2)
        const left = offsetLeft - halfWidth
        const mouseClickLeft = e.clientX - left
        const mouseClickTop = e.clientY - offsetTop
        this.setState({
            canMove: true,
            mouseClickLeft,
            mouseClickTop,
            halfWidth,
            container,
            clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        })
    }

    mouseUp = () => {
        this.setState({
            canMove: false,
        })
    }

    mouseMove = (e) => {
        if (this.state.canMove) {
            this.setPosition(e)
        }
    }

    setPosition = (e) => {
        const {
            container,
            clientHeight,
            mouseClickLeft,
            mouseClickTop,
            halfWidth,
            innerWidth,
            innerHeight,
        } = this.state
        const x = e.clientX - mouseClickLeft
        const y = e.clientY - mouseClickTop
        if (x <= 0) {
            container.style.left = `${halfWidth}px`
        } else if (x >= innerWidth - 2 * halfWidth) {
            container.style.left = `${innerWidth - halfWidth}px`
        } else {
            container.style.left = `${x + halfWidth}px`
        }
        if (y <= 0) {
            container.style.top = 0
        } else if (y >= innerHeight - clientHeight) {
            container.style.top = `${innerHeight - clientHeight}px`
        } else {
            container.style.top = `${y}px`
        }
    }

    render() {
        const { visibile, style, title } = this.props
        const { isHide } = this.state
        return (
            <Fragment>
                <div
                    className={['my-modal', isHide ? 'hide' : null, visibile ? 'show' : null].join(' ')}
                    onMouseMove={(e) => { this.mouseMove(e) }}
                    style={{
                        display: visibile ? 'block' : null,
                    }}
                >
                    <div
                        className="modal-mask"
                        onClick={this.cancel}
                        onKeyDown={this.cancel}
                        role="button"
                        tabIndex={0}
                    />
                    <div className="modal-container" style={style}>
                        <div className={['container', isHide ? 'hide' : null, visibile ? 'show' : null].join(' ')}>
                            <div
                                className="title"
                                onMouseDown={(e) => { this.mouseDown(e) }}
                                onMouseUp={(e) => { this.mouseUp(e) }}
                                role="button"
                                tabIndex={-1}
                            >
                                {title}
                            </div>
                            <div className="modal-contain">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

MyModal.propTypes = {
    visibile: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
    onCancel: PropTypes.func.isRequired,
    style: PropTypes.objectOf(PropTypes.any),
}

MyModal.defaultProps = {
    visibile: false,
    title: '标题',
    children: '内容',
    style: {},
}