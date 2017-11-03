import { apiFetchPosts, apiFetchPostById } from '../utils/api'

export const SET_POSTS = 'SET_POSTS'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'

export function setPosts(posts) {
    return {
        type: SET_POSTS,
        posts: posts,
    }
}

export function setCurrentPost(post) {
    return {
        type: SET_CURRENT_POST,
        post: post,
    }
}

export function fetchPostsFromServer(category = null) {
    return function (dispatch) {
        return apiFetchPosts(category).then((res) => dispatch(setPosts(res)))
    }
}

export function fetchPostFromServer(id) {
    return function (dispatch) {
        return apiFetchPostById(id).then((res) => dispatch(setCurrentPost(res)))
    }
}