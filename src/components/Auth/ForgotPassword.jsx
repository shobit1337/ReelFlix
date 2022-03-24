import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const ForgotPassword = () => {
  return (
    <div className='auth-card'>
      <img src={logo} alt='' />
      <h4 className='text-light'>Reset Password</h4>
      <input
        className='input-text'
        type='email'
        name='email'
        id='email'
        placeholder='Email'
      />
      <button className='btn btn-secondary text-light'>RESET</button>
      <span>
        Have an account?
        <Link to='/login' className='link'>
          Sign In
        </Link>
      </span>
      <span>
        Don't have a ReelFlix Account?
        <Link to='/signup' className='link'>
          Sign Up
        </Link>
      </span>
      <span>
        Back to{' '}
        <Link to='/' className='link'>
          Store
        </Link>
      </span>
    </div>
  );
};

export default ForgotPassword;
