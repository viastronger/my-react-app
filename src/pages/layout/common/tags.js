import React from 'react';
import { Link } from 'react-router-dom'
import { history } from '../../../history'
import { connect } from 'react-redux'
import { Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { Scrollbars } from 'react-custom-scrollbars';


class Tags extends React.Component {

    forceUpdateMethod = () => {
        this.forceUpdate();
    }

    componentDidMount() {
        history.listen((e) => {
            this.forceUpdateMethod && this.forceUpdateMethod()
        })
    }

    componentWillUnmount() {
        this.forceUpdateMethod = null
    }

    judgePathName = (tag) => {
        return history.location.pathname.slice(1) === tag.key ? true : false
    }

    handleClose = removedTag => {
        const { tags, removeTags } = this.props
        const newTags = tags.filter(tag => tag.key !== removedTag.key);
        if (this.judgePathName(removedTag)) {
            // 如果删除的是当前路由的tag，那么选tag数组中最后一个
            newTags.length > 0 ? history.push(`/${newTags[newTags.length - 1].key}`) : history.push(`/`)
        }
        removeTags(newTags)
    };

    // tagClick = clickTag => {
    //     history.push(`/${clickTag.key}`)
    // }

    forMap = tag => {
        const active = this.judgePathName(tag)
        const tagElem = (
            <Tag
                closable
                // onClick={() => this.tagClick(tag)}
                style={{ cursor: 'pointer' }}
                className={active ? 'active' : ''}
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag.item.props.name}
            </Tag>
        );
        return (
            <span
                key={tag.key}
                style={{ display: 'inline-block' }}>
                <Link to={`/${tag.key}`}>{tagElem}</Link>
            </span>
        );
    };
    renderThumbHorizontal({ style, ...props }) {//设置滚动条的样式
        const thumbStyle = {
            height: '6px',
            backgroundColor: '#000000',
            opacity: '0.5',
            borderRadius: '6px',

        };
        return (
            <div style={{ ...style, ...thumbStyle }} {...props} />
        );
    }
    renderTrackHorizontal({ style, ...props }) {
        const trackStyle = {
            right: 2,
            left: 2,
            borderRadius: '6px',
            bottom: '2px',
        };
        return (
            <div style={{ ...style, ...trackStyle }} {...props} />
        );
    }
    render() {
        const { tags } = this.props;
        const tagChild = tags.map(this.forMap);
        return (
            <Scrollbars
                className='scroll-bar'
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
                        onComplete: e => {
                            e.target.style = '';
                        },
                    }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
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
        tags: state.tagsView.tags
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeTags(newTags) {
            dispatch({
                type: 'REMOVE_TAGS',
                payload: newTags
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)