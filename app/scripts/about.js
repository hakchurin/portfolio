import React from 'react';
import ReactPlayer from 'react-player';
import Nav from './nav';
import info from './info';

export default React.createClass({
  render() {
    return (
      <div className="home-component">

        <div className="home-content-container">
                <Nav />
                <div className="box">
        <div className="bio">
          <img src="/assets/haley_img.png" className="haley" />
          <ul className="ul-title">
            <h1 className="homeName"> Haley Akchurin </h1>
            <li>Museum aficionado </li>
            <li>Gym junkie </li>
            <li>Classical music connoisseur </li>
            <li> Reality television indulger</li>



          </ul>
        </div>
        <div className="home-side-container">
           <ReactPlayer url='https://vimeo.com/151702926'  />
           <section>
             <p className="p-about-me">
             Meet Haley. She began her journey with a new Reeves watercolor 12 tube set and a substantial addiction to Microsoft paint. Her mind runs at 100 miles per second overloaded with thoughts and ideas on everything ranging from creative, crisp, and intuitive designs to her next meal. The world around us has made a slight yet significant shift in technology. Therefore, Haley made a solid yet tactical decision in becoming well-versed in both the art of motion graphics and front-development. Haley found it easier to communicate through stylistic graphics and a compelling choice of color, and having a profound set of problem solving skills made her that much more equipped in the areas of troubleshooting and debugging. Haley enjoys learning and  always strives to be a better person than who she was the day before. In order to have hustle, you must have heart and you will take back more than you put in.

             </p>
           </section>
           </div>

         </div>
         </div>
      </div>

    );
    }
});
