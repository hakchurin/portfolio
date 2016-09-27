import React from 'react';
import info from './info';

export default React.createClass({
  getInitialState() {
    return {
      hover: false,
    }
  },
  showImg() {
    console.log(this.props.project);
    this.setState({
      hover: true,
    });
  },
  hideImg() {
    this.setState({hover: false});
  },
  render() {
    let hoverTitle;
    let grayscale;
    if (this.state.hover) {
      hoverTitle = (<h2
        className="hover-title"
        style={{
          transition: 'height 500ms',
          height: '100%',
        }}
      >{this.props.project.name}</h2>);
      grayscale = 'grayscale(80%)';
    } else {
      grayscale = 'grayscale(0%)';
    }
    return (
      <li className="project-li">
        <div
          className="squareImg"
          value="Flatiron"
          ref='project'
          style={{
            backgroundImage: `url(${this.props.project.url})`,
            filter: `${grayscale}`,
            transition: '3500ms',
          }}
          onMouseEnter={this.showImg}
          onMouseLeave={this.hideImg}>
            {hoverTitle}
        </div>
      </li>
    )
  }
});
