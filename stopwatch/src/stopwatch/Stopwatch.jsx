import React, {useState, useRef} from 'react'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)

    const startStopwatch = () => {
        setIsRunning(true)
        intervalRef.current = setInterval(() => {
            setTime((prevTime)=> prevTime + 10)
        }, 10)
    }

    const stopStopwatch = () => {
        setIsRunning(false)
        clearInterval(intervalRef.current)
    }

    const resetStopwatch = () => {
        stopStopwatch()
        setTime(0)
    }

    const formatTime = (ms) => {
        const seconds = Math.floor((ms % 6000) / 1000)
        const minutes = Math.floor(ms / 60000)
        const milliseconds = Math.floor((ms % 1000) / 10)
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
    }
  return (
    <div className='div1'>
      <div className='div2'>{formatTime(time)}</div>
      <div className='div3'>
        {
            isRunning? (
                <button onClick={stopStopwatch}>Start</button>
            ) : (
                <button onClick={startStopwatch}>Stop</button>
            )
        }
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
