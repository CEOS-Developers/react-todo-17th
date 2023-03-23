import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

  const removeTodo = (e) => {
    setTodoList(
      todoList.filter((todo) => todo.time !== e.target.parentElement.id)
    );
    // @TODO - localStorage 연결
  };

  const toggleIsDone = (e) => {
    const tempList = [...todoList];
    tempList.forEach((todo) => {
      if (todo.time === e.target.parentElement.id) {
        todo.isDone = !todo.isDone;
      }
    });
    setTodoList(tempList);
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
          {todoList
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return (
                <div id={todo.time} key={todo.time}>
                  <span onClick={toggleIsDone}>{todo.text}</span>
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
          {todoList
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return (
                <div id={todo.time} key={todo.time}>
                  <span onClick={toggleIsDone}>{todo.text}</span>
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
