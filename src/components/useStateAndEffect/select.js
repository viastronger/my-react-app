import React from 'react'
import PropTypes from 'prop-types'

export default function SelectDataKey({ onChange }) {
    return (
        <>
            <label htmlFor="key-select">
                切换选择关键词，打印日志，分析useState和useEffect执行顺序:
                <select id="key-select" onChange={onChange}>
                    <option value="cases">Cases</option>
                    <option value="todayCases">Today Cases</option>
                    <option value="deaths">Death</option>
                    <option value="recovered">Recovered</option>
                    <option value="active">Active</option>
                </select>
            </label>
        </>
    )
}

SelectDataKey.propTypes = {
    onChange: PropTypes.func.isRequired,
}
