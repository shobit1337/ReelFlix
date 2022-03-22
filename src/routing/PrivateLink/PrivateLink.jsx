import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const PrivateLink = ({ to, children }) => {
  const { user } = useAuth();

  return user.userDetails ? (
    <Link to={to}>{children}</Link>
  ) : (
    <Link to='login'>{children}</Link>
  );
};

export default PrivateLink;
