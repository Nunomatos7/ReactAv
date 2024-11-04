import "./App.css";
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterButtons/FilterButtons';
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  function toogleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }

  function editTodo(id, newTask) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  }

  return (
    <div className="app-container">
      <h1>TodoMatic</h1>
      <TodoInput addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <p>{filteredTodos.length} tasks remaining</p>
      <TodoList todos={filteredTodos} toogleComplete={toogleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
