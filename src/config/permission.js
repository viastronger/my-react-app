/* eslint import/no-extraneous-dependencies: ["off", {"peerDependencies": true}] */
import { history } from '../history'

// 进入登录路由的判断
export const isLoginMethod = (isLogin) => {
    // if (nextState.location.query && nextState.location.query.ticket) { // 如果url自带ticket
    //   sessionStorage.setItem('token', 'ticket')
    // }
    // if (nextState.location.query && nextState.location.query.key) { // 如果url自带key
    //   sessionStorage.setItem('token', 'key')
    // }
    // const token = sessionStorage.getItem('token')
    // if (!token) { // 没有token，那就返回首页
    //   replaceState('/login')
    // }
    if (isLogin) {
        history.replace('/admin')
    }
}