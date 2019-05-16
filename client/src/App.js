import React, { Component } from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu'
import LowerMenu from './components/LowerMenu'
import UpdateFeed from './components/UpdateFeed'
import FeedView from './components/FeedView'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Link, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import { createUser, loginUser } from './services/api'
import { fetchPost } from './services/api'

import blankPic from './assets/placeholder.png'


class App extends Component {


  fetchPostData = async()=>{
    const posts = await fetchPost()

    await this.setState({
      posts: posts
    })
    this.showFeedData();
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
      isLoggedIn: false,
      userId: ''
      currentUserId: null,
      description: "",
      avatar: blankPic
      posts: []
    }
  }
      fetchPostData = async()=>{
    const posts = await fetchPost()

    await this.setState({
      posts: posts
    })
    this.showFeedData();

  showFeedData = ()=>{
    const feedData = this.state.posts.map((post)=>{
        return (
          <div>
          <img src={post.image_url} alt={post.caption} />
          <p>{post.createdAt}</p>
          <p>{post.updateAt}</p>
          </div>
        )
    })
    console.log(feedData);
  }


  onChangeHandler = async (token) => {
    await this.setState({
      token: token
    })
    console.log(this.state.token)
  }


  componentDidMount() {
    this.fetchPostData()
    console.log(localStorage.getItem('token'))
    console.log(this.state.username)
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

        handleImageChange(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                picture: reader.result,
                preview: true
            });
        }

        reader.readAsDataURL(file)
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
            isLoggedIn: true,
            userId: user.user.id
        })
        console.log(this.state.userId)
        } catch (e) {
        console.log("Wrong Username or Password: ", e)
        }
    }




  render() {

    if (this.state.isLoggedIn){
      return (
        <div >
          <header>
              <UpperMenu isLoggedIn={this.state.isLoggedIn}/>
          </header>
          <main className="ui container custom">
            <Switch>
              <Route exact path="/" render={() => <FeedView 
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
                    isLoggedIn={this.state.isLoggedIn}
                    username={this.state.username}
                    password={this.state.password}
                    onFormChange={this.onFormChange} 
                    onLoginSubmit={this.onLoginSubmit} 
                    />} />
            </Switch>
          </main>
          <footer>
            <LowerMenu />
          </footer>
        </div>
      )
    }else{
      return (
            <div >
              <header>
                  <UpperMenu isLoggedIn={this.state.isLoggedIn}/>
              </header>
              <main className="ui container custom">
                <Switch>
                  <Route exact path="/" render={() => <FeedView />} />
                  <Route path="/login" 
                        render={() => <Login 
                        username={this.state.username}
                        password={this.state.password}
                        isLoggedIn={this.state.isLoggedIn}
                        onFormChange={this.onFormChange} 
                        onLoginSubmit={this.onLoginSubmit} 
                        />} />
                  <Route path="/register" 
                        avatar={this.state.avatar}
                        handleImageChange={this.handleImageChange}
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
            </div>
      );
    }
  }
}

export default App;