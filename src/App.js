import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import History from './pages/About';
import './App.css';
; // or './App.css' — whichever contains your styles

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="flex justify-center space-x-4 text-white bg-gray-800 py-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculate">Calculate</Link></li>
          <li><Link to="/about">History</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/about" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
