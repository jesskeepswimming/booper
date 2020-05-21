import React, { useEffect, useState } from 'react';
import './App.css';

import sound1 from './sounds/soundsample.mp3';
import sound2 from './sounds/soundsample2.mp3';
import boomkick from './sounds/boomkick.mp3';
import riff from './sounds/riff.mp3';

import Boop from './components/boop.js';
import Metronome from './components/metronome.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Booper</h1>
        <p>Boop to start:</p>

        <div>     
          <Metronome/>
        </div>

      </header>

      <div className="boops">
        
        <Boop name = '0' src = {sound1}/> 
        <h1></h1>
        <Boop name = '1' src = {sound2}/>
        <h1></h1>
        <Boop name = '2' src = {boomkick}/>
        <h1></h1>
        <Boop name = '3' src = {riff}/>

      </div>
    </div>
  );
}

export default App;
