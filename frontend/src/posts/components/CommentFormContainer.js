import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import CommentForm from './CommentForm'
import { addComment, updateComment } from '../actions'

const mapStateToProps = ({ currentPost }, ownProps) => {
    const defaultNewComment = {
        author: 'eu', // hardcoded ja que nao tem sessao
        parentId: ownProps.postId,
        deleted: false,
        voteScore: 1,
    }

    return {
        initialValues: ownProps.comment || defaultNewComment,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => { 
            data.timestamp = Date.now()

            if (data.id) {
                return dispatch(updateComment(data))
            } else {
                data.id = Date.now()
                return dispatch(addComment(data))
            }
        }
    }
}

const CF = reduxForm()(CommentForm)
export default connect(mapStateToProps, mapDispatchToProps)(CF)