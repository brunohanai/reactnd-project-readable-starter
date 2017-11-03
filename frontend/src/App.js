import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchPostsFromServer } from './posts/actions';
import { Route, Link, withRouter } from 'react-router-dom';
import PostList from './posts/components/PostList';
import Post from './posts/components/Post';

class App extends Component {
  componentDidMount() {
    console.log('App did mount...')
  
    // TODO: preciso fazer o fetch so na pagina inicial
    this.props.fetchPostsFromServer()
  }

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>

        <Route exact path="/" render={() => (
          <div>
            <h3>Categories</h3>
            <p>...</p>
        
            <PostList posts={this.props.posts} />
          </div>
        )}/>

        <Route path="/post/:id" component={Post}/>
      </div>
    );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
