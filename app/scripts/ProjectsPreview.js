import React from 'react';
import info from './info';
import projectPage from './projectPage';
import {Router, Route, browserHistory} from 'react-router';



export default React.createClass({
  getInitialState() {
    return {
      hover: false,
    }
  },
  showImg() {
    this.setState({
      hover: true,
    });
  },
  hideImg() {
    this.setState({hover: false});
  },
  goToProject() {
    browserHistory.push(`/projects/${this.props.project.projectRoute}`);
  },
  render() {
    let hoverTitle;
    let grayscale;
    let hoverImg;
    if (this.state.hover) {
      hoverTitle = (<h2
        className="hover-title"
        style={{
          transition: 'height 500ms',
          height: '100%',
          width: '100%',
          filter:'grayscale(0%)',
        }}>
        {this.props.project.name}</h2>);
        grayscale = 'grayscale(100%)';
    } else {
      grayscale= 'grayscale(0%)'
    }
    return (
      <li className="project-li" onMouseEnter={this.showImg} onMouseLeave={this.hideImg} onClick={this.goToProject}>
        <div className="squareImg" value="Flatiron" ref='project'
          style={{
            backgroundImage: `url(${this.props.project.image})`,
            filter: `${grayscale}`,
            transition: '900ms',
          }}>
        </div>
        <div className='title-container' style={{filter:`grayscale(0)`}} onMouseLeave={this.hideImg}>
          {hoverTitle}
        </div>
      </li>
    )
  }
});
