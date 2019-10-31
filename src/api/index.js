import request from './request'

let getList = data => request.post('/getList', data)
let getList2 = data => request.get('/getList2', data)

export {
    getList,
    getList2
}