
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
