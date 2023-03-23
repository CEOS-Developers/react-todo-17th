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

  const submitInput = () => {
    if (inputText.trim()) {
      setTodoLists([...todoLists, inputText]);
      setInputText('');
      // @TODO - localStorage.setItem 연결
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitInput();
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

      <section className="section-todo">
        <span className="list-title">{`📂 To Do (${numOfTodo})`}</span>
        <div className="list-container">
          {todoLists.map((todo, idx) => {
            return (
              <div key={idx}>
                <span>{todo}</span>
                <button>🗑</button>
              </div>
            );
          })}
        </div>
      </section>

      <hr></hr>

      <section className="section-done">
        <span className="list-title">{`🎉 Done (${numOfDone})`}</span>
        <div className="list-container">
          {doneLists.map((todo, idx) => {
            return (
              <div key={idx}>
                <span>{todo}</span>
                <button>🗑</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
