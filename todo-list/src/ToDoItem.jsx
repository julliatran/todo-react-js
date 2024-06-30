import { useState } from "react"

export function ToDoItem({ id, completed, title, toggleToDo, deleteToDo }) {
  return (
    // need to pass in an id for the map function to identify
    // don't use index due to deletion and adding
    <li key={id}>
      <label>
        <input type='checkbox' checked={completed} onChange={e => toggleToDo(id, e.target.checked)} />
        {title}
      </label>
      <button className='btn btn-danger' onClick={() => deleteToDo(id)}>Delete</button>
    </li>
  )
}