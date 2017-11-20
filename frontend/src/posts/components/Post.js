import React from 'react'
import moment from 'moment'
import PostFormContainer from './PostFormContainer'
import CommentFormContainer from './CommentFormContainer'
import CommentListContainer from './CommentListContainer'

class Post extends React.Component {
    state = {
        isFormVisible: false,
    }

    showForm = () => {
        this.setState({ isFormVisible: true })
    }

    // TODO: alterar o "closeModal" para "afterSubmit"
    hideForm = () => {
        this.setState({ isFormVisible: false })
        this.props.fetchPost(this.props.postId).then(() => this.props.fetchComments(this.props.postId))
    }

    deletePost = () => {
        this.props.deletePost(this.props.postId).then(() => {
            this.props.history.push('/')
        })
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId).then(() => this.props.fetchComments(this.props.postId))
    }

    componentWillUnmount() {
        this.props.closeCurrentPost()
    }

    render() {
        const post = this.props.post || null

        return (
            <div>
                {post && (
                    <div class="blog-post" key={post.id}>    
                        <PostFormContainer 
                            post={post} 
                            mode='edit' 
                            closeModal={this.hideForm} 
                            isVisible={this.state.isFormVisible}
                        />

                        <h2 class="blog-post-title">{post.title}</h2>

                        <button onClick={() => this.showForm()}>Edit</button>
                        <button onClick={() => this.deletePost(post.id)}>Delete</button>
                    
                        <p class="blog-post-meta">
                            {moment(post.timestamp).format('MMMM Do YYYY')}
                            , by {post.author}
                            . [voteScore: {post.voteScore}]
                        </p>
                        <p>{post.body}</p>

                        <hr/>

                        <h2>Comments</h2>
                        <CommentFormContainer form={'commentForm-new'} postId={this.props.postId}/>
                        <CommentListContainer postId={post.id}/>
                    </div>
                )}
            </div>
        )
    }
}

export default Post