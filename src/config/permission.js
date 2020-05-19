/* eslint import/no-extraneous-dependencies: ["off", {"peerDependencies": true}] */
import { history } from '../history'

// 进入登录路由的判断
export const isLoginMethod = (isLogin) => {
    if (isLogin) {
        history.replace(history.location.pathname)
    } else {
        history.replace('/login')
    }
}