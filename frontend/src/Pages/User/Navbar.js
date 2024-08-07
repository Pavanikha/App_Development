import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/CSS/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/course" className="navbar-link">All Programs</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Get a Call Back!</Link>
        </li>
      </ul>
      <ul className="navbar-profile">
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <span className="navbar-link">
            <FontAwesomeIcon icon={faUser} />
          </span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/my-courses" className="navbar-link">
                  <FontAwesomeIcon icon={faBook} /> My Courses
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/profile" className="navbar-link">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/login" className="navbar-link">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
