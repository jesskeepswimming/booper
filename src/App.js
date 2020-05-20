import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import {toggle} from './actions/playpause';
import {adjust, speed} from './actions/bpm';

import useSound from "use-sound";

import sound1 from './sounds/soundsample.mp3';
import sound2 from './sounds/soundsample2.mp3';
import boomkick from './sounds/boomkick.mp3';
import metro from './sounds/metronome.mp3';

import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

const Metronome = props => {
  const dispatch = useDispatch();  
  const met = useSelector(state => state.metroReducer); 
  const [value, setValue] = useState(50);

  const [playbackRate, setPlaybackRate] = React.useState(value/20);

  const [play, {stop}] = useSound(metro, {playbackRate, interrupt:true});
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPlaybackRate(newValue/20)
    dispatch(speed(newValue/20))
  };

  useEffect(()=> {
    met.metroOn ? play() : stop(); 
    return;
  })

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
       <button onClick={()=>dispatch(adjust())}>Metronome!</button>

    </div>

  )
}

const Boop = props => {
  const player = useSelector(state => state.playReducer); 
  const dispatch = useDispatch();  
  let sound = props.src;
  const [play, {pause}] = useSound(sound);
  let num = parseInt(props.name);

  useEffect(()=> {
    console.log("effect");
    player[num] ? play() : pause(); 
    //player[num] ? console.log('play ' + num) : console.log('pause ' +num); 
    return;
  })

  return (
     <button onClick={()=>dispatch(toggle(num))}>Boop!</button>
  )
}

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

      </div>
    </div>
  );
}

export default App;
