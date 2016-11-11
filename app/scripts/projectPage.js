import React from 'react';
import info from './info';
import Nav from './nav';
import ShadowBox from './ShadowBox';
import VideoModal from './VideoModal';


export default React.createClass({
getInitialState() {
  return {
    project: {},
    videoModal: false,
    showModal: false,
  }
},
hideModal() {
  this.setState({showModal: false});
},
showModal() {
  this.setState({showModal: true});
},
render() {
  let videoBtn = false;
  let videoModal;

  let project = info.filter((object,i)=> {
    if (this.props.params.projectpage === object.projectRoute) {
      if (object.videoURL) {
        videoBtn = (<i className="videoBtn fa fa-desktop" aria-hidden="true" onClick={this.showModal}></i>);
      } else {
        videoBtn = (<a href={object.url}><i className="projectLink fa fa-desktop" aria-hidden="true"></i></a>);
      }
      return object;
    }
  });
  project = project[0];

  if (this.state.showModal) {
    videoModal = (<VideoModal project={project} hideModal={this.hideModal}/>);
  }
  return (
    <div>
      <Nav />
      <section className="projectContentContainer">
        <ShadowBox images={project.shadowBoxImg}/>
        <div className="projectInfoContainer">
        <h2 className="projectName">{project.name}</h2>
          <p className="projectPageInfo">{project.about}</p>
          <div className="linkContainer">
            {videoBtn}
            <a href={project.git} className="github"><i className="projectLink fa fa-github-square github" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>
      {videoModal}
    </div>
  );
}
});



///test
