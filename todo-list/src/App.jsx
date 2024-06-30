import { useState, useEffect } from 'react'
import './App.css'
import { ToDoForm } from "./ToDoForm"
import { ToDoList } from "./ToDoList"

function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // Hooks need to stay at the top
  // store to local cache so on refresh list is persistent
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addToDo(name) {
    // need to return instead of modifying in place because only works on value of last rendered
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: name, completed: false },
      ]
    })
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    // need fragment (empty div) since can only return one thing
    <>
      <ToDoForm onSubmit={addToDo} />
      <ToDoList todos={todos} toggleTodo={ toggleTodo } deleteToDo={ deleteTodo }/>
    </>
)
}

export default App
