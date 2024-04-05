import { Link } from 'react-router-dom'
import './App.css'
import NavBar from './comps/NavBar'
import { todos } from './data.json'
function App() {

  return (
    <>
      <NavBar />
      <h1>Home Page!</h1>
      <ul>
        {todos.map((x) => (
          <>
            <li key={x.id}>
              <Link to={x.slug}>{x.todo}</Link>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}

export default App
