import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import {
    Form,
    ConfigProvider,
    Input,
    Checkbox,
    Button,
    Select,
    DatePicker,
} from 'antd'
import zhCN from 'antd/es/locale/zh_CN' // RangePicker中文化的关键（提示文字中文化
// import moment from 'moment'
import 'moment/locale/zh-cn' // RangePicker中文化的关键（日期文字中文化）
import utils from '../../utils'

const FormItem = Form.Item
const { RangePicker } = DatePicker

// eslint-disable-next-line consistent-return
const validateMessages = {
    required: '${label} is required!',
    types: {
        city: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
}

export default class BaseForm extends Component {
    renderFormIten = () => {
        const { formList } = this.props
        const formItemList = []
        if (formList && formList.length) {
            formList.forEach((item) => {
                const {
                    type,
                    label,
                    field,
                    initValue = '',
                    placeholder,
                    width,
                    list,
                    showTime = { format: 'HH:mm' },
                } = item
                let formItem
                if (type === 'INPUT') {
                    formItem = (
                        <FormItem label={label} name={field} key={field}>
                            <Input type="text" placeholder={placeholder} />
                        </FormItem>
                    )
                } else if (type === 'SELECT') {
                    formItem = (
                        <FormItem label={label} name={field} key={field}>
                            <Select
                                style={{ width }}
                                placeholder={placeholder}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                {utils.getOptionList(list)}
                            </Select>
                        </FormItem>
                    )
                } else if (type === 'CHECKBOX') {
                    formItem = (
                        <FormItem label={label} name={field} key={field}>
                            <Checkbox style={{ width }} placeholder={placeholder} />
                        </FormItem>
                    )
                } else if (type === 'DATEPICKER') {
                    formItem = (
                        <FormItem label={label} name={field} key={field}>
                            <RangePicker
                                showTime={showTime}
                                format="YYYY-MM-DD HH:mm"
                                onOk={this.onOk}
                            />
                        </FormItem>
                    )
                }
                formItemList.push(formItem)
            })
        }
        return formItemList
    }

    onOk = (value) => {
        console.log('onOk: ', value)
    }

    handleSubmit = (values) => {
        this.props.formSubmit(values)
    }

    render() {
        const { layout, isShow } = this.props
        return (
            <ConfigProvider locale={zhCN}>
                <Form layout={layout} onFinish={this.handleSubmit} validateMessages={validateMessages}>
                    {this.renderFormIten()}
                    {
                        isShow ? (
                            <FormItem>
                                <Button type="primaty" htmlType="submit">查询</Button>
                                <Button type="primaty">重置</Button>
                            </FormItem>
                        ) : null
                    }
                </Form>
            </ConfigProvider>
        )
    }
}

BaseForm.propTypes = {
    // form: PropTypes.objectOf(PropTypes.any).isRequired,
    formList: PropTypes.arrayOf(PropTypes.any).isRequired,
    layout: PropTypes.string,
    isShow: PropTypes.bool,
    formSubmit: PropTypes.func,
}

BaseForm.defaultProps = {
    layout: 'horizontal',
    isShow: true,
    formSubmit: () => true,
}