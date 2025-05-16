import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt, FaSpinner } from 'react-icons/fa';
import './styles/login.css'; // We'll create this CSS file

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when typing
    if (errors[e.target.name] || errors.general) {
      setErrors({ ...errors, [e.target.name]: null, general: null });
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrors({});
  
  try {
    const { success, message, data } = await login(formData.email, formData.password);
    
    if (success) {
      console.log('Login successful!', data);
      navigate('/dashboard', { replace: true }); // Force navigation
    } else {
      setErrors({ general: message || 'Login failed' });
    }
  } catch (err) {
    setErrors({ 
      general: err.response?.data?.message || 'An error occurred during login' 
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back to SkillSwap</h2>
          <p>Sign in to continue your skill exchange journey</p>
        </div>

        {errors.general && (
          <div className="error-message general-error">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className={`input-field ${errors.email ? 'error' : ''}`}>
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="username"
              />
            </div>
            {errors.email && (
              <div className="error-message">{errors.email[0]}</div>
            )}
          </div>

          <div className="input-group">
            <div className={`input-field ${errors.password ? 'error' : ''}`}>
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            {errors.password && (
              <div className="error-message">{errors.password[0]}</div>
            )}
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="spinner-icon" />
                Signing In...
              </>
            ) : (
              <>
                <FaSignInAlt /> Sign In
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <Link to="/register">Create one</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;