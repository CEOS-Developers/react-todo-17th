import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Form from './components/Form';
import Todo from './components/Todo';
import Done from './components/Done';

function App() {
  console.log('app');
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const getTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    setList([...list, newTodo]);
  };

  const toggleTodo = (id) => {
    setList(
      list.map((data) =>
        data.id === id ? { ...data, completed: !data.completed } : data
      )
    );
  };

  const deleteTodo = (id) => {
    setList(list.filter((data) => data.id !== id));
  };

  let countTodo = 0;
  list.map((data) => (data.completed ? data : countTodo++));

  return (
    <>
      <GlobalStyle />
      <Conatiner>
        <Form getTodo={getTodo} value={value} setValue={setValue}></Form>
        <TodoContainer>
          <h3>To do...😿{countTodo}</h3>
          {list.map((data) =>
            data.completed ? (
              <></>
            ) : (
              <Todo
                Todo={data}
                list={list}
                setList={setList}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              ></Todo>
            )
          )}
        </TodoContainer>
        <DoneContainer>
          <h3>Done..!😻{list.length - countTodo}</h3>
          {list.map((data) =>
            data.completed ? (
              <Done
                Todo={data}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              ></Done>
            ) : (
              <></>
            )
          )}
        </DoneContainer>
      </Conatiner>
    </>
  );
}
const TodoContainer = styled.div`
  flex: 0.5;
  border-top: 2px solid rgb(177, 171, 171);
  overflow: auto;
  padding-left: 10px;
  padding: 0px 20px 15px 20px;
`;
const DoneContainer = styled.div`
  flex: 0.5;
  border-top: 2px solid rgb(177, 171, 171);
  overflow: auto;
  padding-left: 10px;
  padding: 0px 20px 15px 20px;
`;
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
