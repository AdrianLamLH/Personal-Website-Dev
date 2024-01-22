import './style.css';
import React from 'react';
import SearchBar from './components/SearchBar';

function Home() {

  return (
    
    <div className="Home">
      <header className="Home-header">
        <div className="logo-header">
          <img src={'/assets/portrait-circle.png'} className="Home-logo" alt="logo" />
        </div>
        <h1 className="logo-header-headline">Learn more about me!</h1>


        <SearchBar></SearchBar>

      </header>
    </div>
  );
}

export default Home;
