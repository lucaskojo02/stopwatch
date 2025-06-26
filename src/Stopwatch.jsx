import React, {useState, useEffect, useRef} from "react";

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const invervalIDRef = useRef(null)
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            invervalIDRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10)
        }

        return ()=>{
            clearInterval(invervalIDRef.current);
        }

    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime

    }

    function stop(){
        setIsRunning(false);

    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(){

        return `00:00:00`;
    }

    return(
        <div  className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={start()}>
                    Start
                </button>
                <button className="stop-button" onClick={stop()}>
                    Stop
                </button>
                <button className="reset-button" onClick={reset()}>
                    Reset
                </button>
            </div>

        </div>
    )

}

export default Stopwatch;