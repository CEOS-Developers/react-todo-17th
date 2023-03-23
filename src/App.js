import {React, useState} from 'react'
import './App.css'
import styled from 'styled-components';
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import DoneList from "./components/DoneList.js";

let getId = 1;

const Container = styled.div`
    background-color: black;
    width: 30rem;
    margin: auto;
    height: 50rem;
    border-style: solid;
    border-radius: 2%;
    border-color: white;
`

const Title = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
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
    height: 32px;
    color: white;
    font-size: 28px;
    text-align: left;
    font-weight: bold;
    margin-left : 15%;
    margin-top : 1.5rem;
    margin-bottom: 4px;
    display: flex;
`
const DoneTitle = styled. div`
    width: 82%;
    height: 32px;
    color: white;
    font-size: 28px;
    text-align: left;
    font-weight: bold;
    margin-left : 15%;
    margin-top : 1.5rem;
    margin-bottom: 4px;
    display: flex;
`
const TodoBox = styled.div`
    position: relative;
    width: 82%;
    height: 30%;
    margin-left: 8%;
    margin-top: 1rem;
`

const DoneBox = styled.div`
    position: relative;
    width: 82%;
    height: 30%;
    margin-left: 8%;
    margin-top: 1rem;
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
  const [dones, setDones] = useState([]);
  const addDoneList = (id, text) => {
      const done = {
        id,
        text,
        checked: false
      }
      setDones(dones => dones.concat(done));
  }
  const onRemove = id => {
    setTodos(todos => todos.filter(todo => todo.id !==id))
  }
  const onRemove_dn = id =>{
    setDones(dones => dones.filter(done => done.id !==id))
  }
  return (
    <body>
      <Container>
        <Title>T O - D O &ensp;L I S T</Title>
        <TodoInput
        addTodoList={addTodoList}
        />
        <TodoTitle>To-Do ({todos.length})</TodoTitle>
        <TodoBox>
          <TodoList todos={todos}
                    onRemove={onRemove}
                    addDoneList={addDoneList}/>
        </TodoBox>
        <DoneTitle>Done ({dones.length})</DoneTitle>
        <DoneBox>
          <DoneList dones={dones}
                    onRemove_dn={onRemove_dn}
                    addTodoList={addTodoList}/>
        </DoneBox>
      </Container>
    </body>
  );
}

export default App;