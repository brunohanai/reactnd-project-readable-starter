import React from 'react'
import CommentFormContainer from './CommentFormContainer'
import moment from 'moment'

class Comment extends React.Component {
    state = {
        formVisible: false,
    }

    toggleFormVisibility = () => {
        this.setState((prevState) => { return { formVisible: !prevState.formVisible }})
    }

    render () {
        const { comment } = this.props

        return (
            <div class="comment" key={comment.id} style={{backgroundColor: '#DDD'}}>
                <p>Timestamp: {moment(comment.timestamp).format('MMMM Do YYYY')}</p>
                <p>VoteScore: {comment.voteScore}</p>
                <p>{comment.author}: {comment.body}</p>
                <br/>

                <button onClick={() => this.toggleFormVisibility(true)}>
                    {this.state.formVisible === true ? 'Hide Edit Form' : 'Show Edit Form'}
                </button> 

                <button onClick={() => this.props.deleteComment(comment)}>Delete</button>

                {this.state.formVisible && (
                    <CommentFormContainer form={`commentForm-${comment.id}`} postId={this.props.postId} comment={comment} />
                )}
        </div>
        )
    }
}

export default Comment