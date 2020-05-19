
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Form,
    Input,
    Button,
    Checkbox,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import QueuiAnim from 'rc-queue-anim'
import { brandName } from '../../config'
import Logo from '../../components/logo/logo'
import '../../less/login.less'

class Login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props)
        this.state = {
            loading: false,
            isCertificates: false,
            show: true,
        }
    }

    componentDidMount() {
        // console.log('mount')
    }

    onFinish = (values) => {
        console.log('Success:', values)
    }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    // #region 收缩业务代码功能

    // handleSubmit(e, isCertificates) {
    //   e.preventDefault()
    // }

    // #endregion

    render() {
        return (
            <div className="login-container">
                {/* <div className="extraLink" /> */}
                <div className="flexcolumn main">
                    <div className="login-header" key="header">
                        <div className="slogan">
                            <QueuiAnim className="flexcolumn" type={['right', 'left']} key="p">
                                {
                                    this.state.show ? [
                                        <p key="0" className="title">
                                            {brandName}
                                        </p>,
                                    ] : null
                                }
                            </QueuiAnim>
                        </div>
                        <Logo />
                    </div>
                    <Form
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入您的账号!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入您的密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住选择</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" onClick={(e) => { e.preventDefault }}>
                                忘记密码
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            Or <a href="">立即注册(并没有注册功能)!</a>
                        </Form.Item>
                    </Form>
                    <QueuiAnim component="div" className="login-footer" delay={600} type="bottom" key="footer">
                        {
                            this.state.show ? [
                                <p key="0"> 本站由<span>别玩了去看书</span>提供技术支持 </p>,
                            ] : null
                        }
                    </QueuiAnim>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(Login)