import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/sidebar.css';

const SideBar = () => (<div className="sidebar">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topic</Link>
    </li>
    <li>
      <Link to="/Pseudo">Pseudo class</Link>
    </li>
  </ul>
</div>);

export default SideBar;
