import { connect } from 'react-redux'
import { removeComment } from '../actions'
import Comment from './Comment'

const mapStateToProps = (state, ownProps) => {
    return {
        comment: ownProps.comment,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (data) => dispatch(removeComment(data)),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Comment)