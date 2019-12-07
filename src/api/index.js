import request from './request'

const getList = (data) => request.post('/getList', data)
const getList2 = (data) => request.get('/getList2', data)

export {
    getList,
    getList2,
}