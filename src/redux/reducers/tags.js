
const initalState = {
    tagFlag: false,
    tags: [],
}

const addTags = (tags = initalState.tags, action) => {
    if (tags.some((tag) => tag.key === action.payload.key)) return tags
    const { type, payload } = action
    switch (type) {
    case 'ADD_TAGS':
        return [...tags, payload]
    case 'REMOVE_TAGS':
        return [...payload]
    default:
        return tags
    }
}

export default (state = initalState, action) => ({
    tags: addTags(state.tags, action),
})