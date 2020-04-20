
const initalState = {
    isMobile: false,
    pending: false,
    isLogin: true,
    width: 992,
    siderWidth: 150,
    ak: 'O2gylRqG1UcDNp6zTOQvc3kCBCdcTNRF',
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

const togglePending = (state, action) => {
    switch (action.type) {
    case 'TOGGLE_PENDING':
        return action.payload
    default:
        return state.pending
    }
}


export default (state = initalState, action) => ({
    isMobile: toggleDevice(state, action),
    width: state.width,
    siderWidth: state.siderWidth,
    ak: state.ak,
    pending: togglePending(state, action),
    isLogin: toggleLogin(state, action),
})