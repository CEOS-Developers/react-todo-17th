import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListContainer from '../components/ListContainer';
import { TODOKEY } from '../constants/TODOKEY';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem(TODOKEY)) ?? []
  );
  const [numOfTodo, setNumOfTodo] = useState(0);
  const [numOfDone, setNumOfDone] = useState(0);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [isVisibleModal, setIsVisibleModal] = useState(false);

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

  const removeTodo = () => {
    const tempList = todoList.filter((todo) => todo.time !== selectedTodo.id);
    setTodoList(tempList);

    localStorage.setItem(TODOKEY, JSON.stringify(tempList));

    setIsVisibleModal(false);
  };

  return (
    <Wrapper>
      <Main>
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
          setIsVisibleModal={setIsVisibleModal}
          setSelectedTodo={setSelectedTodo}
        />

        <Hr></Hr>

        <ListContainer
          title={`🎉 Done (${numOfDone})`}
          todoList={todoList}
          setTodoList={setTodoList}
          isDone={true}
          setIsVisibleModal={setIsVisibleModal}
          setSelectedTodo={setSelectedTodo}
        />
      </Main>

      {isVisibleModal && (
        <ModalWrapper>
          <Modal>
            <span>이 할 일을 지울까요?</span>
            <div>
              <button onClick={removeTodo}>네</button>
              <button onClick={() => setIsVisibleModal(false)}>취소</button>
            </div>
          </Modal>
        </ModalWrapper>
      )}
    </Wrapper>
  );
};

let Wrapper = styled.div`
  position: relative;
`;

let Main = styled.div`
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

let ModalWrapper = styled(Main)`
  position: absolute;
  top: 0;

  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.5);
  box-shadow: none;
`;

let Modal = styled.div`
  width: 15rem;
  height: 5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;

  div {
    margin: auto 0 0 0;
    display: flex;
    justify-content: center;
  }

  span {
    user-select: none;
  }

  button {
    width: 5rem;
    margin: 0 0.5rem;
    padding: 0.3rem 0.5rem;
    background-color: lavender;
    border-radius: 1rem;
    border-color: transparent;
    box-shadow: 0 0 0.1rem lavender;
    font-family: 'Pretendard-Regular';

    &:hover {
      cursor: pointer;
      background-color: lightgrey;
      transition: 0.3s;
    }
  }
`;

export default TodoList;
