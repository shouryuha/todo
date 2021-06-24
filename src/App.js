import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  useEffect(() => { 
    getLocalTodos()
  }, [])
  
  const [inputText, setInputText] = useState('') // Texto do Input
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])

  

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos")) {
      let localTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodos)
    } else {
      localStorage.setItem("todos", JSON.stringify([]))
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
