
import React from 'react';
import ReactPlayer from 'react-player';
import Nav from './nav';
import info from './info';

export default React.createClass({
  render() {
    return (
      <div className="home-component">
        <Nav />
        <div className="home-content-container">
        <div className="bio">
          <img src="/assets/haley.jpg" className="haley" />
          <ul className="ul-title">
            <li>Haley Akchurin</li>
            <li className="title">Motion Graphic Designer & Front-End Engineer</li>
          </ul>
        </div>
        <div className="home-side-container">
           <ReactPlayer url='https://vimeo.com/151702926' playing />
           <section>
             <p className="p-about-me">
             Greetings! My name is Haley Akchurin, I am a Front-End Engineer and Motion Graphic Designer. Born and Raised in the San Francisco Bay Area, I came into this world a fine artist and grew into a mature Motiongrapher with a BS degree in Motion Graphic Design. I enjoy 3D modeling, title sequences, and color. My hopes are to become a colossal designer, creating an atistic empire that can be translated, understood, and appreciated amongst a wide variety of people. When I am not behind a computer, you can find me in a museum, at the gym, or on the couch catching up on reality television.
             </p>
           </section>
         </div>
         </div>
      </div>
    );
    }
});