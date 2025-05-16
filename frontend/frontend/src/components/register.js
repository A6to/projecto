import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaExchangeAlt, FaSpinner } from 'react-icons/fa';
import './styles/register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Frontend validation
  if (formData.password !== formData.password_confirmation) {
    setErrors({ password_confirmation: ['Passwords do not match'] });
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await register(
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.password,
      formData.password_confirmation
    );

    // Successful registration
    if (response?.data?.access_token) {
      navigate('/dashboard');
      return;
    }

    // Handle other success cases
    if (response?.data?.success) {
      navigate('/dashboard');
      return;
    }

    // Handle error responses
    if (response?.data?.errors) {
      setErrors(response.data.errors);
    } else if (response?.data?.message) {
      setErrors({ general: [response.data.message] });
    } else {
      setErrors({ general: ['Registration failed. Please try again.'] });
    }
  } catch (err) {
    // Network errors or server errors
    if (err.response?.data?.errors) {
      setErrors(err.response.data.errors);
    } else if (err.response?.data?.message) {
      setErrors({ general: [err.response.data.message] });
    } else {
      setErrors({ general: ['An unexpected error occurred. Please try again.'] });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <FaExchangeAlt className="swap-icon" />
          <h2>Join the SkillSwap Community</h2>
          <p>Create your account to start trading skills</p>
        </div>

        {/* Display general errors */}
        {errors.general && (
          <div className="error-message general-error">
            {errors.general.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          {/* First Name Field */}
          <div className="input-group">
            <div className={`input-field ${errors.firstname ? 'error' : ''}`}>
              <FaUser className="input-icon" />
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            {errors.firstname && (
              <div className="error-message">
                {errors.firstname.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Last Name Field */}
          <div className="input-group">
            <div className={`input-field ${errors.lastname ? 'error' : ''}`}>
              <FaUser className="input-icon" />
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            {errors.lastname && (
              <div className="error-message">
                {errors.lastname.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="input-group">
            <div className={`input-field ${errors.email ? 'error' : ''}`}>
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <div className="error-message">
                {errors.email.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="input-group">
            <div className={`input-field ${errors.password ? 'error' : ''}`}>
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password (min 8 characters)"
              />
            </div>
            {errors.password && (
              <div className="error-message">
                {errors.password.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="input-group">
            <div className={`input-field ${errors.password_confirmation ? 'error' : ''}`}>
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>
            {errors.password_confirmation && (
              <div className="error-message">
                {errors.password_confirmation.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="spinner-icon" />
                Processing...
              </>
            ) : (
              <>
                <FaExchangeAlt /> Start Swapping Skills
              </>
            )}
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <a href="/login">Sign In</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;