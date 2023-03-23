import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListContainer from '../components/ListContainer';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]); // @TODO - localStorage.getItem 연결
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
        isDone: false,
      };
      setTodoList([...todoList, todoObj]);
      setInputText('');
      // @TODO - localStorage.setItem 연결
    }
  };

  return (
    <div>
      <section className="section-title">
        <span>Things To Do</span>
      </section>

      <section className="section-input">
        <div className="input-bg"></div>
        <input
          className="input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        ></input>
        <div onClick={submitInput}>+</div>
      </section>

      <hr></hr>

      <ListContainer
        title={`📂 To Do (${numOfTodo})`}
        todoList={todoList}
        setTodoList={setTodoList}
        isDone={false}
      />

      <hr></hr>

      <ListContainer
        title={`🎉 Done (${numOfDone})`}
        todoList={todoList}
        setTodoList={setTodoList}
        isDone={true}
      />
    </div>
  );
};

export default TodoList;
