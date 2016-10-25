import React from 'react';
import Nav from './nav';
import router from './router';




export default React.createClass({
  resume() {
    window.open('/assets/HaleyAkchurin_Resume.pdf');
  },
  render: function(){
    return(
      <div>
        <Nav />
        <div className="resumeStyle">
          <img src="/assets/resume.png" className="resumeImg" onClick={this.resume}/>
        </div>
      </div>
    );
  }
});
