import React, { Component } from 'react';
import dogePic1 from '../img/DogePics/doge_much_wow01.jpg';
import dogePic2 from '../img/DogePics/doge_much_wow02.jpg';
import dogePic3 from '../img/DogePics/doge_much_wow03.png';
import dogePic4 from '../img/DogePics/doge4.jpg';
import dogePic5 from '../img/DogePics/doge5.jpg';
import dogePic6 from '../img/DogePics/doge6.jpg';
import dogePic7 from '../img/DogePics/doge7.jpg';

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
  let dogestyles = {
    //margin: '20px',
    width: '60px',
    height: '80px',
    zIndex: 10,
    position: 'relative',
    left: '-5px',
    //backgroundColor: 'yellow',
  };

  let generatedInt = this.randomIntFromInterval(0,20);
  let returnedMessage = "Ow";

  console.log(generatedInt);

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
    returnedMessage =  "Without music, life would B-flat.";
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
    returnedMessage =  "Did you wash your hands?";
    break;
    case 13:
    returnedMessage =  'I just jazzed.';
    break;
    case 14:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic1}></img>
    break;
    case 15:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic2}></img>
    break;
    case 16:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic3}></img>
    break;
    case 17:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic4}></img>
    break;
    case 18:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic5}></img>
    break;
    case 19:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic6}></img>
    break;
    case 20:
    returnedMessage = <img alt="Doge" style={dogestyles} src={dogePic7}></img>
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