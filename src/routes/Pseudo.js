import React, {Component} from 'react';
import '../assets/css/pseudo.css';

const About = () => {
  return (<div>
    <h2 className="fontbulger">404</h2>
    <p className="fs-20 bold">
    <span className="default">The </span>
    <span className="active">page </span>
    <span className="focus">you </span>
    <span>are </span>
    <span>looking </span>
    <span>for </span>
    <span>is </span>
    <span>not </span>
    <span>found </span>
    </p>
    <p className="first-line"> The first line pseudo class implementation </p>
    <p className="empty"></p>
    <ul className="first-child">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ol>
      <li className="link">
        <a href="http://www.google.com">Link</a>
      </li>
      <li className="visited">
        <a href="http://www.google.com">visited</a>
      </li>
      <li className="hover">
        <a href="http://www.google.com">hover</a>
      </li>
      <li className="active">
        <a href="http://www.google.com">active</a>
      </li>
    </ol>
    <div className="expandLeft">
    </div>
    <img src="https://www.jetmag.com/wp-content/uploads/2017/04/New-Black-Panther-750x375.jpg" className="expandLeft" height="100"/>
  </div>);
}

export default About;
