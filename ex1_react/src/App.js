import "./App.css";
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterButtons/FilterButtons';
import SearchInput from "./components/SearchInput/SearchInput";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const filteredTodos = todos.filter(todo => {
    const matchesFilter = filter === 'All' || 
                          (filter === 'Active' && !todo.completed) || 
                          (filter === 'Completed' && todo.completed);
    const matchesSearch = todo.task.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  function toggleComplete(id) {
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
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <p>{filteredTodos.length} tasks remaining</p>
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
