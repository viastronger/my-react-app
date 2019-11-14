import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Breadcrumb, Tag, Input } from 'antd';
import { history } from '../../../history'
import { TweenOneGroup } from 'rc-tween-one';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux'

const breadcrumb = {
    display: 'inline-block',
    marginLeft: 20,
    color: 'white',
};
history.listen((e) => {
    console.log(e)
})
// const { CheckableTag } = Tag;
class Head extends React.Component {
    state = {
        inputVisible: false,
        inputValue: '',
    };

    judgePathName = (tag) => {
        return history.location.pathname.slice(1) === tag.key ? true : false
    }

    handleClose = removedTag => {
        const { tags, removeTags } = this.props
        const newTags = tags.filter(tag => tag.key !== removedTag.key);
        if (this.judgePathName(removedTag)) {
            // 如果删除的是当前路由的tag，那么选tag数组中最后一个
            history.push(`/${newTags[newTags.length - 1].key}`)
        }
        removeTags(newTags)
    };

    forMap = tag => {
        const active = this.judgePathName(tag)
        const tagElem = (
            <Tag
                closable
                className={active ? 'active' : ''}
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag.key}
            </Tag>
        );
        return (
            <span
                key={tag.key}
                style={{ display: 'inline-block' }}>
                {tagElem}
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
    componentWillReceiveProps() {
        console.log('will')
    }
    render() {
        const { toggleCollapsed, collapsed, tags } = this.props;
        // const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.forMap);
        return (
            <div>
                <Button type="primary" onClick={toggleCollapsed} size="small">
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Breadcrumb style={breadcrumb}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="javascript" style={{ color: 'white' }}>Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/" style={{ color: 'white' }}>Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={{ color: 'rgba(255,255,255,0.8)' }}>An Application</Breadcrumb.Item>
                </Breadcrumb>
                {
                    tagChild.length > 0 ? <Scrollbars
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
                    </Scrollbars> : ''
                }

            </div>

        );
    }
}


Head.propTypes = {
    toggleCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool,
};

Head.defaultProps = {
    collapsed: true,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Head)