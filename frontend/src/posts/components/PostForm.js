import React from 'react'
import Modal from 'react-modal'
import { Field } from 'redux-form'

class PostForm extends React.Component {
    renderField = ({ input, label, type, meta, children }) => (
        <div>
            <label>{label}</label>
            <div>
                {['text'].includes(type) && (
                    <input {...input} placeholder={label} type={type} />
                )}

                {'select' === type && (
                    <select {...input}>
                        {children}
                    </select>
                )}

                {'textarea' === type && (
                    <textarea {...input}></textarea>
                )}

                {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
        </div>
    )
    
    render () {
        const { pristine, submitting, handleSubmit } = this.props

        return (
            <Modal
                isOpen={this.props.isVisible}
                onRequestClose={this.props.closeModal}
            >
                <div>
                    <form onSubmit={handleSubmit}>
                        <Field name="title" type="text" component={this.renderField} label="Title"/>
                        
                        <Field name="body" type="textarea" component={this.renderField} label="Body"/>

                        <Field name="author" type="text" component={this.renderField} label="Author"/>
                        
                        {/* TODO: pegar a lista real de categorias */}
                        <Field name="category" type="select" component={this.renderField} label="Category">
                            <option value="">-</option>
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="udacity">Udacity</option>
                        </Field>

                        <button type="submit" disabled={pristine || submitting}>Send</button>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default PostForm