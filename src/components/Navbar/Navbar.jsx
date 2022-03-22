import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='nav-logo' />
        <span> ReelFlix </span>
      </div>
      <div className='d-flex align-center flex-grow justify-between'>
        <SearchBar />
        <nav className='nav-list'>
          <span className='nav-item'>Login</span>
          <span className='nav-item'>Signup</span>
          <span className='nav-item'>Welcome Shobhit,</span>
          <span className='nav-item'>Logout</span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
