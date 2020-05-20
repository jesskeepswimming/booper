import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import {toggle} from '../actions/playpause';
import {useSelector, useDispatch} from 'react-redux';

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

export default Boop;