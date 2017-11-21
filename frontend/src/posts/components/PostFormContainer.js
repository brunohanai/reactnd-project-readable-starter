import { compose } from 'redux'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { createPost, editPost } from '../actions'
import { reduxForm } from 'redux-form'

// TODO: fazer de um jeito mais reutilizavel
const validate = (values) => {
    const errors = {}

    if (!values.title) {
        errors.title = 'Required'
    }

    if (!values.body) {
        errors.body = 'Required'
    }

    if (!values.author) {
        errors.author = 'Required'
    }

    if (!values.category) {
        errors.category = 'Required'
    }

    return errors
}

const mapStateToProps = (state, ownProps) => {
    return {
        isVisible: ownProps.isVisible || false,
        closeModal: ownProps.closeModal,
        initialValues: ownProps.post,
        mode: ownProps.mode || 'new',
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createPost: (data) => dispatch(createPost(data)),
        onSubmit: (data) => { 
            if (!data.id) {
                data.id = Date.now() // TODO: onde é melhor eu criar isso?
                data.timestamp = Date.now()
                return dispatch(createPost(data)).then(() => {
                    ownProps.closeModal()
                })
            } else {
                return dispatch(editPost(data)).then(() => {
                    ownProps.closeModal()
                })
            }
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({ form: 'postForm', validate })
)(PostForm)