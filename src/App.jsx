import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/profile" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
