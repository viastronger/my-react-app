

const initalState = {
    tags: []
}

const addTags = (tags = initalState.tags, action) => {
    if (tags.some(tag => tag.key === action.payload.key)) return tags
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

export default (state = initalState, action) => {
    return {
        tags: addTags(state.tags, action)
    }
}