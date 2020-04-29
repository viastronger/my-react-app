const siderBar = [
    {
        path: '/home',
        id: '1',
        iconType: 'WindowsOutlined',
        title: '首页',
    },
    {
        id: '2',
        path: '/ui',
        iconType: 'UserOutlined',
        title: '路由2',
        children: [
            {
                path: '/ui/asf',
                id: '2-1',
                iconType: 'UserOutlined',
                title: '路由2-2',
                children: [
                    {
                        path: '/ui/button',
                        id: '2-1-1',
                        iconType: 'UserOutlined',
                        title: 'button',
                    },
                    {
                        path: '/ui/modal',
                        id: '2-1-2',
                        iconType: 'UserOutlined',
                        title: 'modal',
                    },
                    {
                        path: '/ui/tab',
                        id: '2-1-3',
                        iconType: 'UserOutlined',
                        title: 'tab',
                    },
                    {
                        path: '/ui/gallery',
                        id: '2-1-4',
                        iconType: 'UserOutlined',
                        title: 'gallery',
                    },
                ],
            },
        ],
    },
    {
        path: '/echarts',
        id: '3',
        iconType: 'PieChartOutlined',
        title: '图表',
    },
    {
        path: '/form',
        id: '4',
        iconType: 'LaptopOutlined',
        title: 'form',
        children: [
            {
                path: '/form/formLogin',
                id: '4-1',
                iconType: 'UserOutlined',
                title: 'formLogin',
            },
        ],
    },
    {
        path: '/uedit',
        id: '5',
        iconType: 'NotificationOutlined',
        title: '富文本',
    },
]

export default siderBar
