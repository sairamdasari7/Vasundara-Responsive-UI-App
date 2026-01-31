import TodoApp from './components/Todo/TodoApp'
import UserForm from './components/Form/UserForm'
import ProgressBar from './components/Progress/ProgressBar'
import CountdownTimer from './components/Timer/CountdownTimer'
import SearchList from './components/Search/SearchList'

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <TodoApp />
      <UserForm />
      <ProgressBar />
      <CountdownTimer />
      <SearchList />
    </div>
  )
}
