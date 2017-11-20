import { SET_CATEGORIES } from '../../posts/actions' // TODO: refactor do arquivo actions

function categories (state = [], action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

export default categories