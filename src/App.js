import React from 'react';
import './App.css';

import PianoElement from './Components/PianoElement'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Extreme piano</h1>
        <PianoElement></PianoElement>
      </header>
    </div>
  );
}

export default App;
