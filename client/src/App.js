import React from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu'
import LowerMenu from './components/LowerMenu'

import FeedView from './components/FeedView'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Link } from 'react-router-dom'
import Profile from './components/Profile'



function App() {
  return (
    <div >
      <header>
        <Link to="/">
          <UpperMenu />
        </Link>
      </header>
      <main className="ui container custom">
        <Route exact path="/" render={() => <Register />} />
        <Route path="/feed" render={() => <FeedView />}/>
        <Route path="/post/create" render={() => <CreatePost/>}/>
        <Route path="/profile" render={() => <Profile />}/>

      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

export default App;
