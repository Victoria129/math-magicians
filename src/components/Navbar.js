import React from 'react';
import { NavLink } from 'react-router-dom';
import navCSS from './Navbar.module.css';

// eslint-disable-next-line import/prefer-default-export
export const Navbar = () => (
  <nav className={navCSS.nav}>
    <header>
      <h1>Math Magicians</h1>
    </header>
    <NavLink to="/">Home</NavLink>
    |
    <NavLink to="/calculator">Calculator</NavLink>
    |
    <NavLink to="/quote">Quote</NavLink>
  </nav>
);
