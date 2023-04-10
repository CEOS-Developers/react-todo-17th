import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = ({ onDelete, onUpdate, filteredTodos }) => {
  return (
    <TodoBox>
      {filteredTodos.map((todo) => (
        <Todo todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </TodoBox>
  );
};

const TodoBox = styled.ul`
  margin: 0;
  padding: 1.5rem 3rem;
  flex-basis: 55%;

  overflow-y: auto;
`;

export default TodoList;
