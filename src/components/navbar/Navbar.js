import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-teal-500 p-4 text-white">
      <ul className="flex justify-around">
        <li><Link to="/" className="text-xl">Home</Link></li>
        <li><Link to="/calculate" className="text-xl">Calculate</Link></li>
        <li><Link to="/about" className="text-xl">Calculate</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
