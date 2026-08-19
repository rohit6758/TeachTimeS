import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { BookOpen, Calendar, Compass, ClipboardList, User, Menu, Bell } from 'lucide-react';
import './index.css';

// Screen Placeholders
import LearnScreen from './screens/LearnScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';

const Header = () => (
  <div className="header-top">
    <div className="flex items-center gap-3">
      <div className="mobile-nav-only">
        <Menu size={24} color="var(--primary)" />
      </div>
      <div className="header-title" style={{ fontSize: 24 }}>Teach Time</div>
      
      {/* Desktop Navigation */}
      <div className="desktop-nav items-center ml-8">
        <NavLink to="/learn" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <div className="icon-container"><BookOpen size={18} /></div><span>Learn</span>
        </NavLink>
        <NavLink to="/schedule" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <div className="icon-container"><Calendar size={18} /></div><span>Schedule</span>
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <div className="icon-container"><ClipboardList size={18} /></div><span>Orders</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <div className="icon-container"><User size={18} /></div><span>Profile</span>
        </NavLink>
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <Bell size={20} color="var(--text-muted)" />
      <img 
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" 
        alt="User" 
        style={{ width: 36, height: 36, borderRadius: 18, objectFit: 'cover' }} 
      />
    </div>
  </div>
);

const BottomNav = () => (
  <div className="bottom-nav">
    <NavLink to="/learn" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
      <div className="icon-container"><BookOpen size={20} /></div>
      <span>Learn</span>
    </NavLink>
    <NavLink to="/schedule" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
      <div className="icon-container"><Calendar size={20} /></div>
      <span>Schedule</span>
    </NavLink>
    <NavLink to="/hub" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
      <div className="icon-container"><Compass size={20} /></div>
      <span>Hub</span>
    </NavLink>
    <NavLink to="/orders" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
      <div className="icon-container"><ClipboardList size={20} /></div>
      <span>Orders</span>
    </NavLink>
    <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
      <div className="icon-container"><User size={20} /></div>
      <span>Profile</span>
    </NavLink>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="content-area">
          <div className="page-container">
            <Routes>
              <Route path="/learn" element={<LearnScreen />} />
              <Route path="/schedule" element={<ScheduleScreen />} />
              <Route path="/hub" element={<div className="p-5 text-h2 text-center text-muted">Hub Coming Soon</div>} />
              <Route path="/orders" element={<OrdersScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="*" element={<Navigate to="/learn" replace />} />
            </Routes>
          </div>
        </div>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
