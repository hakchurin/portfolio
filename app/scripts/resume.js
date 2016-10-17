import React from 'react';
import Nav from './nav';




export default React.createClass({
  render: function(){
    return(
      <div>
      <Nav />
      <div className="resumeStyle">
      <img src="/assets/resume.png"/>
      </div>
      </div>
    );
  }
});
