import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { loginUser } from '../../store/auth/actions';
import logo from '../../logo.png';

const Login = () => {
  const email = useRef('');
  const password = useRef('');
  const navigate = useNavigate();
  const { user, dispatchAuth } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(dispatchAuth, {
        email: email.current.value,
        password: password.current.value,
      });
      if (!response?.foundUser) throw Error('No User Found');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDemoLogin = async () => {
    try {
      let response = await loginUser(dispatchAuth, {
        email: 'test@test.com',
        password: 'test',
      });
      if (!response?.foundUser) throw Error('No User Found');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const showError = (error) => {
    if (error) {
      return (
        <div className='alert alert-danger'>
          <i className='fas fa-exclamation-triangle'></i>
          {error}
        </div>
      );
    } else return null;
  };
  return (
    <div className='auth-card'>
      <img src={logo} alt='' />
      <h4 className='text-light'>Sign In</h4>
      {showError(user.errorMessage)}
      <input
        className='input-text'
        type='email'
        name='email'
        ref={email}
        placeholder='Email'
      />
      <input
        className='input-text'
        type='password'
        name='password'
        ref={password}
        placeholder='Password'
      />
      <span className='d-flex justify-start gap-xs items-center'>
        <input type='checkbox' name='remember-me' id='remember-me' />
        <span>Remember me</span>
      </span>
      <button className='btn btn-secondary text-light' onClick={handleLogin}>
        Sign In
      </button>
      <button className='btn btn-primary text-light' onClick={handleDemoLogin}>
        Demo Login
      </button>
      <span>
        Forgot your password?{' '}
        <Link to='/forgot-password' className='link'>
          Reset
        </Link>
      </span>
      <span>
        Don't have a ReelFlix Account?{' '}
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

export default Login;
