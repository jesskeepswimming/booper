import React, { useEffect, useState } from 'react';

import {toggle} from '../actions/toggle';
import {songmanager} from '../actions/songmanager';

import {useSelector, useDispatch} from 'react-redux';

const Boop = props => {
    // props var: num, src 
    let sound = props.src;
    let num = parseInt(props.name);
    let change = false;
    let upload = true;

    const player = useSelector(state => state.playReducer); 
    const songer = useSelector(state => state.songReducer); 
    const dispatch = useDispatch();  

    if (!songer[num]) {
        change = true;
        upload = false;
    } else {
        //if (songer[num].src != sound) change = true;
    }

    useEffect(()=> {
      if (songer[num] && player[num][1]) {
        player[num][0] ?  songer[num].play()  : songer[num].pause();
      } 
      return;
    })
  
    return (
        <div>
            <button onClick={()=>dispatch(songmanager(num, sound, change))}>Record!</button>
            <button onClick={()=>dispatch(toggle(num, upload))}>Boop!</button>
            {upload ? <t></t>: <t> no sound recorded</t>}
        </div>
       
    )
  }

export default Boop;