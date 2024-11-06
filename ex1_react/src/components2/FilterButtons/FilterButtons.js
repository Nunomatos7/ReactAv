import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import './FilterButtons.css';

function FilterButtons({ filter, setFilter }) {
  return (
    <div>
      <h2>Filter tasks</h2>
      <button
        onClick={() => setFilter('All')}
        style={{ fontWeight: filter === 'All' ? 'bold' : 'normal' }}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Active')}
        style={{ fontWeight: filter === 'Active' ? 'bold' : 'normal' }}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('Completed')}
        style={{ fontWeight: filter === 'Completed' ? 'bold' : 'normal' }}
      >
        Completed
      </button>
    </div>
  );
}

// Implement PropTypes for type-checking
FilterButtons.propTypes = {
  filter: PropTypes.string.isRequired,  // `filter` should be a string
  setFilter: PropTypes.func.isRequired  // `setFilter` should be a function
};

export default FilterButtons;
