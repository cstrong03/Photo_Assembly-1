import React, { Component } from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu'
import LowerMenu from './components/LowerMenu'

import FeedView from './components/FeedView'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Link, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import { createUser, loginUser } from './services/api'

import blankPic from './assets/placeholder.png'


class App extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: blankPic,
      createdPost: false,
      uploadedFile: '',
      previewLoaded: false,

      token: null,
      email: "",
      username: "",
      password: "",
      createdUser: false,
      isLoggedIn: false
    }
  }

  onChangeHandler = async (token) => {
    await this.setState({
      token: token
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

  onFormChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        console.log("Form Submitted: ")
        const setUser = {
            "email": this.state.email,
            "username": this.state.username,
            "password": this.state.password
        }
        const user = await createUser(setUser)
        console.log(user)
        this.setState({
            createdUser: true
        })
    }

    onLoginSubmit = async (event) => {
      try {
        event.preventDefault();
        console.log("Form Submitted: ")
       
        const setUser = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log(setUser)

        const user = await loginUser(setUser)
        this.onChangeHandler(user.token)
        localStorage.setItem('token', user.token)
        console.log(user)
        console.log(localStorage.getItem('token'))

        this.setState({
            isLoggedIn: true
        })
        } catch (e) {
        console.log("Wrong Username or Password: ", e)
        }
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
        <Switch>
          <Route exact path="/" render={() => <Login 
                username={this.state.username}
                password={this.state.password}
                onFormChange={this.onFormChange} 
                onLoginSubmit={this.onLoginSubmit} 
                />} />
          <Route path="/feed" render={() => <FeedView />} />
          <Route path="/post/create" render={() => <CreatePost />} />
          <Route path="/profile" render={() => <Profile editToken={this.editToken} token={this.state.token} />} />
          <Route path="/login" 
                render={() => <Login 
                username={this.state.username}
                password={this.state.password}
                onFormChange={this.onFormChange} 
                onLoginSubmit={this.onLoginSubmit} 
                />} />
          <Route path="/register" 
                render={() => <Register 
                username={this.state.username} 
                email={this.state.email} 
                password={this.state.password} 
                createdUser={this.state.createdUser} 
                onFormChange={this.onFormChange}
                onFormSubmit={this.onFormSubmit}
                />} />
        </Switch>
        </main>
        <footer>
          <LowerMenu />
        </footer>
      </div>
    );
  }
}

export default App;