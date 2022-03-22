import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { useAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';
import { logout } from '../../store/auth/actions';

const Navbar = () => {
  const { user, dispatchAuth } = useAuth();
  return (
    <header className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='nav-logo' />
        <span> ReelFlix </span>
      </div>
      <div className='d-flex align-center flex-grow justify-between'>
        <SearchBar />
        <nav className='nav-list'>
          {user.userDetails ? (
            <>
              <Link to='profile'>
                <span className='nav-item'>Welcome Shobhit,</span>
              </Link>
              <span className='nav-item' onClick={(e) => logout(dispatchAuth)}>
                Logout
              </span>
            </>
          ) : (
            <>
              {' '}
              <Link to='login'>
                <span className='nav-item'>Login</span>
              </Link>
              <Link to='signup'>
                <span className='nav-item'>Signup</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
