import { ReactMic } from 'react-mic';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {songmanager} from '../actions/songmanager';
import {togglerecord} from '../actions/togglerecord';


const Record = props => {
    const recorder = useSelector(state => state.recordReducer); 
    const dispatch = useDispatch();  
    const change = useSelector(state => state.changeReducer); 

    let num = parseInt(props.name);
    var recording = false;
    var go;

    if (recorder[num][1] && recorder[num][0]) {
        recording = true;
    }   

    useEffect( () => {
        if (recorder[num][1] && recorder[num][0]) {
            //setChanger(change);
         console.log("setting");
        } else if (recorder[num][1]) {
            //setChanger(change);

            //dispatch(songmanager(changer, process(), recorder[num][1]));

        }
        return;
    })

    function useProcess(blob) {
 
    
        console.log("orange " + change);
    
        dispatch(songmanager(change, blob.blobURL, recorder[change][1]));
        return;
     };
    
//            <div><button onClick={()=>dispatch(togglerecord(num, true))} type="button">Start/Stop</button>

    return (
        <div>
            <ReactMic
                record={recording}
                onStop={useProcess}
            />

            {recording ? <t> recording...</t>: <t></t>}
            

        </div>
    )
    
}

export default Record;