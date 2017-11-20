import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostContainer from './posts/components/PostContainer'
import Home from './default/Home'
import Category from './categories/Category'
import { fetchPostsFromServer } from './posts/actions'

class App extends Component {
  componentDidMount () {
    this.props.fetchPostsFromServer()
  }

  render() {
    return (
      <div className="App">
        <header>
          <div class="blog-masthead">
            <div class="container">
              <nav class="nav">
                <Link to="/" className={'nav-link'}>Home</Link>
              </nav>
            </div>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/post/:id" render={(props) => (<PostContainer history={props.history} postId={props.match.params.id}/>)}/>

          <Route path="/category/:category" render={(props) => (<Category categoryName={props.match.params.category}/>)}/>
        </Switch>
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