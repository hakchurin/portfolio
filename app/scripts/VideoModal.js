import React from 'react';
import ReactPlayer from 'react-player';


export default React.createClass({
  hideModal(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.id !== "modalContent") {
      // this.props.hideModal();
    }
  },
  render() {
    return (
      <div className="modalContainer" onClick={this.hideModal}>
        <div className="modalContent">
          <div className="modalBtnContainer">
            <button className="closeBtn" onClick={this.hideModal}>X</button>
          </div>
          <h2>{this.props.project.name}</h2>
          <ReactPlayer url='https://vimeo.com/151702926' playing />
        </div>
      </div>
    );
  }
});
