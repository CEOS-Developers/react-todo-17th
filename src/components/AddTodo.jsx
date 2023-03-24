import React, { useState } from 'react';
import styled from 'styled-components';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    onAdd({ id: Date.now(), text: text, status: 'doing' });

    setText(''); //초기화
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <AddInput
        type="text"
        placeholder="WRITE A TO-DO"
        value={text}
        onChange={handleChange}
        required
      />
      <AddBtn>➕</AddBtn>
    </AddForm>
  );
};

const AddForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.9rem 0;
  border-bottom: 1px solid rgb(199, 199, 199);
`;

const AddInput = styled.input`
  border: 1px solid rgb(179, 177, 177);
  border-radius: 6px;
  width: 16.5rem;
  height: 1.8rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    text-align: center;
  }
`;

const AddBtn = styled.button`
  padding: 0.25rem;
  margin-left: 0.3rem;
  background-color: rgb(35, 35, 35);
  border-radius: 5px;
`;

export default AddTodo;
