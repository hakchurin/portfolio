import React from 'react';
import {Router, Route} from 'react-router';
import Nav from './nav';
import ProjectsPreview from './ProjectsPreview';
import info from './info';
import ShadowBox from './ShadowBox';




export default React.createClass({
render(){
  let project = info.filter((object,i)=> {
    if (this.props.params.projectpage === object.projectRoute){
      return object;
    }

  })
  project=project[0];
  return (
    <div>
      <Nav />
      <section className="projectContentContainer">
        <ShadowBox images={project.shadowBoxImg}/>
        <div className="projectInfoContainer">
        <h2 className="projectName">{project.name}</h2>

          <p className="projectPageInfo"> {project.about}  </p>
          <div className="linkContainer">
          <a href={project.url}><i className="fa fa-desktop" aria-hidden="true"></i></a>
          <a href={project.git} className="github"><i className="fa fa-github-square github" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>
    </div>
  )
}
});
