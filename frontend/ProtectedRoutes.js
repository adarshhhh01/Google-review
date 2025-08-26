import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const [isAuthenticated] = false;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/user-login');
    }
  }, []);

  return (
    children
  )
}
export default ProtectedRoutes