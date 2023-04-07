import React from 'react';
import './main/App.css';
import TopBanner from './Blah';
import Navbar from './Navbar';

function Podcast() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner saying="My Podcasts" />
      <a href="https://baconsale.com">Link to Podcast</a>
    </div>
  );
}

export default Podcast;
