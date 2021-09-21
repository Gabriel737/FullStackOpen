import React from 'react';

const Filter = ({newFilter, handleFilterChange}) => (
  <p>
    Filter shown with: 
    <input
      value={newFilter}
      onChange={handleFilterChange}
    /> 
  </p>
)

export default Filter