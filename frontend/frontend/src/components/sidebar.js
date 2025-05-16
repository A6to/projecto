import React from 'react';
import { 
  FaExchangeAlt,
  FaThLarge,
  FaHome,
  FaPaperPlane,
  FaInbox,
  FaComments,
  FaSignOutAlt
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaExchangeAlt className="sidebar-icon" />
        <span>SkillSwap</span>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <FaThLarge className="nav-icon" />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="/home" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <FaHome className="nav-icon" />
          <span>Home</span>
        </NavLink>
        
        <NavLink 
          to="/sent-requests" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <FaPaperPlane className="nav-icon" />
          <span>Sent Requests</span>
        </NavLink>
        
        <NavLink 
          to="/requests-inbox" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <FaInbox className="nav-icon" />
          <span>Requests Inbox</span>
        </NavLink>
        
        <NavLink 
          to="/chats" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <FaComments className="nav-icon" />
          <span>Chats</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;