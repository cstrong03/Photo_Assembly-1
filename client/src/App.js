import React, { Component}  from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu'
import LowerMenu from './components/LowerMenu'

import FeedView from './components/FeedView'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Link } from 'react-router-dom'
import Profile from './components/Profile'



class App extends Component {
  state = {
    token: null
  }

  onChangeHandler = async (token) => {
    await this.setState({
      token:token
    })
    console.log(this.state.token)
  }

  componentDidMount() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') != null) {
      this.setState({
        token: localStorage.getItem('token')
      })
    }
  }

  editToken = (token) => {
    this.setState({
      token: token
    })
  }

  render() {
  return (
    <div >
      <header>
        <Link to="/">
          <UpperMenu />
        </Link>
      </header>
      <main className="ui container custom">
        <Route exact path="/" render={() => <Login onChangeHandler={this.onChangeHandler}/>} />
        <Route path="/feed" render={() => <FeedView />}/>
        <Route path="/post/create" render={() => <CreatePost/>}/>
        <Route path="/profile" render={() => <Profile editToken={this.editToken} token={this.state.token} />}/>
        <Route path="/login" render={() => <Login onChangeHandler={this.onChangeHandler}/>} />
        <Route path="/register" render={() => <Register />} />
      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
  }
}

export default App;
