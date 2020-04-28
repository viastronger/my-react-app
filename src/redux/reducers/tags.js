import actions from '../actions'

const { TagsType } = actions

const initalState = {
    tagFlag: false,
    tags: [],
}

const addTags = (tags = initalState.tags, action) => {
    if (tags.some((tag) => tag.key === action.payload.key)) return tags
    const { payload } = action
    switch (action.type) {
    case TagsType.ADD_TAGS:
        return [...tags, payload]
    case TagsType.REMOVE_TAGS:
        return [...payload]
    default:
        return tags
    }
}

export default (state = initalState, action) => ({
    tags: addTags(state.tags, action),
})