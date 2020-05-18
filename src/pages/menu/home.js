
import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
// import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import {
    Form,
    Row,
    Col,
    Card,
    Table,
    Popconfirm,
    Button,
    Modal,
} from 'antd'
import utils from '../../utils'
import BaseForm from '../../components/baseForm'
import MyTable from '../../components/myTable'
import RenderProps from '../../components/renderProps'
import Cat from '../../components/renderProps/cat'
import { homeTable, getList } from '../../api/index'

const { pagination } = utils
class ExampleAnimations extends React.Component {
    params = {
        page: 1,
    }

    b = React.createRef()

    columns = [
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: 'age',
            dataIndex: 'age',
            // render(age) {
            //     console.log(age)
            //     return age
            // },
        },
        {
            title: 'email',
            ellipsis: true,
            dataIndex: 'email',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => (this.state.dataSource.length > 1 ? (
                <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => this.onDelete(record, index)}
                >
                    <DeleteOutlined />
                </Popconfirm>
            ) : null),
        },
    ]

    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initValue: '2',
            width: 200,
            list: [{ id: '1', name: '北京' }, { id: '2', name: '上海' }, { id: '3', name: '广州' }],
        },
        {
            type: 'DATEPICKER',
            label: '时间',
            field: 'time-picker',
            placeholder: '',
            width: 200,
        },
    ]

    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [],
            selectedIds: [],
            selectedRows: [],
            dataSource: [],
            count: 2,
            deleteIndex: -1,
            visible: false,
        }
        this.updateSelectItem = utils.updateSelectItem.bind(this)
        this.a = React.createRef()
    }

    componentDidMount() {
        // const data = [1, 2, 3]
        // const data = { a: { b: { c: 1 } } }
        // const p = new Proxy(data, {
        //     get(target, key, receiver) {
        //         console.log(target, key)
        //         console.log(Reflect.get(target, key))
        //         return Reflect.get(target, key)
        //     },
        //     set(target, key, value, receiver) {
        //         target[key] = value
        //         return true
        //     },
        // })
        // p.push(4)
        // console.log(p.a.b.c)
        this.getTableList()
        // console.log(this.a)
        // console.log(this.b)
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
    //     console.log(prevProps, prevState)
    // }

    onDelete = (record, index) => {
        const dataSource = [...this.state.dataSource]
        dataSource.splice(index, 1)
        this.setState({ deleteIndex: record.id, flag: true })
        setTimeout(() => {
            this.setState({ dataSource, flag: false })
        }, 500)
    }

    handleAdd = () => {
        const { count, dataSource } = this.state
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        }
        this.setState({
            dataSource: [newData, ...dataSource],
            count: count + 1,
        })
    }

    getTableList = () => {
        homeTable().then((res) => {
            this.setState({
                dataSource: res.result.list,
                pagination: pagination(res.result, (current) => {
                    // to-do
                    console.log(current)
                    console.log(this.params)
                }),
            })
        })
    }

    reload = () => {
        this.getTableList()
    }

    renderClassName = (record, index) => {
        if (this.state.deleteIndex === record.key) return 'animated zoomOutLeft min-black'
        if (this.state.flag && record.id === this.state.deleteIndex) return 'animated fadeOutLeft'
        return 'animated fadeInRight'
    }

    showForm = () => {
        this.setState({
            visible: true,
        })
    }

    handleSubmit = () => {
        const getValue = this.userForm.props.form.getFieldsValue()
        console.log(getValue)
    }

    baseFormSubmit = (values) => {
        console.log(values)
    }

    render() {
        const { dataSource, selectedRowKeys, selectedIds } = this.state
        const { columns } = this
        const formList = [
            {
                type: 'INPUT',
                label: '城市',
                field: 'city',
                placeholder: '全部',
                initValue: '2',
                width: 200,
            },
            {
                type: 'INPUT',
                label: '城市',
                field: 'as',
                placeholder: '全部',
                initValue: '2',
                width: 200,
            },
        ]
        return (
            <div className="gutter-example">
                <Row>
                    <Col md={24}>
                        <Card ref={this.a}>
                            <BaseForm formList={this.formList} layout="inline" formSubmit={this.baseFormSubmit} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*
                            renderProps可以在 标签attributes列表中，也可以在标签内部，
                            在renderProps组件内部会始终渲染传递过去的内容/子组件，在这里可以判断需要渲染哪个组件/内容
                        */}
                        <RenderProps>
                            {
                                (data) => <Cat target={data.target} />
                            }
                        </RenderProps>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} ref={this.b}>
                                {/* <Button type="primary" onClick={this.handleAdd}>Add</Button> */}
                                <Button type="primary" onClick={this.showForm}>新增</Button>
                                <Button type="primary" onClick={this.reload}>reload</Button>
                                <MyTable
                                    updateSelectItem={this.updateSelectItem}
                                    dataSource={dataSource}
                                    columns={columns}
                                    rowKey={(record) => record.id}
                                    rowSelection
                                    selectedRowKeys={selectedRowKeys}
                                    selectedIds={selectedIds}
                                    rowClassName={(record, index) => this.renderClassName(record, index)}
                                />
                                {/* <Table
                                    bordered
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={this.state.pagination}
                                    rowKey={(record) => record.id}
                                    // scroll={{ y: 400, x: 1340 }}
                                    rowClassName={(record, index) => this.renderClassName(record, index)}
                                /> */}
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={() => {
                        this.setState({
                            visible: false,
                        })
                    }}
                >
                    {/* <ModalForm ref={(el) => { this.a = el }} /> */}
                    {/* <ModalForm wrappedComponentRef={(el) => { this.userForm = el }} /> */}
                    <BaseForm formList={formList} wrappedComponentRef={(el) => { this.userForm = el }} isShow={false} />
                </Modal>
            </div>
        )
    }
}

// class UserForm extends React.Component {
//     formList = [
//         {
//             type: 'INPUT',
//             label: '城市',
//             field: 'city',
//             placeholder: '全部',
//             initValue: '2',
//             width: 200,
//         },
//         {
//             type: 'INPUT',
//             label: '城市',
//             field: 'as',
//             placeholder: '全部',
//             initValue: '2',
//             width: 200,
//         },
//     ]

//     render() {
//         return (
//             <BaseForm formList={this.formList} isShow={false} />
//         )
//     }
// }

// const ModalForm = Form.create({})(UserForm)

export default ExampleAnimations
