import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListContainer from '../components/ListContainer';
import { TODOKEY } from '../constants/TODOKEY';

const TodoList = () => {
  // const TODOKEY = 'todo';
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem(TODOKEY)) ?? []
  );
  const [numOfTodo, setNumOfTodo] = useState(0);
  const [numOfDone, setNumOfDone] = useState(0);

  useEffect(() => {
    setNumOfTodo(todoList.filter((todo) => !todo.isDone).length);
    setNumOfDone(todoList.filter((todo) => todo.isDone).length);
  }, [todoList]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitInput();
    }
  };

  const submitInput = () => {
    if (inputText.trim()) {
      const todoObj = {
        text: inputText, // string
        time: String(Date.now()), // string,
        isDone: false, // boolean
      };
      setTodoList([...todoList, todoObj]);
      setInputText('');

      localStorage.setItem(TODOKEY, JSON.stringify([...todoList, todoObj]));
    }
  };

  return (
    <Wrapper>
      <Title>
        <span>Things To Do</span>
      </Title>

      <SectionInput>
        <input
          type="text"
          placeholder="type here ..."
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        ></input>
        <span onClick={submitInput}>+</span>
      </SectionInput>

      <Hr></Hr>

      <ListContainer
        title={`📂 To Do (${numOfTodo})`}
        todoList={todoList}
        setTodoList={setTodoList}
        isDone={false}
      />

      <Hr></Hr>

      <ListContainer
        title={`🎉 Done (${numOfDone})`}
        todoList={todoList}
        setTodoList={setTodoList}
        isDone={true}
      />
    </Wrapper>
  );
};

let Wrapper = styled.div`
  width: 20rem;
  height: 30rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgb(125 123 125);
  display: flex;
  flex-direction: column;
`;

let Title = styled.div`
  margin-bottom: 0.6rem;
  font-size: 2rem;
  user-select: none;
`;

let SectionInput = styled.div`
  width: calc(100% - 20px);
  height: 2rem;
  margin: 0.6rem;
  display: flex;

  input {
    width: 15rem;
    height: 2rem;
    background-color: lightgray;
    border-color: transparent;
    border-radius: 1rem;
    padding: 0 1rem;

    font-family: 'Pretendard-Regular';

    &:focus {
      outline: none;
    }
  }

  span {
    margin: auto 0 auto auto;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

let Hr = styled.hr`
  margin: 1rem 0;
`;

export default TodoList;
