import React from 'react';
import Nav from './nav';
import router from './router';




export default React.createClass({
  resume() {
    window.open('/assets/haleyAkchurin_resume.pdf');
  },
  render: function(){
    return(
      <div>
        <Nav />
        <div className="resumeStyle">
          <img src="/assets/resume_web.jpg" className="resumeImg" onClick={this.resume}/>
        </div>
      </div>
    );
  }
});
