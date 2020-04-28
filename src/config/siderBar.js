const siderBar = [
    {
        path: '/home',
        id: '1',
        iconType: 'windows',
        title: '首页',
    },
    {
        id: '2',
        path: '/ui',
        iconType: 'user',
        title: '路由2',
        children: [
            {
                path: '/ui/asf',
                id: '2-1',
                iconType: 'user',
                title: '路由2-2',
                children: [
                    {
                        path: '/ui/button',
                        id: '2-1-1',
                        iconType: 'user',
                        title: 'button',
                    },
                    {
                        path: '/ui/modal',
                        id: '2-1-2',
                        iconType: 'user',
                        title: 'modal',
                    },
                    {
                        path: '/ui/tab',
                        id: '2-1-3',
                        iconType: 'user',
                        title: 'tab',
                    },
                    {
                        path: '/ui/gallery',
                        id: '2-1-4',
                        iconType: 'user',
                        title: 'gallery',
                    },
                ],
            },
        ],
    },
    {
        path: '/echarts',
        id: '3',
        iconType: 'area-chart',
        title: '图表',
    },
    {
        path: '/form',
        id: '4',
        iconType: 'laptop',
        title: 'form',
        children: [
            {
                path: '/form/formLogin',
                id: '4-1',
                iconType: 'user',
                title: 'formLogin',
            },
        ],
    },
    {
        path: '/uedit',
        id: '5',
        iconType: 'notification',
        title: '富文本',
    },
]

export default siderBar
