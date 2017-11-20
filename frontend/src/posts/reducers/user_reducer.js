import {
    SET_USER_CURRENT_FILTER_POST_FIELD,
    SET_USER_CURRENT_FILTER_POST_DIRECTION,
} from '../actions'

const defaultValues = {
    current_filter_post_field: 'voteScore',
    current_filter_post_direction: 'desc',
}

function user (state = defaultValues, action) {
    switch (action.type) {
        case SET_USER_CURRENT_FILTER_POST_FIELD:
            return { ...state, current_filter_post_field: action.value }
        case SET_USER_CURRENT_FILTER_POST_DIRECTION:
            return { ...state, current_filter_post_direction: action.value }
        default: 
            return state
    }
}

export default user