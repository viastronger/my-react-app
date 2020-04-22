import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
} from 'antd'
import { login } from '../../../api/index'
import './index.less'

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                login(values).then((res) => {
                    console.log(res)
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('mobile', {
                        initialValue: '17665497581',
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        initialValue: '123456',
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <Link className="login-form-forgot" to="/admin/button">
                        Forgot password
                    </Link>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or
                    <Link to="/admin/home">register now!</Link>
                </Form.Item>
            </Form>
        )
    }
}
NormalLoginForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.any).isRequired,
}

// NormalLoginForm.defaultProps = {}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalLoginForm