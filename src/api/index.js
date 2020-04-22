import request from './request'

/**
 * 接口常量
 */
const prefix = process.env.NODE_ENV === 'development' ? '/api/storeAdmin' : '/storeAdmin'
const theMallTestUrl = process.env.NODE_ENV === 'development' ? '/api' : ''
const baiduPrefix = process.env.NODE_ENV === 'development' ? '/baidu' : 'http://api.map.baidu.com'

const getList = (data) => request.post('/getList', data)
const homeTable = (data) => request.get('/homeTable', data)
const login = (data) => request.post(`${prefix}/companyManage/adminLogin`, data, {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
})
const getWeather = (data) => request.get(`${baiduPrefix}/weather/v1/`, data)

export {
    getList,
    homeTable,
    login,
    getWeather,
}