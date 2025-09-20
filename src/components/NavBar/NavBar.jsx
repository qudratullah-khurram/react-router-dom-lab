// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/mailboxes">Mailboxes</Link>
    </li>
    <li>
    <Link to="/new-mailbox">New Mailbox</Link>
    </li>
    <Link to="/new-letter">New Letter</Link>
 </ul>
  </nav>
);

export default NavBar;
