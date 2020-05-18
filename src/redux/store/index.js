import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import tagsView from '../reducers/tags'
import setting from '../reducers/setting'

const rootReducer = combineReducers({
    tagsView,
    setting,
})
// const store = createStore(rootReducer)

const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware(...middleware),
))

export default store