import { 
    apiFetchPosts,
    apiFetchPostById, 
    apiFetchComments,
    apiFetchCategories, 
    apiNewPost, 
    apiEditPost, 
    apiDeletePost,
    apiNewComment,
    apiEditComment,
    apiDeleteComment,
    apiVotePost,
} from '../utils/api'

export const SET_POSTS = 'SET_POSTS'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'
export const SET_CURRENT_POST_COMMENTS = 'SET_CURRENT_POST_COMMENTS'
export const CURRENT_POST_ADD_COMMENT = 'SET_CURRENT_ADD_COMMENT'
export const CURRENT_POST_UPDATE_COMMENT = 'SET_CURRENT_UPDATE_COMMENT'
export const CURRENT_POST_REMOVE_COMMENT = 'CURRENT_POST_REMOVE_COMMENT'
export const UPDATE_POST_VOTESCORE = 'UPDATE_POST_VOTESCORE'

export const SET_CATEGORIES = 'SET_CATEGORIES'

export const SET_USER_CURRENT_FILTER_POST_FIELD = 'SET_USER_CURRENT_FILTER_POST_FIELD'
export const SET_USER_CURRENT_FILTER_POST_DIRECTION = 'SET_USER_CURRENT_FILTER_POST_DIRECTION'

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

export function setCurrentPostComments (comments) {
    return {
        type: SET_CURRENT_POST_COMMENTS,
        comments,
    }
}

export function setCategories (categories) {
    return {
        type: SET_CATEGORIES,
        categories,
    }
}

export function fetchCategoriesFromServer () {
    return function (dispatch) {
        return apiFetchCategories().then(res => dispatch(setCategories(res.categories)))
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

export function fetchCommentsFromServer (postId) {
    return function (dispatch) {
        return apiFetchComments(postId).then((res) => dispatch(setCurrentPostComments(res)))
    }
}

export function createPost(post) {
    return function (dispatch) {
        return apiNewPost(post).then((res) => dispatch(fetchPostsFromServer()))
    }
}

export function editPost(post) {
    return function (dispatch) {
        return apiEditPost(post).then((res) => dispatch(fetchPostsFromServer()))
    }
}

export function deletePost(post) {
    return function (dispatch) {
        return apiDeletePost(post).then((res) => dispatch(fetchPostsFromServer()))
    }
}

export function addComment (comment) {
    return function (dispatch) {
        return apiNewComment(comment).then((res) => {
            return dispatch(addCurrentPostComment(comment))
        }) 
    }
}

export function updateComment (comment) {
    return function (dispatch) {
        return apiEditComment(comment).then((res) => {
            return dispatch(updateCurrentPostComment(comment))
        })
    }
}

export function removeComment (comment) {
    return function (dispatch) {
        return apiDeleteComment(comment).then((res) => {
            return dispatch(removeCurrentPostComment(comment))
        })
    }
}

export function setUserCurrentFilterPostField (fieldName) {
    return {
        type: SET_USER_CURRENT_FILTER_POST_FIELD,
        value: fieldName,
    }
}

export function setUserCurrentFilterPostDirection (direction) {
    return {
        type: SET_USER_CURRENT_FILTER_POST_DIRECTION,
        value: direction,
    }
}

export function updateCurrentPostComment (comment) {
    return {
        type: CURRENT_POST_UPDATE_COMMENT,
        comment,
    }
}

export function addCurrentPostComment (comment) {
    return {
        type: CURRENT_POST_ADD_COMMENT,
        comment,
    }
}

export function removeCurrentPostComment (comment) {
    return {
        type: CURRENT_POST_REMOVE_COMMENT,
        comment: { 
            ...comment,
            deleted: true,
        },
    }
}

export function votePostAndUpdateRedux (postId, vote) {
    return function (dispatch) {
        apiVotePost(postId, vote).then(res => dispatch(updatePostVoteScore(res.id, res.voteScore)))
    }
}

export function updatePostVoteScore (postId, voteScore) {
    return {
        type: UPDATE_POST_VOTESCORE,
        id: postId,
        voteScore,
    }
}