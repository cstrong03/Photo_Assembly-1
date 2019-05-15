import React from 'react';
import './App.css';
import FeedView from './components/FeedView'
import LowerMenu from './components/LowerMenu'
import UpperMenu from './components/UpperMenu'
import CreatePost from './components/CreatePost'
import Login from './components/Login'

function App() {
  return (
    <div >
      <header>
        <UpperMenu />
      </header>
      <main className="ui container custom">
        <FeedView />
      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

export default App;
