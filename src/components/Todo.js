import React from 'react';
import styled from 'styled-components';

function Todo({ Todo, toggleTodo, deleteTodo }) {
  return (
    <TodoList>
      <div>{Todo.title}</div>
      <button id="check-button" onClick={() => toggleTodo(Todo.id)}>
        ✔
      </button>
      <button id="delete-button" onClick={() => deleteTodo(Todo.id)}>
        ✖
      </button>
    </TodoList>
  );
}

const TodoList = styled.div`
  display: flex;
  #delete-button {
    border: none;
    background: none;
    color: rgb(104, 87, 134);
    font-size: 18px;
  }
  #check-button {
    border: none;
    background: none;
    color: rgb(104, 87, 134);
    font-size: 18px;
  }
`;

export default Todo;
