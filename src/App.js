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
import { useEffect } from 'react';


function App() {
  const songer = useSelector(state => state.songReducer); 

  const change = useSelector(state => state.changeReducer); 

  // find state
  //curr = state.value; 

  useEffect( () => {
        /*if (recorder[num][1] &&  recorder[num][0]) {
            recording = true;
        }*/
        
        return;
    })

  return (


   

    <div className="App">
      <header className="App-header">
        
        <h1>Booper</h1>
        <p>Boop to start:</p>
        <Metronome/>

      </header>

      <body>

      <Record name = {change}/>
      <p>recording on track {change}</p>

      <div className="boops">
        <Boop name = '0' src = {sound1}/>
        <h1></h1>
        <Boop name = '1' src = {riff}/>
        <h1></h1>
        <Boop name = '2' src = {boomkick}/>
        <h1></h1>
        <div>
        <Boop name = '3' src = {songer[3]}/>
        </div>

        <div>
        <Boop name = '4' src = {songer[4]}/>

        </div>
      

      </div>

      </body>

    
    </div>
  );
}

export default App;
