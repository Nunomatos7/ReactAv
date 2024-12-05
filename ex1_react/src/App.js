import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import TodoApp from './components1/TodoApp/TodoApp';
import TodoApp2 from './components2/TodoApp/TodoApp';
import ATMApp from './componentes3/ATMApp/ATMApp';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => isActive ? 'navbar-item active-link' : 'navbar-item'}  // Conditionally apply active class
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ex1" 
              className={({ isActive }) => isActive ? 'navbar-item active-link' : 'navbar-item'}  // Conditionally apply active class
            >
              Todo App
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ex2" 
              className={({ isActive }) => isActive ? 'navbar-item active-link' : 'navbar-item'}  // Conditionally apply active class
            >
              Todo App 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ex3"
              className={({ isActive }) => isActive ? 'navbar-item active-link' : 'navbar-item'}  // Conditionally apply active class
            >
              ATM
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex1" element={<TodoApp />} />
        <Route path="/ex2" element={<TodoApp2 />} />
        <Route path="/ex3" element={<ATMApp />} />
      </Routes>
    </div>
  );
}

export default App;
