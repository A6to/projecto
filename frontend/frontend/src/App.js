import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authcontext'; // Added useAuth import
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';
import GuestOnlyRoute from './components/GuestOnlyRoute';
import Chat from './components/chat'; // Adjust path if needed


// Moved PrivateRoute component outside of App
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={
            <GuestOnlyRoute>
              <Register />
            </GuestOnlyRoute>
          } />          
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/chats" 
            element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
            }/>
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;