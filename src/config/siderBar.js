const siderBar = [
    {
        path: 'home',
        id: '1',
        iconType: 'windows',
        title: '首页',
    },
    {
        id: '2',
        path: 'route2',
        iconType: 'user',
        title: '路由2',
        children: [
            {
                path: 'route2/asf',
                id: '2-1',
                iconType: 'user',
                title: '路由2-2',
                children: [
                    {
                        path: 'route2/asf/sanji1',
                        id: '2-1-1',
                        iconType: 'user',
                        title: '路由2-2-1',
                    },
                    {
                        path: 'route2/asf/sanji2',
                        id: '2-1-2',
                        iconType: 'user',
                        title: '路由2-2-1',
                    },
                    {
                        path: 'route2/asf/sanji3',
                        id: '2-1-3',
                        iconType: 'user',
                        title: '路由2-2-1',
                    },
                    {
                        path: 'route2/asf/sanji4',
                        id: '2-1-4',
                        iconType: 'user',
                        title: '路由2-2-1',
                    },
                ],
            },
        ],
    },
    {
        path: 'echarts',
        id: '3',
        iconType: 'area-chart',
        title: '图表',
    },
    {
        path: 'route4',
        id: '4',
        iconType: 'laptop',
        title: '路由4',
    },
    {
        path: 'route5',
        id: '5',
        iconType: 'notification',
        title: '路由5',
    },
]

export default siderBar
