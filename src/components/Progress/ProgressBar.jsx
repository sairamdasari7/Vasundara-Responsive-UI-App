import { useState } from 'react'

export default function ProgressBar() {
  const [vals, setVals] = useState([0,0,0])

  const update = (i,v) => {
    const n = Math.min(100, Math.max(0, Number(v)))
    const copy = [...vals]
    copy[i] = n
    setVals(copy)
  }

  const avg = Math.round(vals.reduce((a,b)=>a+b,0)/vals.length)
  const color = avg < 40 ? 'red' : avg > 70 ? 'green' : 'orange'

  return (
    <div>
      <h2>Progress Bar</h2>
      {vals.map((v,i)=>(
        <input key={i} type="number" value={v} onChange={e=>update(i,e.target.value)} />
      ))}
      <div style={{background:'#ccc', height:20}}>
        <div style={{width:`${avg}%`, height:'100%', background:color, transition:'0.5s'}} />
      </div>
    </div>
  )
}
