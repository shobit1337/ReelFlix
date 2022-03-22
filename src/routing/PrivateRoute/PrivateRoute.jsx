import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const PrivateRoute = ({ authRoute }) => {
  const { user } = useAuth();

  if (authRoute) return user.userDetails ? <Navigate to={'/'} /> : <Outlet />;

  return user.userDetails ? <Outlet /> : <Navigate replace to={'/login'} />;
};

export default PrivateRoute;
