import React from 'react'
import { apiFetchPosts } from '../utils/api'
import PostList from '../posts/components/PostList'

class Category extends React.Component {
    state = {
        posts: []
    }

    componentDidMount () {
        if (this.props.match.params.category) {
            apiFetchPosts(this.props.match.params.category).then((res) => {
                this.setState({
                    posts: res
                })
            })
        }
    }

    render () {
        return (
            <div>
                <div>Category</div>

                <PostList posts={this.state.posts}/>
            </div>
        )
    }
}

export default Category