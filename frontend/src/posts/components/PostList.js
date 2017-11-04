import React from 'react'
import { Link } from 'react-router-dom'
import { orderObjectArrayByObjectKey } from '../../utils/order'

class PostList extends React.Component {
    orderOptions = {
        1: { by: 'voteScore', dir: 'asc' },
        2: { by: 'voteScore', dir: 'desc' },
        3: { by: 'timestamp', dir: 'asc' },
        4: { by: 'timestamp', dir: 'desc' },
    }

    state = {
        orderOption: 2,
        postsToShow: [],
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.posts !== this.props.posts) {
            this.setPostsToShow(nextProps.posts)
        }
    }

    setPostsToShow = (posts) => {
        this.setState({
            postsToShow: this.getOrderedPosts(posts, this.state.orderOption),
        })
    }

    getOrderedPosts = (posts, order_option) => {
        const orderOptions = this.orderOptions[order_option]

        return orderObjectArrayByObjectKey(posts, orderOptions.by, orderOptions.dir)
    }

    handleOrderByChange = (event) => {
        this.setState({
            orderOption: event.target.value,
        }, () => this.setPostsToShow(this.state.postsToShow))
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>

                <select value={this.state.orderOption || 1} onChange={this.handleOrderByChange}>
                    <option value="1">voteScore asc</option>
                    <option value="2">voteScore desc</option>
                    <option value="3">timestamp asc</option>
                    <option value="4">timestamp desc</option>
                </select>

                <ul>
                    {this.state.postsToShow.map((post) => (
                        <li key={post.id}>                            
                            <Link to={`/post/${post.id}`}>
                                {post.title}
                                 ({post.voteScore}) ({post.timestamp})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PostList