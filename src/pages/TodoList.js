import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todoLists, setTodoLists] = useState([]); // @TODO - localStorage.getItem 연결
  const [doneLists, setDoneLists] = useState([]); // @TODO - localStorage.getItem 연결
  const [numOfTodo, setNumOfTodo] = useState(0);
  const [numOfDone, setNumOfDone] = useState(0);

  useEffect(() => {
    setNumOfTodo(todoLists.length);
  }, [todoLists]);

  useEffect(() => {
    setNumOfDone(doneLists.length);
  }, [doneLists]);

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
        time: String(Date.now()), // string
      };
      setTodoLists([...todoLists, todoObj]);
      setInputText('');
      // @TODO - localStorage.setItem 연결
    }
  };

  const removeTodo = (e) => {
    setTodoLists(
      todoLists.filter((todo) => todo.time !== e.target.parentElement.id)
    );
    setDoneLists(
      doneLists.filter((todo) => todo.time !== e.target.parentElement.id)
    );
    // @TODO - localStorage 연결
  };

  const moveToDone = (e) => {
    const todoObj = {
      text: e.target.innerText,
      time: e.target.parentElement.id,
    };
    setTodoLists(
      todoLists.filter((todo) => todo.time !== e.target.parentElement.id)
    );
    setDoneLists([...doneLists, todoObj]);
    // @TODO - localStorage 연결
  };

  const moveToTodo = (e) => {
    const todoObj = {
      text: e.target.innerText,
      time: e.target.parentElement.id,
    };
    setDoneLists(
      doneLists.filter((todo) => todo.time !== e.target.parentElement.id)
    );
    setTodoLists([...todoLists, todoObj]);
    // @TODO - localStorage 연결
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

      <section className="section-todo">
        <span className="list-title">{`📂 To Do (${numOfTodo})`}</span>
        <div className="list-container">
          {todoLists.map((todo) => {
            return (
              <div id={todo.time} key={todo.time}>
                <span onClick={moveToDone}>{todo.text}</span>
                <button onClick={removeTodo}>🗑</button>
              </div>
            );
          })}
        </div>
      </section>

      <hr></hr>

      <section className="section-done">
        <span className="list-title">{`🎉 Done (${numOfDone})`}</span>
        <div className="list-container">
          {doneLists.map((todo) => {
            return (
              <div id={todo.time} key={todo.time}>
                <span onClick={moveToTodo}>{todo.text}</span>
                <button onClick={removeTodo}>🗑</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
