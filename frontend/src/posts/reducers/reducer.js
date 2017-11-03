import { SET_POSTS } from '../actions'

function posts (state = [], action) {
    switch (action.type) {
        case SET_POSTS:
            return action.posts
        default:
            return state
    }
}

export default posts;