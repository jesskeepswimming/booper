import { ReactMic } from 'react-mic';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useSound from "use-sound";
import {songmanager} from '../actions/songmanager';

const Record = props => {

    const [recording, setRecording] = useState(false);

    
    const dispatch = useDispatch();  
    let change = true;
    let num = parseInt(props.name);

    process = (blob) => {
       dispatch(songmanager(num, blob, change));
       return;
    }

    

    return (
        <div>
            <ReactMic
                record={recording}
                onStop={process}
            />
            <button onClick={() => setRecording(true)} type="button">Start</button>
            <button onClick={() => setRecording(false)} type="button">Stop</button>

            {recording ? <t> recording...</t>: <t></t>}

        </div>
    )
    
}

export default Record;