import { connect } from 'react-redux'
import CommentList from './CommentList'
import { orderObjectArrayByObjectKey } from '../../utils/order'

const orderComments = (comments) => {
    return orderObjectArrayByObjectKey(comments, 'voteScore', 'desc')
}

const filterActiveComments = (comments) => {
    return comments.filter(comment => comment.deleted === false)
}

const mapStateToProps = ({ currentPost }) => {
    return {
        comments: orderComments(filterActiveComments(currentPost.comments || [])),
    }
}

export default connect(mapStateToProps, null)(CommentList)