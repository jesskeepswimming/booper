import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {adjust, speed} from '../actions/bpm';
import useSound from "use-sound";

import Slider from "@material-ui/core/Slider";

import metro from '../sounds/metronome.mp3';

const Metronome = props => {
  const dispatch = useDispatch();  
  const met = useSelector(state => state.metroReducer); 
  const [value, setValue] = useState(50);

  const [playbackRate, setPlaybackRate] = useState(value/20);
  const [play, {stop}] = useSound(metro, {playbackRate, interrupt:true});

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
    <div className='Slider'>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
       <button onClick={()=>dispatch(adjust())}>{met.metroOn ? <t>Metronome off!</t>: <t>Metronome on!</t> }</button>
       <div className="Bpm">
        {met.speed ? <p>{40*met.speed} bpm</p> : <p>100 bpm</p>}
       </div>
    </div>
  )
}

export default Metronome;