import styled from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { useState } from 'react';
import InsertBox from "./component/InsertBox";
import ListBox from "./component/ListBox";

const Wrapper = styled.div`{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}`;

const Container = styled.div`{
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 700px;
  padding: 30px;
}`;

const Title = styled.h1`{
  font-size: 1.5rem;
}`;


function App() {
  //todos는 현재 들어온 할 일, setTodos는 이를 갱신하는 역할의 함수
  const [toDos, setTodos] = useState([
    {
      id: 1,
      text: '알고리즘 과제 마무리하기',
      checked: true,
    },
    {
      id: 2,
      text: '30분 운동하기',
      checked: false,
    },
  ]);

  const doings = todo.filter((todo) => !todo.checked);
  const dones = todo.filter((todo) => todo.checked);

  //todo 추가하기
  const nextId = useRef(3);
    const onInsert = useCallback(
      (text) => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos.concat(todo)); //todos에 todo 추가!
        nextId.current++; //nextId 1씩 더하기
     },
    [toDos],
  );

  //todo 삭제하기 - id를 받아 todos에서 해당 id 항목을 제외한 todos 반환
  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [toDos],
  );

  //todo 완료했을 때
  const onFinish = useCallback(
    (id) => {
      setTodos(todos.map(todo => todo.id === id ? {... todo, checked: !todo.checked} : todo,),);
    },
    [todos],
  );

  return (
    <Wrapper>
      <GlobalStyle/>
      <Container>
        <Title>To Do List</Title>
        <InsertBox

        />
        <ListBox
        
        />
        <ListBox
        />
      </Container>
    </Wrapper>
  );
}

export default App;