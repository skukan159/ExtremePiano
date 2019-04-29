import React, { Component } from 'react';


class PianoKeyElement extends Component {



  constructor(props){
      super(props);
      
      this.audio = new Audio();
      this.playing = false;

      if(this.props.songsrc) this.audio.src = this.props.songsrc;
  }

  render() {
    return(
      <div >
        <h1>I am a piano key</h1>
        {this.props.value}
        {this.checkForPressed()}
      </div>
    );
  }

checkForPressed(){
  if(this.props.pressedKey === this.props.handledKey && this.props.pressedKey){
    console.log(this.props.pressedKey + " = " + this.props.handledKey);
    console.log("Playing note " + this.props.value);
    this.playSong();
  }
}


playSong(){
    this.playing = true;
    
    this.audio.play();
}

pauseSong(){
    this.playing = false;
    this.audio.pause();
}




}

export default PianoKeyElement;