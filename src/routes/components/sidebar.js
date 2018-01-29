import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/main.css';
import FA from 'react-fontawesome';

const SideBar = () => (<div className="flex-basis-20 full-height">
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
