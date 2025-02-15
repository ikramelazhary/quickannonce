import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteGuard = ({ roleRequired, children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RouteGuard;
