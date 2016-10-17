import React from 'react';
import Nav from './nav';


export default React.createClass({
  render: function(){
    return (
      <div>
      <Nav />
      <div className="contactStyle">
      <form action="contact-form">
        <input type="text" className="name" placeholder="name" />
        <input type="text" className="email" placeholder="email" />
        <input type="text" className="message" placeholder="message"/>
        <input type="submit" value="Submit" className="submit" />
      </form>
      </div>

      </div>
    );
  }
});
