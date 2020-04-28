import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    ConfigProvider,
    Form,
    Input,
    Checkbox,
    Button,
    Select,
    DatePicker,
} from 'antd'
import zhCN from 'antd/es/locale/zh_CN' // RangePicker中文化的关键（提示文字中文化）
import moment from 'moment'
import 'moment/locale/zh-cn' // RangePicker中文化的关键（日期文字中文化）
import utils from '../../utils'

const FormItem = Form.Item
const { RangePicker } = DatePicker
class BaseForm extends Component {
    renderFormIten = () => {
        const { formList } = this.props
        const { getFieldDecorator } = this.props.form
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
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator(field, {
                                    initialValue: initValue,
                                })(
                                    <Input
                                        type="text"
                                        placeholder={placeholder}
                                    />,
                                )
                            }
                        </FormItem>
                    )
                } else if (type === 'SELECT') {
                    formItem = (
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator(field, {
                                    initialValue: initValue,
                                })(
                                    <Select style={{ width }} placeholder={placeholder}>
                                        {utils.getOptionList(list)}
                                    </Select>,
                                )
                            }
                        </FormItem>
                    )
                } else if (type === 'CHECKBOX') {
                    formItem = (
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator(field, {
                                    valuePropName: 'checked',
                                    initialValue: initValue, // true || false
                                })(
                                    <Checkbox
                                        style={{ width }}
                                        placeholder={placeholder}
                                    />,
                                )
                            }
                        </FormItem>
                    )
                } else if (type === 'DATEPICKER') {
                    formItem = (
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator(field, {
                                    initialValue: [moment(), moment().add(1, 'month')],
                                })(
                                    <RangePicker
                                        showTime={showTime}
                                        format="YYYY-MM-DD HH:mm"
                                        onOk={this.onOk}
                                    />,
                                )
                            }
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

    handleSubmit = () => {
        const fieldsValue = this.props.form.getFieldsValue()
        console.log(fieldsValue)
        // this.props.formSubmit(fieldsValue)
    }

    render() {
        const { layout, isShow } = this.props
        return (
            <ConfigProvider locale={zhCN}>
                <Form layout={layout}>
                    {this.renderFormIten()}
                    {
                        isShow ? (
                            <FormItem>
                                <Button type="primaty" onClick={this.handleSubmit}>查询</Button>
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
    form: PropTypes.objectOf(PropTypes.any).isRequired,
    formList: PropTypes.arrayOf(PropTypes.any).isRequired,
    layout: PropTypes.string,
    isShow: PropTypes.bool,
    // formSubmit: PropTypes.func.isRequired,
}
BaseForm.defaultProps = {
    layout: 'horizontal',
    isShow: true,
}
export default Form.create({})(BaseForm)