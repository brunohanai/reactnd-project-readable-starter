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

          <Route exact path="/:category" render={(props) => (<Category categoryName={props.match.params.category}/>)}/>

          <Route path="/:category/:id" render={(props) => (<PostContainer history={props.history} postId={props.match.params.id}/>)}/>
        </Switch>
      </div>
    );
  }
}

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