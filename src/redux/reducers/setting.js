
const initalState = {
    isMobile: false,
    pending: false,
    isLogin: true,
    width: 992,
    siderWidth: 150,
}

const toggleDevice = (state, action) => {
    switch (action.type) {
    case 'TOGGLE_DEVICE':
        return action.payload
    default:
        return state.isMobile
    }
}

const toggleLogin = (state, action) => {
    switch (action.type) {
    case 'TOGGLE_LOGIN':
        return action.payload
    default:
        return state.isLogin
    }
}

export default (state = initalState, action) => ({
    isMobile: toggleDevice(state, action),
    width: state.width,
    siderWidth: state.siderWidth,
    pending: state.pending,
    isLogin: toggleLogin(state, action),
})