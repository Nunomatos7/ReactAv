import React from 'react';
import '../SearchInput/SearchInput.css';

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

export default SearchInput;
