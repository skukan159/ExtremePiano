import React, { Component } from 'react';
import PianoKeyElement from './PianoKeyElement';

class PianoElement extends Component {
    constructor(props){
        super(props);

        
        document.onkeypress = e => this.notifyPianoKeys(e);
        console.log(this.pianoKeysList);
        this.state = {
          pianoKeysList: this.returnPianoKeysList()
        };

        
      }

  render() {
    return(
      <div >
        <h1>I am a piano</h1>
        <div className = "pianokeys">
          {this.state.pianoKeysList.map((pianoKey) => pianoKey)}
        </div>
      </div>
    );
  }
 



  returnPianoKeysList(){
    return [<PianoKeyElement value="c"
    songsrc="../Audio/PianoNotes/68437__pinkyfinger__piano-a.wav" handledKey="d" >
    </PianoKeyElement>,
     <PianoKeyElement key="1" pressedKey="p" value="d" handledKey="w"></PianoKeyElement>,
    <PianoKeyElement key="2" pressedKey="p" value="e" handledKey="e"></PianoKeyElement>,
    <PianoKeyElement key="3" pressedKey="p" value="f" handledKey="r"></PianoKeyElement>,
    <PianoKeyElement key="4" pressedKey="p" value="g" handledKey="t"></PianoKeyElement>,
    <PianoKeyElement key="5" pressedKey="p" value="a" handledKey="a"></PianoKeyElement>,
    <PianoKeyElement key="6" pressedKey="p" value="b" handledKey="s"></PianoKeyElement>
    ];
  }

  updatePianoKeysList(event){
    return [<PianoKeyElement
    pressedKey={event.key}
    value="c"
    songsrc="../Audio/PianoNotes/68437__pinkyfinger__piano-a.wav"
    handledKey="d">
    </PianoKeyElement>,
     <PianoKeyElement key="1" pressedKey={event.key} value="d" handledKey="w"></PianoKeyElement>,
    <PianoKeyElement key="2" pressedKey={event.key}  value="e" handledKey="e"></PianoKeyElement>,
    <PianoKeyElement key="3" pressedKey={event.key}  value="f" handledKey="r"></PianoKeyElement>,
    <PianoKeyElement key="4" pressedKey={event.key}  value="g" handledKey="t"></PianoKeyElement>,
    <PianoKeyElement key="5" pressedKey={event.key}  value="a" handledKey="a"></PianoKeyElement>,
    <PianoKeyElement key="6" pressedKey={event.key}  value="b" handledKey="s"></PianoKeyElement>,
    <PianoKeyElement key="7" pressedKey={event.key}  value="c" handledKey="d"></PianoKeyElement>];
  }

  notifyPianoKeys(event){
    console.log("Sending notify piano keys");
    //this.pianoKeysList = this.updatePianoKeysList(keyPressed);
    this.setState({pianoKeysList : this.updatePianoKeysList(event)});
  }
  

}

export default PianoElement;
