import React from 'react'
import { connect } from 'react-redux'
import { fetchPostFromServer } from '../actions'

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPostFromServer(this.props.match.params.id)
    }

    render() {
        const post = this.props.currentPost || null

        return (
            <div>
                {post && (
                    <div>
                        <h1>{post.title}</h1>
                        
                        <p>{post.body}</p>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps ({ currentPost }) {
    return {
        currentPost: currentPost
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchPostFromServer: (data) => dispatch(fetchPostFromServer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)