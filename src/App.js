import React from 'react';
import './cssfiles/App.css';
import {useSelector, useDispatch} from 'react-redux';


//sounds
import sound1 from './sounds/soundsample.mp3';
import boomkick from './sounds/boomkick.mp3';
import riff from './sounds/riff.mp3';

// components
import Boop from './components/Boop.js';
import Metronome from './components/Metronome.js';
import Record from './components/Record.js';


function App() {
  const songer = useSelector(state => state.songReducer); 
  const songs = [];

  for (var i = 0; i<5; i++) {
    songs[i] = songer[i];
    i++;
  }

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
        <Boop name = '1' src = {riff}/>
        <h1></h1>
        <Boop name = '2' src = {boomkick}/>
        <h1></h1>
        <div>
        <Boop name = '3' src = {songs[3]}/>
        <Record name = '3'/>
        </div>

        <div>
        <Boop name = '4' src = {songs[4]}/>
        <Record name = '4'/>
        </div>

      </div>

    
    </div>
  );
}

export default App;
