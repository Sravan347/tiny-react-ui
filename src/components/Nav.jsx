import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <p>hello from nav</p>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  );
};

export default Nav;

