import React from 'react';
import Nav from './nav';
import $ from 'jquery';

export default React.createClass({
  getInitialState(){
    return{
      sentEmail:false,
    }
  },
  contactMe(e){
    e.preventDefault();
    $.ajax({
      url: `https://baas.kinvey.com/rpc/kid_r1EaDaz1e/custom/email`,
      type:'POST',
      data: {
        myEmail:'hdakchurin@gmail.com',
        senderEmail: this.refs.email.value,
        // subjectEmail: this.refs.subject.value,
        message: this.refs.message.value
      },
      success: (r) => {
        // console.log(r);
      },
      error:(r)=> {
        console.log('error', r);
      },
    });
    this.setState({sentEmail:true});
    window.setTimeout(() => {
      this.setState({sentEmail:false});
    }, 7000);

    this.refs.email.value='';
    this.refs.subject.value='';
    this.refs.message.value='';
  },
  render () {
    let contact;
    if(this.state.sentEmail){
      contact= (
        <div>
          <Nav />
          <div className="confirm-sent contactStyle">
            <h2 className="emailHead"> LET'S CHAT! </h2>
            <p className="confirm-p"> Thank You for your email. </p>
          </div>
        </div>
      );
    }else {
      contact=(
          <div>
            <Nav />
            <div className="contactStyle">
              <h2 className="emailHead"> Let's Chat! </h2>

              <form action="contact-form" onSubmit={this.contactMe}>
                <input type="text" className="name" ref="name" placeholder="name" />
                <input type="email" className="email" ref="email" placeholder="email" />
                <input type="text" className="subject" ref="subject" placeholder="subject" />
                <textarea type="text" className="message" ref="message" placeholder="message"></textarea>
                <input type="submit" value="Submit"  className="submit" onClick={this.contactMe}/>
              </form>
            </div>
          </div>
      );
    }
    return (
      <div className="contact-page">
        {contact}
      </div>
    );
  }
});
