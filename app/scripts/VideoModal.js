import React from 'react';
import ReactPlayer from 'react-player';


export default React.createClass({
  hideModal(e) {
    e.preventDefault();
    if (e.target.id === "modalContainer" || e.target.id === "closeModalBtn") {
      this.props.hideModal();
    }
  },
  render() {
    return (
      <div id="modalContainer" onClick={this.hideModal}>
        <div id="modalContent">
          <div className="modalBtnContainer">
            <button id="closeModalBtn" onClick={this.hideModal}>X</button>
          </div>
          <h2>{this.props.project.name}</h2>
          <ReactPlayer url={this.props.project.videoURL} playing />
        </div>
      </div>
    );
  }
});
