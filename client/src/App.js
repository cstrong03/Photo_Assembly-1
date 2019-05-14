import React from 'react';
import './App.css';
import FeedView from './components/FeedView'
import LowerMenu from './components/LowerMenu'
import CreatePost from './components/CreatePost'

function App() {
  return (
    <div >
      <header></header>
      <main className="ui container">
        <CreatePost />
      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

export default App;
