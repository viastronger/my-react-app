export const TagsType = {
    ADD_TAGS: 'ADD_TAGS',
    REMOVE_TAGS: 'REMOVE_TAGS',
}

export const addTags = (route) => (dispatch) => dispatch({
    type: TagsType.ADD_TAGS,
    route,
})