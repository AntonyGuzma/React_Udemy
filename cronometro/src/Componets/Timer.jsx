import {useState, useEffect} from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";
import './Timer.css'

const Timer = () =>{

    const [milliseconds, setmilliseconds] = useState(0)
    const [timerOn, setTimerOn] = useState(false)
    const [laps, setLaps] = useState([])

    // Formatando os milisegundos em horas
    const formatTime = () => {
        const minutes = ("0" + Math.floor(milliseconds/60000) %60).slice(-2)
        const seconds = ("0" + Math.floor(milliseconds/1000) %60).slice(-2)
        const centseconds = ("0" + Math.floor(milliseconds/10) %100).slice(-2)

        console.log(minutes, seconds, centseconds)
        return `${minutes}:${seconds}:${centseconds}`
    }

    const startTimer = (interval) => {
        return setInterval(() => {
            setmilliseconds(prevMilliseconds => prevMilliseconds + 10)
        }, 10)
    }

    const stopTimer = (interval) => {
        clearInterval(interval)
        return interval
    }

    useEffect(() => {
        let interval = null;

        if(timerOn){
            interval = startTimer(interval)
        }else{ 
            interval = stopTimer(interval)
        }

        return () => stopTimer(interval)
    }, [timerOn])
    
    return(
        <div className="timer-container">
            <TimerDisplay time={formatTime()}/>
            <TimerControls 
            onStart={() => setTimerOn(true)} 
            onStop={() => setTimerOn(false)}/>
            <LapList/>
        </div>
    )
}

export default Timer;