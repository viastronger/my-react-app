import { createStore, combineReducers } from 'redux'
import tagsView from '../reducers/tags'
import setting from '../reducers/setting'

const rootReducer = combineReducers({
    tagsView,
    setting
})

const store = createStore(rootReducer)

export default store