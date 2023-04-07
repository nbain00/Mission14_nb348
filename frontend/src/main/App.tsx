import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Podcast from '../Podcasts';
import MoviePage from '../MoviePage';

// Main app
function App() {
  // This function will handle the routing
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" Component={Podcast} />
        <Route path="/movies" Component={MoviePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
