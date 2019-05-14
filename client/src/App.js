import React from 'react';
import './App.css';
import FeedView from './components/FeedView'


function App() {
  return (
    <div >
      <header></header>
      <main className="ui container">
        <FeedView />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
