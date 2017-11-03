import { combineReducers } from 'redux'
import posts from './posts/reducers/reducer'
import currentPost from './posts/reducers/current_post_reducer'

export default combineReducers({
    posts,
    currentPost
})