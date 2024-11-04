import React, { useState } from 'react';
import "../TodoList/TodoList.css";

function TodoList({ todos, toogleComplete, deleteTodo, editTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setNewTask(todo.task);
  }

  const handleSaveClick = (id) => {
    editTodo(id, newTask);
    setEditingId(null);
    setNewTask('');
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toogleComplete(todo.id) }
            />
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={() => handleSaveClick(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.task}
                <button onClick={() => handleEditClick(todo)}>Edit</button>
              </>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;