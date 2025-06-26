import React, {useState, useEffect, useRef} from "react";

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const invervalIDRef = useRef(null)
    const startTimeRef = useRef(0);

    useEffect(()=>{

    },[isRunning]);

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){

    }

    return(
        <div >

        </div>
    )

}

export default Stopwatch;