// 使用 Mock
import Mock from 'mockjs'

const { Random } = Mock

const mock = {
    getList: Mock.mock('/getList', 'post', {
        success: true,
        message: Random.cparagraph(1, 5),
        // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        'list|1-5': [{
            // 属性 sid 是一个自增数，起始值为 1，每次增 1
            'sid|+1': 1,
            // 属性 userId 是一个5位的随机码
            'userId|5': '',
        }],
    }),
    getList2: Mock.mock('/homeTable', 'get', {
        success: true,
        message: Random.cparagraph(1),
        result: {
            'list|10': [{
                'id|+1': 0,
                'age|16-28': 18,
                time: Random.datetime(),
                name: '@cname',
                telphone: /^1[0-9]{10}$/,
                email: Random.email(),
                'type|1': ['全部', '上传数据审核', '案例使用审核', '定制需求申请审核'],
                'staus|1': ['全部', '未完结', '已完结'],
                remark: Random.cparagraph(1, 3),
            }],
            total: 189,
            currentPage: 1,
            pageSize: 10,
        },

    }),
}

export default mock
