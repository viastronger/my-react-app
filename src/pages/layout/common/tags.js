import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tag } from 'antd'
import { TweenOneGroup } from 'rc-tween-one'
import { Scrollbars } from 'react-custom-scrollbars'
import { history } from '../../../history'


class Tags extends React.Component {
    componentDidMount() {
        this.unlisten = history.listen((location, action) => {
            this.forceUpdateMethod && this.forceUpdateMethod()
        })
    }

    componentWillUnmount() {
        this.unlisten()
    }

    forceUpdateMethod = () => {
        const { tags } = this.props
        // 路由切换判断是否在tags里面，如果存在，强制更新tags组件，渲染高亮
        // 不存在就是在tags里面新增了一个路由，不需要调用强制更新方法，由render方法来重新渲染
        const isExist = tags.some((tag) => tag.key === history.location.pathname)
        if (isExist) {
            this.forceUpdate()
        }
    }

    judgePathName = (tag) => history.location.pathname === tag.key

    handleClose = (removedTag) => {
        const { tags, removeTags } = this.props
        const newTags = tags.filter((tag) => tag.key !== removedTag.key)
        let removeTagsIndex
        tags.map((tag, index) => {
            if (tag.key === removedTag.key) removeTagsIndex = index
            return null
        })
        if (this.judgePathName(removedTag)) {
            // 如果删除的是当前路由的tag，那么选中当前删除tag的前一个
            newTags.length > 0 ? history.replace(`${newTags[removeTagsIndex - 1].key}`) : history.replace('/admin')
        }

        removeTags(newTags)
    };

    forMap = (tag) => {
        const active = this.judgePathName(tag)
        const tagElem = (
            <Tag
                closable
                style={{ cursor: 'pointer' }}
                className={active ? 'active' : ''}
                onClose={(e) => {
                    e.preventDefault()
                    this.handleClose(tag)
                }}
            >
                {tag.item.props.title}
            </Tag>
        )
        return (
            <span
                key={tag.key}
                style={{ display: 'inline-block' }}
            >
                <Link to={tag.key}>{tagElem}</Link>
            </span>
        )
    };

    renderThumbHorizontal({ style, ...props }) { // 设置滚动条的样式
        const thumbStyle = {
            height: '6px',
            backgroundColor: '#000000',
            opacity: '0.5',
            borderRadius: '6px',

        }
        return (
            <div style={{ ...style, ...thumbStyle }} {...props} />
        )
    }

    renderTrackHorizontal({ style, ...props }) {
        const trackStyle = {
            right: 2,
            left: 2,
            borderRadius: '6px',
            bottom: '2px',
        }
        return (
            <div style={{ ...style, ...trackStyle }} {...props} />
        )
    }

    render() {
        const { tags } = this.props
        const tagChild = tags.map(this.forMap)
        return (
            <Scrollbars
                className="scroll-bar"
                style={{ height: 40, whiteSpace: 'nowrap', cursor: 'pointer' }}
                renderTrackHorizontal={this.renderTrackHorizontal}
                renderThumbHorizontal={this.renderThumbHorizontal}
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
            >
                <TweenOneGroup
                    enter={{
                        scale: 0.8,
                        opacity: 0,
                        type: 'from',
                        duration: 100,
                        onComplete: (e) => {
                            e.target.style = ''
                        },
                    }}
                    leave={{
                        opacity: 0, width: 0, scale: 0, duration: 200,
                    }}
                    appear={false}
                >
                    {tagChild}
                </TweenOneGroup>
            </Scrollbars>
        )
    }
}


function mapStateToProps(state) {
    return {
        tags: state.tagsView.tags,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeTags(newTags) {
            dispatch({
                type: 'REMOVE_TAGS',
                payload: newTags,
            })
        },
    }
}


Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeTags: PropTypes.func.isRequired,
}

Tags.defaultProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)