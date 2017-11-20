import { combineReducers } from 'redux'
import posts from './posts/reducers/reducer'
import currentPost from './posts/reducers/current_post_reducer'
import user from './posts/reducers/user_reducer'
import categories from './categories/reducers/reducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    posts,
    currentPost,
    user,
    categories,
    form: formReducer.plugin({
        // Um pouco estranho colocar isso aqui nesse lugar
        postForm: (state, action) => {
            switch (action.type) {
                case '@@redux-form/SET_SUBMIT_SUCCEEDED':
                    return undefined
                default:
                    return state
            }
        }
    }),
})