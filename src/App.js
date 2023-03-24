import styled from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { useState, useCallback, useRef } from 'react';
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
  width: 300px;
  height: 700px;
  padding: 30px;
  justify-content: center;
  background-color:rgb(3, 3, 36);
  color: rgb(255, 77, 71);
}`;

const Title = styled.h1`{
  font-size: 1.5rem;
}`;


function App() {
  //toDos는 현재 들어온 할 일, setToDos는 이를 갱신하는 역할의 함수
  const [toDos, setToDos] = useState([
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

  const doings = toDos.filter((todo) => !todo.checked);
  const dones = toDos.filter((todo) => todo.checked);

  //todo 추가하기
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setToDos(toDos.concat(todo)); //toDos에 todo 추가!
      nextId.current++; //nextId 1씩 더하기
     },
    [toDos]
  );

  //todo 삭제하기 - id를 받아 toDos에서 해당 id 항목을 제외한 toDos 반환
  const onDelete = useCallback(
    (id) => {
      setToDos(toDos.filter(todo => todo.id !== id));
    },
    [toDos],
  );

  //todo 완료했을 때
  const onFinish = useCallback(
    (id) => {
      setToDos(
        toDos && toDos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [toDos]
  );

  return (
    <Wrapper>
      <GlobalStyle/>
      <Container>
        <Title>To Do List</Title>
        <InsertBox onInsert={onInsert}/>
        <ListBox
          type="doing"
          title="🔥 해보자고!"
          toDos={doings}
          onDelete={onDelete}
          onCheck={onFinish}
        />
        <ListBox          
          type="dones"
          title="📌 완료한 일들"
          toDos={dones}
          onDelete={onDelete}
          onCheck={onFinish}
        />
      </Container>
    </Wrapper>
  );
}

export default App;