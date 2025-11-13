import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Admin password (in production, this should be hashed and stored securely)
  const ADMIN_PASSWORD = 'reincarnated2024';
  
  // Session timeout: 2 hours
  const SESSION_TIMEOUT = 2 * 60 * 60 * 1000;

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const loginTime = localStorage.getItem('loginTime');
    
    if (isAdmin && loginTime) {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - parseInt(loginTime);
      
      // Check if session has expired
      if (timeDiff > SESSION_TIMEOUT) {
        logout();
      } else {
        setIsAuthenticated(true);
      }
    }
    
    setIsLoading(false);
  };

  const login = (password) => {
    if (password === ADMIN_PASSWORD) {
      const loginTime = new Date().getTime().toString();
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('loginTime', loginTime);
      setIsAuthenticated(true);
      return { success: true };
    } else {
      return { success: false, error: 'Incorrect password' };
    }
  };

  const logout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('loginTime');
    setIsAuthenticated(false);
    navigate('/admin/login');
  };

  // Auto-logout on session timeout
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      const loginTime = localStorage.getItem('loginTime');
      if (loginTime) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - parseInt(loginTime);
        
        if (timeDiff > SESSION_TIMEOUT) {
          alert('Session expired. Please login again.');
          logout();
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
