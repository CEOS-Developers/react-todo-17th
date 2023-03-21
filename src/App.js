import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Form from './components/Form';
import Todo from './components/Todo';
import Done from './components/Done';

function App() {
  const [list, setList] = useState([]);

  const getTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setList((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <GlobalStyle />
      <Conatiner>
        <Form getTodo={getTodo}></Form>
        <Todo></Todo>
        <Done></Done>
      </Conatiner>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(186, 191, 225);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;
const Conatiner = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 350px;
  border-radius: 20px;
  box-shadow: 1px 1px 15px rgba(73, 71, 71, 0.5);
`;

export default App;
