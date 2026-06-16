import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>SkillLink</Link>
        
        <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
            <a href="#services" onClick={() => setIsOpen(false)}>Explore Services</a>
            <Link to="#provider" onClick={() => setIsOpen(false)}>Become a Provider</Link>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#contacts" onClick={() => setIsOpen(false)}>Contacts</a>
          </div>

          <div className="nav-actions">
            <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/register" className="btn-get-started" onClick={() => setIsOpen(false)}>Get Started</Link>
          </div>
        </div>

        <button className="menu-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
