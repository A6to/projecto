import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/auth';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const { data } = await authService.getUser();
          setUser(data);
        }
      } catch (err) {
        console.error('Auth check failed', err);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, []);

const register = async (firstname, lastname, email, password) => {
  const response = await api.post('/register', {
    firstname,
    lastname,
    email,
    password,
    password_confirmation: password
  });
  
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
  }
  
  return response; // Make sure to return the response
};

const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      setUser(response.data.user); // Set user data from the response
      return { success: true, data: response.data };
    }
    return { success: false, message: 'Login failed - no token received' };
  } catch (err) {
    console.error('Login error:', err);
    return { 
      success: false, 
      message: err.response?.data?.message || 'Login failed' 
    };
  }
};

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);