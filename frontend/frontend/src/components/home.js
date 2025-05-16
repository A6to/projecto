import React from 'react';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaUserPlus, FaSignInAlt, FaSearch, FaUserTie, FaHandshake } from 'react-icons/fa';
import './styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <FaExchangeAlt className="logo-icon" />
          <span>SkillSwap Pro</span>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Master New Skills Through Collaborative Exchange</h1>
            <p className="tagline">The professional platform for skill bartering among experts</p>
            
            <div className="auth-buttons">
              <Link to="/register" className="btn btn-primary">
                <FaUserPlus /> Join Now
              </Link>
              <Link to="/login" className="btn btn-secondary">
                <FaSignInAlt /> Sign In
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://i.pinimg.com/736x/ae/ca/fb/aecafb407748eb5aa4bc13be425604b8.jpg"></img>
            
          </div>
        </div>
      </header>

      <main className="value-props">
        <h2 className="section-title">Why Professionals Choose SkillSwap</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-container">
              <FaUserTie className="feature-icon" />
            </div>
            <h3>Curated Network</h3>
            <p>Connect with vetted professionals in your field for quality exchanges</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-container">
              <FaHandshake className="feature-icon" />
            </div>
            <h3>Reciprocal Learning</h3>
            <p>Give and receive expertise in balanced 1:1 skill transactions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-container">
              <FaSearch className="feature-icon" />
            </div>
            <h3>Targeted Matching</h3>
            <p>Our algorithm identifies ideal skill exchange partners</p>
          </div>
        </div>
      </main>

      <section className="cta-section">
        <h2>Ready to Elevate Your Skillset?</h2>
        <div className="auth-buttons">
          <Link to="/register" className="btn btn-primary">
            <FaUserPlus /> Create Professional Profile
          </Link>
        </div>
      </section>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <FaExchangeAlt className="logo-icon" />
            <span>SkillSwap Pro</span>
          </div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className="copyright">© {new Date().getFullYear()} SkillSwap Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;