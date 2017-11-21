import { connect } from 'react-redux'
import PostList from './PostList'
import { orderObjectArrayByObjectKey } from '../../utils/order'
import { 
    setUserCurrentFilterPostField,
    setUserCurrentFilterPostDirection,
    votePostAndUpdateRedux,
} from '../actions'

const filterPostsByCategoryName = (posts, categoryName = null) => {
    if (categoryName === null || categoryName === '') {
        return posts
    }

    return posts.filter(post => post.category === categoryName)
}

const orderPosts = (posts, orderField, orderDirection) => {    
    return orderObjectArrayByObjectKey(posts, orderField, orderDirection)
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterPostField: (data) => dispatch(setUserCurrentFilterPostField(data)),
        setFilterPostDirection: (data) => dispatch(setUserCurrentFilterPostDirection(data)),
        votePost: (postId, vote) => dispatch(votePostAndUpdateRedux(postId, vote)),
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: orderPosts(
            filterPostsByCategoryName(state.posts, ownProps.categoryName),
            state.user.current_filter_post_field,
            state.user.current_filter_post_direction,
        ),
        orderField: state.user.current_filter_post_field,
        orderDirection: state.user.current_filter_post_direction,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)