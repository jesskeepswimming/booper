
import React, { useEffect, useState } from 'react';
import {Howl, Howler} from 'howler';


import useSound from "use-sound";
import {toggle} from '../actions/playpause';
import {songmanager} from '../actions/songmanager';

import {useSelector, useDispatch} from 'react-redux';

const Boop = props => {
    // props: num, src 
    const player = useSelector(state => state.playReducer); 
    const songer = useSelector(state => state.songReducer); 

    const dispatch = useDispatch();  

    let sound = props.src;
    let num = parseInt(props.name);

    let change = false;

    if (!songer[num]) change = true;
    else {
        if (songer[num].src != sound) change = true;
    }
      
    /*
    const [play, {stop}] = useSound( sound, { 
        /*interrupt: true /*,
        sprite: {
            laser: [1,9000], 
        },
    });

    */

    useEffect(()=> {
      console.log("effect");

      if (songer[num] && player[num][1]) {
        player[num][0] ?  songer[num].play() : songer[num].pause();
      } 
      return;
    })
  
    return (
        <div>
            <button onClick={()=>dispatch(songmanager(num, sound, change))}>Record!</button>
            <button onClick={()=>dispatch(toggle(num))}>Boop!</button>
            {songer[num] ? <t></t>: <t> no sound recorded</t>}
        </div>
       
    )
  }

export default Boop;