import React from 'react';
import './App.css';
import FeedView from './components/FeedView'
import LowerMenu from './components/LowerMenu'


function App() {
  return (
    <div >
      <header></header>
      <main className="ui container">
        <FeedView />
      </main>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

export default App;
