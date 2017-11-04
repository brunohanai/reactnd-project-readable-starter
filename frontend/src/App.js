import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Post from './posts/components/Post'
import Home from './default/Home'

class App extends Component {
  componentDidMount() {
    console.log('App did mount...')
  }

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>

        <Route exact path="/" component={Home}/>

        <Route path="/post/:id" component={Post}/>
      </div>
    );
  }
}

export default App