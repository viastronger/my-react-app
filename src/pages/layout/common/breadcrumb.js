import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';

const breadcrumb = {
    display: 'inline-block',
    marginLeft: 20,
    color: 'white',
};

class BreadcrumbCom extends React.Component {
    render() {
        return (
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
        )
    }
}


export default connect(null, null)(BreadcrumbCom)

