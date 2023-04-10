import React from 'react';
import styled from 'styled-components';

const Filter = ({ filters, onChangeFilter, todos }) => {
  return (
    <FilterList>
      {filters.map((filter, index) => (
        <FilterItem key={index}>
          <FilterBtn onClick={() => onChangeFilter(filter.status)}>
            {filter.name}
            <FilterCount>
              {filter.status === 'all'
                ? todos.length
                : todos.filter((t) => t.status === filter.status).length}
            </FilterCount>
            {/*카운트*/}
          </FilterBtn>
        </FilterItem>
      ))}
    </FilterList>
  );
};

const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  border-bottom: 1px solid rgb(199, 199, 199);
`;

const FilterItem = styled.li`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
`;

const FilterBtn = styled.button`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  height: 3rem;
  font-size: 1rem;
  font-family: 'S-CoreDream-3Light';

  background-color: transparent;
  border-right: 1px solid rgb(199, 199, 199);

  transition: all 150ms ease-out;

  &:hover {
    background-color: #514e4b23;
  }
`;

const FilterCount = styled.div`
  margin-left: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;

  background-color: #92f9d7c9;
`;

export default Filter;
