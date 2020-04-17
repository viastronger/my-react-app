import request from './request'

const getList = (data) => request.post('/getList', data)
const homeTable = (data) => request.get('/homeTable', data)

export {
    getList,
    homeTable,
}