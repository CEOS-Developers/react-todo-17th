import React from 'react';
import styled from 'styled-components';

function Done() {
  return (
    <DoneList>
      <div id="done-title">{Todo.title}</div>
      <button id="check-button">✔</button>
      <button id="delete-button">✖</button>
    </DoneList>
  );
}

const DoneList = styled.div`
  display: flex;
  #done-title {
    text-decoration: line-through;
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
