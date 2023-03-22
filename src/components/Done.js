import React from 'react';
import styled from 'styled-components';

function Done({ Todo, toggleTodo, deleteTodo }) {
  return (
    <DoneList>
      <div id="done-title">{Todo.title}</div>
      <button id="check-button" onClick={() => toggleTodo(Todo.id)}>
        🔙
      </button>
      <button id="delete-button" onClick={() => deleteTodo(Todo.id)}>
        ✖
      </button>
    </DoneList>
  );
}

const DoneList = styled.div`
  display: flex;
  #done-title {
    text-decoration: line-through;
    color: gray;
  }
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

export default Done;
