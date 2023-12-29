// import logo from './assets/portrait-circle.png';
// import sub_butt from './assets/submit-arrow.png';
import './App.css';
import './style.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-header">
          <img src={'/assets/portrait-circle.png'} className="App-logo" alt="logo" />
        </div>
        <h1 className="logo-header-headline">Ask me a question!</h1>


        <SearchBar></SearchBar>

      </header>
    </div>
  );
}

export default App;
