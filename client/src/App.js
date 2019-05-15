import React from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu'
import LowerMenu from './components/LowerMenu'

import FeedView from './components/FeedView'
import CreatePost from './components/CreatePost'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div >
      <header>
        <UpperMenu />
      </header>
      <main className="ui container custom">
        <Profile />
      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

export default App;
