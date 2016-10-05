import React from 'react';

export default React.createClass({
  getInitialState(){
    return {
      images: this.props.images,
      currentImg: 0,
      slide: '',
    }
  },
  showNext(){
    let newCurrentImg;
    this.setState({slide: 'slide-out-left'});

    if (this.state.currentImg === this.state.images.length -1){
      newCurrentImg = 0;
    } else if (this.state.currentImg < (this.state.images.length - 1)){
      newCurrentImg = this.state.currentImg + 1;
    }
    window.setTimeout(() => {
      this.setState({
        currentImg: newCurrentImg,
        slide: 'slide-in-right',
      });
    }, 500);

  },
  showBack(){
    this.setState({slide: 'slide-out-right'});

    let newCurrentImg;
    if(this.state.currentImg > 0) {
      newCurrentImg = this.state.currentImg - 1;
    } else {
      newCurrentImg = this.state.images.length - 1;
    }

    window.setTimeout(() => {
      this.setState({
        currentImg: newCurrentImg,
        slide: 'slide-in-left',
      });
    }, 500);

  },
  skipToImg(e) {
    this.setState({currentImg:e.target.value});
  },
  componentDidMount(){
    this.setState({currentImg:0});
  },

  render() {
    let shadowBtns = this.state.images.map((img,i)=>{
      let shadowLi = (<li className="shadowLiBtn" key={i} value={i} onClick={this.skipToImg}></li>);
      return  shadowLi;
    });

        return(
        <div className="shadowBoxComp">
          <figure id={this.state.slide} className="shadowBoxImg" style={{backgroundImage:`url(${this.state.images[this.state.currentImg]})`}}></figure>
          <div className="buttonContainer">
            <i onClick={this.showBack} className="shadowBtn backBtn fa fa-chevron-circle-left" aria-hidden="true"></i>
            <ul className="shadowUlBtn">
              {shadowBtns}
            </ul>
            <i onClick={this.showNext} className="shadowBtn nextBtn fa fa-chevron-circle-right" aria-hidden="true"></i>
          </div>
        </div>
    );
  }
});