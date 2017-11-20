import React from 'react'
import { Field } from 'redux-form'

const CommentForm = ({ pristine, submitting, handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <Field name="body" component="input" type="textarea" placeholder="Text"/>

            <button type="submit" disabled={pristine || submitting}>Send</button>
        </form>
    </div>
)

export default CommentForm