
const initalState = {
    isMobile: false,
    pending: false,
    isLogin: true,
    width: 992,
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

export default (state = initalState, action) => {
    return {
        isMobile: toggleDevice(state, action),
        width: state.width,
        pending: state.pending,
        isLogin: toggleLogin(state, action),
    }
}