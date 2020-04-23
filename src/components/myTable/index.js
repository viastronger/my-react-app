import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

export default class MyTable extends React.Component {
    onSelectChange = (selectedRowKeys, selectedRows) => {
        console.log(selectedRows)
        this.props.updateSelectItem(selectedRowKeys, selectedRows)
    }

    onRowClick = (row, index) => {
        const { rowSelection } = this.props
        let {
            selectedRowKeys,
            selectedRows,
            selectedIds,
        } = this.props
        if (rowSelection === 'checkbox') {
            if (selectedIds.length) {
                const i = selectedIds.indexOf(row.id)
                if (i === -1) {
                    selectedIds.push(row.id)
                    selectedRowKeys.push(index)
                    selectedRows.push(row)
                } else {
                    selectedIds.splice(i, 1)
                    selectedRowKeys.splice(i, 1)
                    selectedRows.splice(i, 1)
                }
            } else {
                selectedIds = [row.id]
                selectedRowKeys = [index]
                selectedRows = [row]
            }
            this.props.updateSelectItem(selectedRowKeys, selectedRows, selectedIds)
        } else {
            const selectedRowKeys = [index]
            const selectedRows = [row]
            this.props.updateSelectItem(selectedRowKeys, selectedRows)
        }
    }

    initTable = () => {
        let { rowSelection } = this.props
        const { selectedRowKeys } = this.props
        const rowSelectionOption = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange,
        }
        if (rowSelection === false || rowSelection === undefined) {
            rowSelection = false
        } else if (rowSelection === 'checkbox') {
            rowSelectionOption.type = 'checkbox'
        } else {
            rowSelection = 'radio'
        }
        return (
            <Table
                bordered
                {...this.props}
                rowSelection={rowSelection ? rowSelectionOption : null}
                onRow={(record, index) => (
                    {
                        onClick: (event) => {
                            if (!rowSelection) {
                                return
                            }
                            this.onRowClick(record, index)
                        }, // 点击行
                    }
                )}
            />
        )
    }

    render() {
        return (
            <div>
                {this.initTable()}
            </div>
        )
    }
}

MyTable.propTypes = {
    rowSelection: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    selectedRowKeys: PropTypes.arrayOf(PropTypes.any),
    selectedRows: PropTypes.arrayOf(PropTypes.any),
    selectedIds: PropTypes.arrayOf(PropTypes.number),
    updateSelectItem: PropTypes.func,
}


MyTable.defaultProps = {
    rowSelection: false,
    selectedRowKeys: [],
    selectedRows: [],
    selectedIds: [],
    updateSelectItem: () => console.log(1),
}
