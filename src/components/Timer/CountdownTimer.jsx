import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [time, setTime] = useState(() => Number(localStorage.getItem('time')) || 10)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setTime(t => {
        if (t <= 0) {
          setRunning(false)
          return 0
        }
        localStorage.setItem('time', t - 0.01)
        return +(t - 0.01).toFixed(2)
      })
    }, 10)
    return () => clearInterval(id)
  }, [running])

  return (
    <div>
      <h2>Countdown Timer</h2>
      <input disabled={running} type="number" value={time} onChange={e=>setTime(+e.target.value)} />
      {!running && <button onClick={()=>setRunning(true)}>Start</button>}
      {running && <button onClick={()=>setRunning(false)}>Pause</button>}
      <button onClick={()=>{setRunning(false);setTime(10)}}>Reset</button>
      <p>{time === 0 ? "Time's up!" : time}</p>
    </div>
  )
}
