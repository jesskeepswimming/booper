import { ReactMic } from 'react-mic';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {songmanager} from '../actions/songmanager';
import {togglerecord} from '../actions/togglerecord';

import {saverecord} from '../actions/numchange';

const Record = props => {
    const recorder = useSelector(state => state.recordReducer); 
    const dispatch = useDispatch();  
    const change = useSelector(state => state.changeReducer.curr); 
    const savedsong = useSelector(state => state.changeReducer.sound); 

    let num = parseInt(props.name);
    var recording = false;

    if (recorder[num][1] && recorder[num][0]) recording = true;

    function process(blob) {
        dispatch(saverecord(blob.blobURL));
        return;
    }

    useEffect( () => {
        if (savedsong != "") {
            dispatch(songmanager(change, savedsong, recorder[change][1]));
            dispatch(saverecord(""));
        }
        return;
    })

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