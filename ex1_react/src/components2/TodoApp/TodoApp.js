import React, { useState, useEffect } from "react";
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import FilterButtons from '../FilterButtons/FilterButtons';
import SearchInput from '../SearchInput/SearchInput';
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Efeito para atualizar o título da página com o número de tarefas restantes
  useEffect(() => {
    document.title = `${todos.length} task${todos.length !== 1 ? 's' : ''} remaining`;
  }, [todos]); // O efeito é acionado toda vez que a lista de tarefas mudar

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
    <div className="todo-app-container">
      <h1>TodoMatic</h1>
      <TodoInput addTodo={addTodo} />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <p>{filteredTodos.length} tasks remaining</p>
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default TodoApp;
