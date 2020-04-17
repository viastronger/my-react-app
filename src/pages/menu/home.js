
import React from 'react'
import {
    Row, Col, Card, Table, Popconfirm, Button,
    Icon,
} from 'antd'
import { homeTable, getList } from '../../api/index'

class ExampleAnimations extends React.Component {
    constructor(props) {
        super(props)
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '30%',
            },
            {
                title: 'age',
                dataIndex: 'age',
            },
            {
                title: 'email',
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
                        <Icon type="delete" />
                    </Popconfirm>
                ) : null),
            },
        ]
        this.state = {
            dataSource: [],
            count: 2,
            deleteIndex: -1,
        }
    }

    componentDidMount() {
        this.getTableList()
    }

    onDelete = (record, index) => {
        const dataSource = [...this.state.dataSource]
        dataSource.splice(index, 1)
        this.setState({ deleteIndex: record.id, flag: true })
        setTimeout(() => {
            this.setState({ dataSource, flag: false })
        }, 500)
    };

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
    };

    getTableList = () => {
        homeTable().then((res) => {
            this.setState({
                dataSource: res.list,
            })
        })
    }

    reload = () => {
        this.getTableList()
    }

    renderClassName = (record, index) => {
        // if (this.state.deleteIndex === record.key) return 'animated zoomOutLeft min-black'
        if (this.state.flag && record.id === this.state.deleteIndex) return 'animated fadeOutLeft'
        return 'animated fadeInRight'
    }

    render() {
        const { dataSource } = this.state
        const { columns } = this
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                {/* <Button type="primary" onClick={this.handleAdd}>Add</Button> */}
                                <Button type="primary" onClick={this.reload}>reload</Button>
                                <Table
                                    bordered
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={20}
                                    rowKey={(record) => record.id}
                                    rowClassName={(record, index) => this.renderClassName(record, index)}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ExampleAnimations
