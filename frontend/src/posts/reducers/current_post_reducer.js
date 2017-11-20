import { 
    SET_CURRENT_POST,
    SET_CURRENT_POST_COMMENTS,
    CURRENT_POST_ADD_COMMENT,
    CURRENT_POST_UPDATE_COMMENT,
    CURRENT_POST_REMOVE_COMMENT,
} from '../actions'

function currentPost (state = null, action) {
    switch (action.type) {
        case SET_CURRENT_POST:
            return action.post
        case SET_CURRENT_POST_COMMENTS:
            return { ...state, comments: action.comments }
        case CURRENT_POST_ADD_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.comment,
                ]
            }
        case CURRENT_POST_UPDATE_COMMENT: // TODO: essa foi boa (sera?), preciso lembrar disso
        case CURRENT_POST_REMOVE_COMMENT:
            const comments = state.comments.map((item, index) => {
                if (item.id !== action.comment.id) {
                    return item
                }

                return {
                    ...item,
                    ...action.comment,
                }
            })

            return {
                ...state,
                comments: comments,
            }
        default:
            return state
    }
}

export default currentPost;