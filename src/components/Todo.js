import React, { useState } from 'react';
import styled from 'styled-components';

function Todo({ Todo, toggleTodo, deleteTodo, title, list, setList }) {
  console.log('todo');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const editTodo = (e) => {
    setEditedTitle(e.target.value);
  };

  const submitEditedTodo = (event) => {
    event.preventDefault();

    let editedTodo = list.map((data) => {
      if (data.id === Todo.id) {
        data.title = editedTitle;
      }
      return data;
    });

    setList(editedTodo);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoList>
        <div>
          <form onSubmit={submitEditedTodo}>
            <input value={editedTitle} onChange={editTodo} id="edit-todo" />
          </form>
        </div>
      </TodoList>
    );
  } else {
    return (
      <TodoList>
        <div>
          {Todo.title}
          <button id="check-button" onClick={() => toggleTodo(Todo.id)}>
            ✔
          </button>
          <button id="delete-button" onClick={() => deleteTodo(Todo.id)}>
            ✖
          </button>
          <button id="edit-button" onClick={() => setIsEditing(true)}>
            🛠
          </button>
        </div>
      </TodoList>
    );
  }
}

const TodoList = styled.div`
  display: flex;
  #delete-button {
    border: none;
    background: none;
    color: rgb(104, 87, 134);
    font-size: 18px;
  }
  #check-button {
    border: none;
    background: none;
    color: rgb(104, 87, 134);
    font-size: 18px;
  }
  #edit-button {
    border: none;
    background: none;
    color: rgb(104, 87, 134);
    font-size: 18px;
  }
  #edit-todo {
    height: 20px;
    font-size: 15px;
  }
`;

export default Todo;
