import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="dark-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/my-logo.png" alt="Logo" className="logo-img" />
            <span className="logo-text">Strovie</span>
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/policy">Privacy&Policy</Link></li>
            <li><Link to="/terms&condition">Terms&Condition</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
