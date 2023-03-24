import {useState, useEffect } from 'react';
import { Container, Title, Time} from '../styles/style.main';
import TodoInput from '../components/TodoInput';
import ShowList from '../components/ShowList';

function Main() {
  let toDoString = localStorage.getItem("todoObject") ? JSON.parse(localStorage.getItem("todoObject")) : [];
  const [time, setTime] = useState(new Date());
  const [todoList, setTodoList] = useState(toDoString);

  useEffect(() => {
    const date = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(date))
  }, []);

  useEffect(()=>{
    localStorage.setItem("todoObject",JSON.stringify(todoList));
  }, [todoList])
  
  return (
    <Container>
      <Title>
        <Time>{time.toLocaleString()}</Time>
      </Title>
      <TodoInput todoList = {todoList} setTodoList = {setTodoList}/>
      <ShowList todoList = {todoList} setTodoList = {setTodoList} />
    </Container>
  )
}

export default Main;