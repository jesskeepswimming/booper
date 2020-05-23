import { ReactMic } from 'react-mic';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {songmanager} from '../actions/songmanager';
import {togglerecord} from '../actions/togglerecord';

import {saverecord} from '../actions/numchange';

/*
function Process(blob) {
    const recorder = useSelector(state => state.recordReducer); 
    const dispatch = useDispatch();  
    const change = useSelector(state => state.changeReducer); 

    console.log("orange " + blob.blobURL);
    //dispatch(saverecord(blob.blobURL));
    dispatch(saverecord(change, blob.blobURL, recorder[change][1]));
    return;
 };
*/

const Record = props => {
    const recorder = useSelector(state => state.recordReducer); 
    const dispatch = useDispatch();  
    const change = useSelector(state => state.changeReducer.curr); 
    const savedsong = useSelector(state => state.changeReducer.sound); 

    let num = parseInt(props.name);
    var recording = false;
    var go;

    if (recorder[num][1] && recorder[num][0]) {
        recording = true;
    }   

    function process(blob) {
        dispatch(saverecord(blob.blobURL));
        return;
    }

    useEffect( () => {

        if (savedsong != "") {
            dispatch(songmanager(change, savedsong, recorder[change][1]));
            dispatch(saverecord(""));
        }

        if (recorder[num][1] && recorder[num][0]) {
            //setChanger(change);
         console.log("setting", change);
        } else if (recorder[num][1]) {
            //setChanger(change);

            //dispatch(songmanager(changer, process(), recorder[num][1]));

        }
        return;
    })

    
//            <div><button onClick={()=>dispatch(togglerecord(num, true))} type="button">Start/Stop</button>

    return (
        <div>
            <ReactMic
                record={recording}
                onStop={process}
            />

            {recording ? <t> recording...</t>: <t></t>}
            

        </div>
    )
    
}

export default Record;