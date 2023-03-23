import {React, useState} from 'react'
import './App.css'
import styled from 'styled-components';
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

let getId = 1;

const Container = styled.div`
    background-color: black;
    width: 70%;
    margin-left: 15%;
    margin-top : 10%;
    height: 80vh;
    border-style: solid;
    border-radius: 2%;
    border-color: white;
    align-items: center;
`

const Title = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-top: 2rem;
    height: 5vh;
    color: white;
    font-size: 30px;
    text-align: center;
    font-weight: 800;

    border-bottom: solid;
    border-radius: 2%;
`

const TodoTitle = styled. div`
    width: 82%;
    height: 30px;
    color: white;
    font-size: 25px;
    text-align: left;
    font-weight: 600;
    margin-left : 10%;
    margin-top : 1.5rem;
    margin-bottom: 4px;
    display: flex;
`
function App() {
  const [todos, setTodos] = useState([]);
  const addTodoList = (text) => {
    if (text === ""){ //trim 나중에 적용시키기
      return alert("입력된 내용이 없습니다.");
    } else{
      const todo = {
        id: getId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      getId++;
    }
  };
  return (
    <body>
      <Container>
        <Title>T O - D O &ensp;L I S T</Title>
        <TodoInput
        addTodoList={addTodoList}
        />
        <TodoTitle>To-Do ({todos.length})</TodoTitle>
        <TodoList todos={todos}/>
      </Container>
    </body>
  );
}

export default App;