import React, { useEffect, useState } from 'react';

import {toggle} from '../actions/toggle';
import {songmanager} from '../actions/songmanager';

import {useSelector, useDispatch} from 'react-redux';
import {togglerecord} from '../actions/togglerecord';
import {numchange} from '../actions/numchange';


const Boop = props => {
    // props var: num, src 
    let num = parseInt(props.name);
    var upload = true;

    const player = useSelector(state => state.playReducer); 
    const songer = useSelector(state => state.songReducer); 

    const dispatch = useDispatch();  
    const recorder = useSelector(state => state.recordReducer); 


    if (!songer[num]) upload = false;

    useEffect(()=> {
      if (recorder[num][1] && recorder[num][0]) {
        dispatch(numchange(num));
      }   

      if (songer[num] && player[num][1]) {
        player[num][0] ?  songer[num].play()  : songer[num].pause();
      } 

      return;
    })

    const handleToggle = () => {

      //if (recorder[num][1]) dispatch(togglerecord(num, false));
      
      dispatch(toggle(num, upload));

    };

  
    return (
        <div>
            <button onClick={()=>dispatch(togglerecord(num, true))}>Record!</button>
            <button onClick={handleToggle}>{ player[num][0] ? 'toggle off' : 'toggle on'}</button>
            <div>
            {player[num][0]  ? <t>track on</t>: <t></t>}
            {upload ? <t></t>: <t> no sound recorded</t>}
            </div>
        </div>
       
    )
  }

export default Boop;