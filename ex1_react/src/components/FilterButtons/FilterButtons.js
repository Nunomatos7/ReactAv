import React from 'react';
import "../FilterButtons/FilterButtons.css"

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

export default FilterButtons;