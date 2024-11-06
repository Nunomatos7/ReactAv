import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import './SearchInput.css';

function SearchInput({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

// Define PropTypes for SearchInput
SearchInput.propTypes = {
  searchQuery: PropTypes.string.isRequired,  // `searchQuery` should be a string
  setSearchQuery: PropTypes.func.isRequired,  // `setSearchQuery` should be a function
};

export default SearchInput;
