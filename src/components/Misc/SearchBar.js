import React from 'react';

const SearchBar = () => {
  return (
    <div className="input-group-text mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        aria-describedby="basic-addon1"
      ></input>
    </div>
  );
};

export default SearchBar;
