import React from 'react';
import './App.css';
import FeedView from './components/FeedView'
import LowerMenu from './components/LowerMenu'
import UpperMenu from './components/UpperMenu'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div >
      <header>
        <UpperMenu />
      </header>
      <main className="ui container custom">
        <Register />
      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

export default App;
