import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Breadcrumb, Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { Scrollbars } from 'react-custom-scrollbars';

const breadcrumb = {
    display: 'inline-block',
    marginLeft: 20,
    color: 'white',
};

export default class Head extends React.Component {
    state = {
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    forMap = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
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
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
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
            <div
                style={{ ...style, ...trackStyle }}
                {...props} />
        );
    }
    render() {
        const { toggleCollapsed, collapsed } = this.props;
        const { tags, inputVisible, inputValue } = this.state;
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
