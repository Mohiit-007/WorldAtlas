import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext';

const ProtectedRoute = ({ children, requiredRoles = null }) => {
  const { isAuthenticated, hasPermission, loading, user } = useAuth();

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access
  if (requiredRoles && !hasPermission(requiredRoles)) {
    return (
      <div className="unauthorized-container">
        <h1>Access Denied</h1>
        <p>You don't have permission to access this page.</p>
        <p>Your current role: <strong>{user?.role}</strong></p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
