import React, { Component } from 'react';


class PianoKeyElement extends Component {



  constructor(props){
      super(props);
      this.playing = false;
      //if(this.props.noteAudio) { console.log("Note audio: " + this.props.noteAudio); this.audio = new Audio(this.props.noteAudio);}
  }

  render() {
    return(
      <div className="RandomMessage">
        {this.props.value}
        {this.checkForPressed()}
        {this.checkForKeyReleased()}
      </div>
    );
  }

checkForPressed(){
  if(this.props.pressedKey && this.props.pressedKey === this.props.handledKey && this.props.wasPressed === true){
    return this.playSong();
  }
}


playSong(){
    if(this.playing === false)
    {
      if(this.props.noteAudio) { console.log("Note audio: " + this.props.noteAudio); this.audio = new Audio(this.props.noteAudio);}
      if(this.audio) {  this.audio.play(); this.playing = true; return(<div className="IsBeingPlayed">{this.returnRandomMessage()}</div>);}

    }
}

pauseSong(){
    this.playing = false;
    this.audio.pause();


}

checkForKeyReleased(){
  if(this.props.pressedKey && this.props.pressedKey === this.props.handledKey && this.playing === true && this.props.wasPressed === false){
    this.playing = false;
    return(<div></div>);
  }
}

returnRandomMessage(){
  let generatedInt = this.randomIntFromInterval(0,13);
  let returnedMessage = "Ow";
  switch(generatedInt){
    case 0:
      returnedMessage =  "Ouch, cut your nails!";
    break;
    case 1:
    returnedMessage =  "Stop it";
    break;
    case 2:
    returnedMessage =  "That hurts!";
    break;
    case 3:
    returnedMessage =  "Hit me baby one more time.";
    break;
    case 4:
    returnedMessage =  "Such wow! Much Responsive!";
    break;
    case 5:
    returnedMessage =  "Gentle please!";
    break;
    case 6:
    returnedMessage =  "Stop it";
    break;
    case 7:
    returnedMessage =  "No means no!";
    break;
    case 8:
    returnedMessage =  "Careful, I am gassy today.";
    break;
    case 9:
    returnedMessage =  "Are you flirting with me?";
    break;
    case 10:
    returnedMessage =  "UX Over 9000!!";
    break;
    case 11:
    returnedMessage =  "I am calling the police.";
    break;
    case 12:
    returnedMessage =  "Did you at least wash your hands?";
    break;
    case 13:
    returnedMessage =  'I am "touched", haha get it? No? Ok. ';
    break;
    default: break;

  }

  return <p className="RandomMessage">{returnedMessage}</p>

}


randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


}

export default PianoKeyElement;