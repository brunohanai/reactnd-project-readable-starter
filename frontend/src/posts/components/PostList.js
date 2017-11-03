import React from 'react'
import { Link } from 'react-router-dom'

class PostList extends React.Component {
    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul>
                    {this.props.posts.map((post) => (
                        <li key={post.id}>                            
                            <Link to={`/post/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PostList