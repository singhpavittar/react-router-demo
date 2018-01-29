import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/header.css';
import '../../assets/css/main.css';
import FA from 'react-fontawesome';

const Header = () => (<div className="container flex-row">
  <div className="header">
    <FA name="cubes" className="brand-icon"/>
    <span className="brand">Header</span>
  </div>
</div>);

export default Header;
