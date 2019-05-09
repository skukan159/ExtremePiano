import React from 'react';
import './App.css';
import pianoImage from "./img/ExtremePiano_Logo.svg"

import PianoElement from './Components/PianoElement'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={pianoImage}></img>
        <h1>Extreme piano</h1>      
        <PianoElement></PianoElement>
      </header>
    </div>
  );
}

export default App;
