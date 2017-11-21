import { SET_POSTS, UPDATE_POST_VOTESCORE } from '../actions'

function posts (state = [], action) {
    switch (action.type) {
        case SET_POSTS:
            return action.posts
        case UPDATE_POST_VOTESCORE:
            return state.map((post) => {
                if (post.id !== action.id) {
                    return post
                }

                return {
                    ...post,
                    voteScore: action.voteScore,
                }
            })
        default:
            return state
    }
}

export default posts;