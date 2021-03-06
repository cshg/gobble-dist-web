import React from 'react';
import { Link } from 'react-router';

const UserAppNavbar = () => (
  <div className="user-app-navbar pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><Link to="/feed" className="pure-menu-link">Feed</Link></li>
      <li className="pure-menu-item"><Link to="/popular" className="pure-menu-link">Popular</Link></li>
      <li className="pure-menu-item"><Link to="/ripple" className="pure-menu-link">Rippling</Link></li>
    </ul>
  </div>
);

export default UserAppNavbar;
