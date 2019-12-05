import React, { useState } from 'react';

const SearchBar = () => {
  const [formData, setFormData] = useState({
    searchQuery: ''
  });

  const { searchQuery } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting: ', searchQuery);
  };

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-group">
        <div className="input-group-text mb-3">
          <input
            type="text"
            class="form-control"
            name="searchQuery"
            placeholder="Search..."
            onChange={(e) => onChange(e)}
            aria-describedby="basic-addon1"
          ></input>

          <button type="submit" className="btn btn-general">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
