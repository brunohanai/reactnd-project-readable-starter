import { SET_CURRENT_POST } from '../actions'

function currentPost (state = null, action) {
    switch (action.type) {
        case SET_CURRENT_POST:
            return action.post
        default:
            return state
    }
}

export default currentPost;