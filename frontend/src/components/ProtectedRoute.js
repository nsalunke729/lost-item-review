// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Import the correct AuthContext

const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);  // Use the AuthContext to get the user

  // Handle loading state, if user is undefined, show loading
  if (user === undefined) {
    return <p>Loading...</p>;
  }

  return user ? children : <Navigate to="/login" />;  // Redirect to login if not authenticated
};

export default ProtectedRoute;
