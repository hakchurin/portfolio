import React from 'react';
import {Link} from 'react-router';
import router from './router';

const Nav = React.createClass({
render: function() {
    return (

        <div className="logo-info">
          <Link to="/" className="logoLink"><img src="/assets/haley-logo.png" className="logo"/>
          <h1> Haley Akchurin </h1></Link>
          <div id="nav-component">
            <ul className="ul-links">
              <li className="li-link"><Link to ="/projects" id="projects">work</Link></li>
              <li className="li-link"><Link to ="/resume" id="resume">resume</Link></li>
              <li className="li-link"><Link to ="/contact" id="contact">contact</Link></li>
              <li className="li-link"><Link to="/about" id="about">about</Link></li>


            </ul>
          </div>
        </div>

    );
  }
});

export default Nav;
