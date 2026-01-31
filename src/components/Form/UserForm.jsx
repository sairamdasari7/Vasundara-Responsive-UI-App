import { useState } from 'react'

export default function UserForm() {
  const [data, setData] = useState({ name:'', email:'', id:'', password:'' })
  const [show, setShow] = useState(false)
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)

  const validate = () => {
    const e = {}
    if (!data.name) e.name = 'Required'
    if (!/\S+@\S+\.\S+/.test(data.email)) e.email = 'Invalid Email'
    if (!data.id) e.id = 'Required'
    if (!data.password) e.password = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (!validate()) return
    setResult(data)
    setData({ name:'', email:'', id:'', password:'' })
  }

  return (
    <form onSubmit={submit}>
      <h2>User Form</h2>
      {['name','email','id'].map(f => (
        <div key={f}>
          <input
            placeholder={f}
            value={data[f]}
            onChange={e => setData({ ...data, [f]: e.target.value })}
          />
          <span>{errors[f]}</span>
        </div>
      ))}

      <input
        type={show ? 'text' : 'password'}
        value={data.password}
        onChange={e => setData({ ...data, password: e.target.value })}
      />
      <button type="button" onClick={() => setShow(!show)}>Show / Hide</button>
      <span>{errors.password}</span>

      <button type="submit">Submit</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </form>
  )
}
