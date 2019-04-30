import React, { Component } from 'react';
import './PianoElement.css';
import PianoKeyElement from './PianoKeyElement';

import notea from '../Audio/NewPianoNotes/a.wav';
import noteb from '../Audio/NewPianoNotes/b.wav';
import notebflat from '../Audio/NewPianoNotes/bflat.wav';
import notecsharp from '../Audio/NewPianoNotes/csharp.wav';

import notec from '../Audio/NewPianoNotes/c.wav';
import noted from '../Audio/NewPianoNotes/d.wav';
import notee from '../Audio/NewPianoNotes/e.wav';

import noteeflat from '../Audio/NewPianoNotes/eflat.wav';
import notefsharp from '../Audio/NewPianoNotes/fsharp.wav';
import notef from '../Audio/NewPianoNotes/f.wav';
import notegsharp from '../Audio/NewPianoNotes/gsharp.wav';
import noteg from '../Audio/NewPianoNotes/g.wav';

import notechigher from '../Audio/NewPianoNotes/chigher.wav';

class PianoElement extends Component {
    constructor(props){
        super(props);
        document.onkeydown = e => this.notifyPianoKeys(e);
        document.onkeyup = e => this.buttonReleased(e);
        console.log(this.pianoKeysList);
        this.buttonPressed = false;
        this.state = {
          pianoKeysList: this.updatePianoKeysList()
        };
      }

  render() {
    return(
      <div >
        <h1 className="PianoTitle">I am a piano</h1>
        <div className = "PianoKeys">
          {this.state.pianoKeysList.map((pianoKey) => pianoKey)}
        </div>
      </div>
    );
  }
 



  updatePianoKeysList(event= "undefined",wasPressed = true){
    return [
      <div key="0" className="NoteC">
      <PianoKeyElement  value="C" pressedKey={event.key} wasPressed={wasPressed} handledKey="s" noteAudio={notec} ></PianoKeyElement>
      </div>,
      <div key="1" className="NoteCSharp">
      <PianoKeyElement key="1" value="C#" pressedKey={event.key} handledKey="e" wasPressed={wasPressed} noteAudio={notecsharp}></PianoKeyElement>
      </div>,
      <div key="2" className="NoteD">
      <PianoKeyElement key="2" value="D" pressedKey={event.key} handledKey="d" wasPressed={wasPressed} noteAudio={noted}></PianoKeyElement>
      </div>,
      <div key="3" className="NoteEFlat">
      <PianoKeyElement key="3" value="Eb" pressedKey={event.key} handledKey="r" wasPressed={wasPressed} noteAudio={noteeflat} ></PianoKeyElement>
      </div>,
      <div key="4" className="NoteE">
      <PianoKeyElement key="4" value="E" pressedKey={event.key} handledKey="f" wasPressed={wasPressed} noteAudio={notee}></PianoKeyElement>
      </div>,
      <div key="5" className="NoteF">
     <PianoKeyElement key="5" value="F" pressedKey={event.key} handledKey="g" wasPressed={wasPressed} noteAudio={notef}> </PianoKeyElement>
     </div>,
     <div key="6" className="NoteFSharp">
     <PianoKeyElement key="6" value="F#" pressedKey={event.key} handledKey="y" wasPressed={wasPressed} noteAudio={notefsharp}> </PianoKeyElement>
     </div>,
     <div key="7" className="NoteG">
     <PianoKeyElement key="7" value="G" pressedKey={event.key} handledKey="h" wasPressed={wasPressed} noteAudio={noteg}> </PianoKeyElement>
     </div>,
     <div key="8" className="NoteGSharp">
     <PianoKeyElement key="8" value="G#" pressedKey={event.key} handledKey="u" wasPressed={wasPressed} noteAudio={notegsharp}> </PianoKeyElement>
     </div>,
     <div key="9" className="NoteA">
     <PianoKeyElement key="9" value="A" pressedKey={event.key} handledKey="j" wasPressed={wasPressed} noteAudio={notea}> </PianoKeyElement>
     </div>,
     <div key="10" className="NoteBFlat">
     <PianoKeyElement key="10" value="Bb" pressedKey={event.key} handledKey="i" wasPressed={wasPressed} noteAudio={notebflat}> </PianoKeyElement>
     </div>,
     <div key="11" className="NoteB">
     <PianoKeyElement key="11" value="B" pressedKey={event.key} handledKey="k" wasPressed={wasPressed} noteAudio={noteb}> </PianoKeyElement>
     </div>,
     <div key="12" className="NoteCHigher">
     <PianoKeyElement key="12" value="C" pressedKey={event.key} handledKey="l" wasPressed={wasPressed} noteAudio={notechigher}> </PianoKeyElement>
     </div>
    ];
  }

  notifyPianoKeys(event){
  
    console.log("Sending notify piano keys");
    //this.pianoKeysList = this.updatePianoKeysList(keyPressed);
    //if(this.buttonPressed === false){
      this.buttonPressed = true;
      this.setState({pianoKeysList : this.updatePianoKeysList(event)});
    //}

  }
  
  buttonReleased(event){
    console.log("Button released");
    this.buttonPressed = false;
    this.setState({pianoKeysList : this.updatePianoKeysList(event,false)});
  }

}

export default PianoElement;
//3573 3573 3 7 10     3 7 10
//D E FS D D E FS D D FS A D FS A
// C D C Bb 