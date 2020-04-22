import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Spin, message } from 'antd'
// import { Config } from '@jest/types'
import { history } from '../history'
/**
 * 自定义Axios实例
 */
function transformRequestFun(data) {
    let ret = ''
    data && Object.keys(data).forEach((item) => {
        if (typeof data[item] === 'object' || Array.isArray(data[item])) {
            data[item] = JSON.stringify(data[item])
        }
        ret += `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}&`
    })
    return ret
}

const AJAX = axios.create({
    // baseURL: baseUrl.url,
    timeout: 30000,
    // withCredentials: env.credential
    // Accept: 'application/json',
    // responseType: 'json',
    // transformRequest: [function (data) {
    //     const data1 = transformRequestFun(data)
    //     return data1
    // }],
})

// // 当前正在请求的数量
let requestCount = 0

// // 显示loading
function showLoading() {
    if (requestCount === 0) {
        const dom = document.createElement('div')
        dom.setAttribute('id', 'customLoading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin tip="加载中..." size="large" />, dom)
    }
    requestCount++
}

// 隐藏customLoading
function hideLoading() {
    requestCount--
    if (requestCount === 0) {
        document.body.removeChild(document.getElementById('customLoading'))
    }
}

// 请求拦截器
AJAX.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // if (process.env.NODE_ENV === 'development') {
        //     config.url = `http://${location.host}` + config.url;           // 自定义反向代理
        // }
        // 请求头添加authKey参数
        // let authKey = localStorage.getItem("authKey");
        // if (authKey) {
        //     config.headers["authKey"] = authKey;
        // }
        // requestCount为0，才创建loading, 避免重复创建
        if (config.headers.isLoading !== false && !requestCount) {
            showLoading()
        }
        if (config.method === 'post' || config.method === 'PUT' || config.method === 'PATCH' || config.method === 'DELETE') {
            // config.data = { ...config.data }
        }
        return config
    },
    // eslint-disable-next-line
    (error) => {
        // 对请求错误做些什么
        // 判断当前请求是否设置了不显示Loading
        if (error.config.headers.isLoading !== false) {
            hideLoading()
        }
        return Promise.reject(error)
    },
)

// 添加响应拦截器
AJAX.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        const { data, config } = response
        // 判断当前请求是否设置了不显示Loading
        if (config.headers.isLoading !== false) {
            hideLoading()
        }
        if (response.status !== 200) {
            message.error('服务器更新中')
            return Promise.reject(data)
        }
        if (data.retCode === '9995') {
            message.warning(data.msg).then(() => {
                localStorage.clear()
                history.relpace('/login')
            })
            return Promise.reject(response.data)
        }
        if (data.retCode !== 0 && !data.success && data.status !== 0) {
            message.warning(data.msg)
            return Promise.reject(data)
        }
        return data
    },
    (error) => {
        console.log(error)
        // if (error.config.headers.isLoading !== false) {
        //     hideLoading()
        // }
        // 对响应错误做点什么，比如400、401、402等等
        if (error && error.response) {
            // eslint-disable-next-line no-console
            console.log(error.response)
        }
        return Promise.reject(error)
    },
)

// 定义对外Get、Post、File请求
export default {
    get(url, param = {}, headers = {
        // "Content-Type":'application/json; charset=UTF-8'
    }) {
        return AJAX.get(url, {
            params: param,
            headers,
        })
    },
    post(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers,
        })
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers,
        })
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: { 'Content-Type': 'multipart/form-data', ...headers },
        })
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: { 'Content-Type': 'multipart/form-data', ...headers },
        })
    },
}
