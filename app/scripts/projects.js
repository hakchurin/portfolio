
import React from 'react';
import ReactPlayer from 'react-player';
import Nav from './nav';
import info from './info';
import ProjectsPreview from './ProjectsPreview';


export default React.createClass({
  render() {
    let projectsArr = info.map((project, i) => {
      return (<ProjectsPreview showImg={this.showImg} hideImg={this.hideImg} project={project} key={i}/>);
    });
    return (
      <div className="home-component" >
        <Nav />
        <ul className="project-img">
          {projectsArr}
        </ul>
      </div>

    );
    }
});


//
//
//
// <li className="squareImg"><img src="/assets/sohColor.png" className="soh" /></li>
// <li className="squareImg"><img src="/assets/stbColor.png" className="stb" /></li>
// <li className="squareImg"><img src="/assets/vh1Color.png" className="vh1" /></li>
// <li className="squareImg"><img src="/assets/watchColor.png" className="watch" /></li>
// <li className="squareImg"><img src="/assets/btbColor.png" className="btb" /></li>
// <li className="squareImg"><img src="/assets/snackColor.png" className="snack" /></li>
// <li className="squareImg"><img src="/assets/wildernessColor.png" className="snack" /></li>
// <li className="squareImg"><img src="/assets/saturnColor.png" className="snack" /></li>
