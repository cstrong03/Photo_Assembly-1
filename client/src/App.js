import React, { Component } from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu'
import LowerMenu from './components/LowerMenu'

import FeedView from './components/FeedView'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Link } from 'react-router-dom'
import Profile from './components/Profile'
import { createUser } from './services/api'

import blankPic from './assets/placeholder.png'


class App extends Component {
  state = {
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
        // const element = event.target
        // const name = element.name
        // const value = element.value
        const { name, value } = event.target;
        // console.log(name, value)
        // const newState = {}
        // newState[name] = value
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
            created: true
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
          <Route exact path="/" render={() => <Login onChangeHandler={this.onChangeHandler} />} />
          <Route path="/feed" render={() => <FeedView />} />
          <Route path="/post/create" render={() => <CreatePost />} />
          <Route path="/profile" render={() => <Profile editToken={this.editToken} token={this.state.token} />} />
          <Route path="/login" render={() => <Login onChangeHandler={this.onChangeHandler} />} />
          <Route path="/register" 
                render={() => <Register 
                username={this.state.username} 
                email={this.state.email} 
                password={this.state.password} 
                createdUser={this.state.createdUser} 
                onFormChange={this.onFormChange}
                onFormSubmit={this.onFormSubmit}
                createdUser={this.state.createdUser}
            />} />

        </main>
        <footer>
          <LowerMenu />
        </footer>
      </div>
    );
  }
}

export default App;
