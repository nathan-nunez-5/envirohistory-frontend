import React from 'react';

const Selectors = ({ optionNames, title }) => {
  let options = [];

  optionNames.forEach((item, index) => {
    options.push(<option value={index}>{item}</option>);
  });

  return (
    <div>
      <h3>{title}</h3>
      <select class="custom-select" id="inputGroupSelect01">
        <option selected>Select... </option>
        {options}
      </select>
    </div>
  );
};

export default Selectors;
