import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserProfile from './user.png';
import './Navigation.css';

const MenuItem = ({ to, children }) => (
  <li>
    <NavLink to={to}>
      {children}
    </NavLink>
  </li>
);

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const MenuLinks = () => (
  <header className="nav-container">
    <h1>Bookstore App</h1>
    <nav className="menu-links">
      <ul>
        <MenuItem to="./">Books</MenuItem>
        <MenuItem to="/categories">Categories</MenuItem>
      </ul>
    </nav>
    <li className="userProfile">
      <img src={UserProfile} alt="User Profile" />
    </li>
  </header>
);

export default MenuLinks;
