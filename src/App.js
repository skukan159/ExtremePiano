import React from 'react';
import './App.css';
import pianoImage from "./img/ExtremePianoIcon.svg"

import PianoElement from './Components/PianoElement'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="img"><svg width="50" height="50" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" >
        <g><path colorRendering="auto" shapeRendering="auto" imageRendering="auto" colorInterpolation="sRGB" d="M26.6,195.6c-9.3,0.1-16.8,7.8-16.6,17.1v574.5c-0.1,10.5,9.3,18.6,19.6,16.9h940.7c10.4,1.7,19.8-6.4,19.7-16.9V212.8c0.1-9.4-7.5-17.1-16.9-17.1h-0.3H26.9C26.8,195.6,26.7,195.6,26.6,195.6L26.6,195.6z M43.8,229.4h67.6v253.7c0,9.3,7.6,16.9,16.9,16.9h16.9v270.3H43.8C43.8,770.3,43.8,229.4,43.8,229.4z M212.8,229.4h67.6v540.9H179V500h16.9c9.3,0,16.9-7.6,16.9-16.9V229.4z M314.1,229.4h67.6v253.7c0,9.3,7.6,16.9,16.9,16.9h16.9v270.3H314.1V229.4z M483.1,229.4h33.8v253.7c0,9.3,7.6,16.9,16.9,16.9h16.9v270.3H449.3V500h16.9c9.3,0,16.9-7.6,16.9-16.9V229.4z M618.3,229.4h33.8v253.7c0,9.3,7.6,16.9,16.9,16.9h16.9v270.3H584.5V500h16.9c9.3,0,16.9-7.6,16.9-16.9V229.4z M753.5,229.4H821v540.9H719.7V500h16.9c9.3,0,16.9-7.6,16.9-16.9V229.4z M854.8,229.4h101.4v540.9H854.8V229.4z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
</svg>
</div>
        <h1>Extreme piano</h1>
        <PianoElement></PianoElement>
      </header>
    </div>
  );
}

export default App;
