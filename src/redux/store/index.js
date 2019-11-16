import { createStore, combineReducers } from 'redux'
import tagsView from '../reducers/tags'

const rootReducer = combineReducers({
    tagsView
})

const store = createStore(rootReducer)

export default store