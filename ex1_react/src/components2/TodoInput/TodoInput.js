import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import './TodoInput.css';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div>
      <h2>What needs to be done?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Enter Task'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

// Define PropTypes for TodoInput
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,  // `addTodo` should be a function
};

export default TodoInput;
