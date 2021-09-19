import React from 'react';

const Filter = ({newFilter, handleFilterChange}) => (
  <div>
    Filter shown with: 
    <input
      value={newFilter}
      onChange={handleFilterChange}
    /> 
  </div>
)

export default Filter