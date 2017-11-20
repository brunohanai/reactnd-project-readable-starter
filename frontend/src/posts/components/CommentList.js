import React from 'react'
import CommentContainer from './CommentContainer'

const CommentList = (props) => (
    <div>
        {props.comments.map(comment => (
            <CommentContainer key={comment.id} comment={comment}/>
        ))}
    </div>
)

export default CommentList