import React from 'react';
import './main/App.css';
import TopBanner from './Blah';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner saying="Joel's Movie Page" />
      <img src="./joel.jpg" alt="Joel" />
    </div>
  );
}

export default Home;
