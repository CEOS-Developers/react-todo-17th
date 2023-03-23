import React from 'react';

const Filter = ({ filters, onChangeFilter, todos }) => {
  return (
    <div>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>
            <button onClick={() => onChangeFilter(filter.status)}>
              {filter.name}
              <span>
                {filter.status === 'all'
                  ? todos.length
                  : todos.filter((t) => t.status === filter.status).length}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
