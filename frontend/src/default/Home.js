import React from 'react'
import PostList from '../posts/components/PostList'
import CategoryList from '../categories/CategoryList'
import { connect } from 'react-redux'
import { fetchPostsFromServer } from '../posts/actions'

class Home extends React.Component {
    componentDidMount() {
        console.log('Home did mount...')
        this.props.fetchPostsFromServer()
    }

    render() {
        return (
            <div>
                <CategoryList />
        
                <PostList posts={this.props.posts} />
          </div>
        )
    }
}

// TODO: posso ter "all_posts" e "visible_posts"?
// TODO: aqui posso filtrar e ordenar os posts visiveis?
function mapStateToProps({ posts }) {
    return {
        posts: posts,
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        fetchPostsFromServer: (data) => dispatch(fetchPostsFromServer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)