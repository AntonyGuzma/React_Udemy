import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";

const Timer = () =>{
    return(
        <div className="time-container">
            <TimerDisplay/>
            <TimerControls/>
            <LapList/>
        </div>
    )
}

export default Timer;