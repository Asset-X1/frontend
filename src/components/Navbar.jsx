import React, { useState } from 'react';
import './styles/App.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Task Manager</h1>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-options ${showMenu ? 'show' : ''}`}>
        <a href="#dashboard">Dashboard</a>
        <a href="#tasks">Tasks</a>
        <a href="#profile">Profile</a>
      </div>

      <div className="user-profile">
        <img src="/user.jpg" alt="User" />
        <span>John Doe</span>
      </div>
    </nav>
  );
};

export default Navbar;
