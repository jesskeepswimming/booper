import React, { useEffect, useState } from 'react';

import {toggle} from '../actions/toggle';
import {songmanager} from '../actions/songmanager';

import {useSelector, useDispatch} from 'react-redux';
import {togglerecord} from '../actions/togglerecord';
import {numchange} from '../actions/numchange';


const Boop = props => {
    // props var: num, src 
    let sound = props.src;
    let num = parseInt(props.name);
    let upload = true;

    const player = useSelector(state => state.playReducer); 
    const songer = useSelector(state => state.songReducer); 
    const change = useSelector(state => state.changeReducer); 

    const dispatch = useDispatch();  
    const recorder = useSelector(state => state.recordReducer); 



    if (!songer[num]) {
        upload = false;
    } else {
        if (songer[num].src != sound) upload = false;
    }

    useEffect(()=> {
      if (recorder[num][1] && recorder[num][0]) {
        dispatch(numchange(num));
      }   

      if (songer[num] && player[num][1]) {
        player[num][0] ?  songer[num].play()  : songer[num].pause();
      } 
      return;
    })

  
    return (
        <div>
            <button onClick={()=>dispatch(togglerecord(num, true))}>Record!</button>
            <button onClick={()=>dispatch(toggle(num, upload))}>Boop!</button>
            {upload ? <t></t>: <t> no sound recorded</t>}
        </div>
       
    )
  }

export default Boop;