import { useState } from "react"
import { ToDoItem } from "./ToDoItem"
export function ToDoList({ todos, toggleTodo, deleteToDo }) {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No To-dos"}
        {todos.map(todo => {
          return (
            <ToDoItem {...todo} key={todo.id} toggleToDo={toggleTodo} deleteToDo={deleteToDo} />
          )
        })}
      </ul>
    </>

  )
}