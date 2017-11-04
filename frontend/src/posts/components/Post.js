import React from 'react'
import { connect } from 'react-redux'
import { fetchPostFromServer, setCurrentPost } from '../actions'
import moment from 'moment'

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPostFromServer(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.setCurrentPost(null)
    }

    render() {
        const post = this.props.currentPost || null

        return (
            <div>
                {post && (
                    <div>
                        <h1>{post.title}</h1>
                        
                        <p>
                            {post.author}, {moment(post.timestamp).format('MMMM Do YYYY')}
                        </p>
                        
                        <p>voteScore: {post.voteScore}</p>
                        
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
        fetchPostFromServer: (data) => dispatch(fetchPostFromServer(data)),
        setCurrentPost: (data) => dispatch(setCurrentPost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)