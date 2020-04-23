import React from 'react'
import { Select } from 'antd'

const { Option } = Select
export default {
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            currentPage: data.currentPage,
            pageSize: data.pageSize,
            total: data.total,
            showTotal: () => `共${data.total}条`,
            showQuickJumper: true,
        }
    },
    getOptionList(data) {
        if (!data) {
            return []
        }
        const options = [
            <Option value="0" key="all">全部</Option>,
        ]
        data.forEach((item) => {
            options.push(<Option value={item.id} key={item.name}>{item.name}</Option>)
        })
        return options
    },
    updateSelectItem(selectedRowKeys, selectedRows, selectedIds) {
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedRows,
                selectedIds,
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedRows,
            })
        }
    },
}