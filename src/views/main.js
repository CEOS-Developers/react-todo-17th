import {useState, useEffect } from 'react';
import { Container, Title, Time} from '../styles/mainStyle';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function Main() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
  
  return (
    <Container>
      <Title>
        <Time>{time.toLocaleTimeString()}</Time>
      </Title>
      <TodoInput/>
      <TodoList/>
    </Container>
  )
}

export default Main;