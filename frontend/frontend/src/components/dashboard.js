import React from 'react';
import { useAuth } from '../context/authcontext';
import { FaUser, FaEnvelope, FaStar } from 'react-icons/fa';
import Sidebar from './sidebar'; // Import the new component
import './styles/dashboard.css';
import './styles/sidebar.css';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      {/* Use the Sidebar component */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <div className="header-content">
            <h1>Welcome back, {user?.firstname}</h1>
          </div>
        </header>

        <main className="dashboard-main">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">
                {user?.firstname?.charAt(0)}{user?.lastname?.charAt(0)}
              </div>
              <h2>{user?.firstname} {user?.lastname}</h2>
              <p className="member-since">Member since: {new Date(user?.created_at).toLocaleDateString()}</p>
            </div>

            <div className="profile-details">
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{user?.email}</span>
                </div>
              </div>

              <div className="detail-item">
                <FaStar className="detail-icon" />
                <div>
                  <span className="detail-label">SkillSwap Score</span>
                  <span className="detail-value score-value">{user?.score || 0}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-sections">
            <section className="skills-section">
              <h3>Your Owned Skills</h3>
              <div className="skills-grid">
                {/* Replace with actual skills data */}
              </div>
            </section>

            <section className="activity-section">
              <h3>Your wishlist skills</h3>
              <div className="activity-list">
                {/* Replace with actual activity data */}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;