import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Todo from './components/Todo';
import Done from './components/Done';
import GlobalStyle from './styles/GloalStyle';

const initialTodoData = localStorage.getItem('list')
  ? JSON.parse(localStorage.getItem('list'))
  : [];

function App() {
  const [list, setList] = useState(initialTodoData);
  const [value, setValue] = useState('');

  const getTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    setList([...list, newTodo]);
    localStorage.setItem('list', JSON.stringify([...list, newTodo]));
  };

  const toggleTodo = (id) => {
    let toggledTodo = list.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setList(toggledTodo);
    localStorage.setItem('list', JSON.stringify(toggledTodo));
  };

  const deleteTodo = (id) => {
    let deletedTodo = list.filter((data) => data.id !== id);
    setList(deletedTodo);
    localStorage.setItem('list', JSON.stringify(deletedTodo));
  };

  let countTodo = 0;
  list.map((data) => (data.completed ? data : countTodo++));

  return (
    <>
      <GlobalStyle />
      <Conatiner>
        <Form getTodo={getTodo} value={value} setValue={setValue}></Form>
        <Section>
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
        </Section>
        <Section>
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
        </Section>
      </Conatiner>
    </>
  );
}
const Section = styled.div`
  flex: 0.5;
  border-top: 2px solid rgb(177, 171, 171);
  overflow: auto;
  padding-left: 10px;
  padding: 0px 20px 15px 20px;
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
