import React from 'react';
import {Link} from 'react-router';
import router from './router';




const Nav = React.createClass({

render: function() {
    return (
      <div>
      <div className="logo-info">
      <img src="/assets/logo.png" className="logo"/>
      <h1> Haley Akchurin </h1>

      <div id="nav-component">
        <ul className="ul-links">
          <li className="li-link"><Link to="/home" id="home">HOME</Link></li>
          <li className="li-link"><Link to ="/projects" id="projects">PROJECTS</Link></li>
          <li className="li-link"><Link to ="/resume" id="resume">RESUME</Link></li>
          <li className="li-link"><Link to ="/contact" id="contact">CONTACT</Link></li>
        </ul>
        </div>

      </div>
      </div>

    );
  }
});

        export default Nav;
