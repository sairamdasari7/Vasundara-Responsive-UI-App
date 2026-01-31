export default function TodoItem({ task, setTasks }) {
  const toggle = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const remove = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id))
  }

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={toggle} />
      <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.text} ({task.priority})
      </span>
      <button onClick={remove}>❌</button>
    </div>
  )
}
