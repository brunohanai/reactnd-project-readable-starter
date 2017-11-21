import { connect } from 'react-redux'
import { compose } from 'redux'
import { 
    fetchPostFromServer, 
    fetchCommentsFromServer, 
    setCurrentPost, 
    deletePost, 
    votePostAndUpdateRedux, 
} from '../actions'
import Post from './Post'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ currentPost }, ownProps) => {
    return {
        post: currentPost,        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPost: (data) => dispatch(fetchPostFromServer(data)),
        fetchComments: (data) => dispatch(fetchCommentsFromServer(data)),
        closeCurrentPost: () => dispatch(setCurrentPost(null)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        votePost: (postId, vote) => dispatch(votePostAndUpdateRedux(postId, vote)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Post)