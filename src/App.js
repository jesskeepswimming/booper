import React from 'react';
import './cssfiles/App.css';

//sounds
import sound1 from './sounds/soundsample.mp3';
import sound2 from './sounds/soundsample2.mp3';
import boomkick from './sounds/boomkick.mp3';
import riff from './sounds/riff.mp3';

// components
import Boop from './components/Boop.js';
import Metronome from './components/Metronome.js';
import Record from './components/Record.js';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Booper</h1>
        <p>Boop to start:</p>
        <Metronome/>

      </header>

      <div className="boops">
        <Boop name = '0' src = {sound1}/>
        <h1></h1>
        <Boop name = '1' src = {sound2}/>
        <h1></h1>
        <Boop name = '2' src = {boomkick}/>
        <h1></h1>
        <Boop name = '3' src = {riff}/>
        <h1></h1>
        <Boop name = '4' src = ""/>
      </div>

      <div><Record name = '4'/></div>
      <h1></h1>

    </div>
  );
}

export default App;
