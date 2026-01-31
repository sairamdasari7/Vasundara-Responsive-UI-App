import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import './todo.css'

export default function TodoApp() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('Low')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!text) return
    setTasks([...tasks, { id: Date.now(), text, priority, completed: false }])
    setText('')
  }

  const filteredTasks = tasks.filter(t =>
    filter === 'All'
      ? true
      : filter === 'Completed'
      ? t.completed
      : !t.completed
  )

  return (
    <div className="box">
      <h2>Todo App</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onClick={addTask}>Add</button>

      <div>
        {['All', 'Active', 'Completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      {filteredTasks.map(task => (
        <TodoItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  )
}
