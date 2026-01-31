import { useState } from 'react'

const names = ['Sairam','Rahul','Ankit','Ramesh','Sandeep']

export default function SearchList() {
  const [q,setQ] = useState('')
  const filtered = names.filter(n => n.toLowerCase().includes(q.toLowerCase()))

  const highlight = name =>
    name.split(new RegExp(`(${q})`,'gi')).map((p,i)=>
      p.toLowerCase()===q.toLowerCase()?<b key={i}>{p}</b>:p
    )

  return (
    <div>
      <h2>Live Search</h2>
      <input value={q} onChange={e=>setQ(e.target.value)} />
      <p>Matches: {filtered.length}</p>
      {filtered.length ? filtered.map(n=><div key={n}>{highlight(n)}</div>) : 'No matches'}
    </div>
  )
}
