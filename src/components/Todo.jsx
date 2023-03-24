import React, { useState } from 'react';
import styled from 'styled-components';

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [editing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditBtnClick = () => {
    setIsEditing(true);
    setNewText(todo.text);
  };
  const handleInputChange = (e) => setNewText(e.target.value);
  const handleEditCompleteBtnClick = () => {
    onUpdate({
      ...todo,
      text: newText,
    });

    setIsEditing(false);
  };

  const handleDeleteBtnClick = () => onDelete(todo);
  const handleCheckboxChange = (e) =>
    onUpdate({
      ...todo,
      status: e.target.checked ? 'done' : 'doing',
    });

  return (
    <TodoItem key={todo.id}>
      <Checkbox
        type="checkbox"
        id="checkbox"
        checked={todo.status === 'done'}
        onChange={handleCheckboxChange}
      />

      {editing ? (
        <EditInput
          type="text"
          value={newText}
          onChange={handleInputChange}
          required
        />
      ) : (
        <TodoText for="checkbox">{todo.text}</TodoText>
      )}

      <BtnBox>
        {editing ? (
          <EditCompleteBtn onClick={handleEditCompleteBtnClick}>
            ✅
          </EditCompleteBtn>
        ) : (
          <EditBtn onClick={handleEditBtnClick}>✍</EditBtn>
        )}
        <DeleteBtn onClick={handleDeleteBtnClick}>❌</DeleteBtn>
      </BtnBox>
    </TodoItem>
  );
};

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 0.9rem;
  height: 0.9rem;
`;

const TodoText = styled.label`
  flex: 1 1 0%;
  margin-left: 0.6rem;
  font-size: 1.08rem;
`;

const EditInput = styled.input`
  flex: 1 1 0%;
  margin-left: 0.6rem;
  padding: 0;
  font-size: 1.08rem;

  outline: none;
  border: none;
  border-bottom: 2px solid rgb(199, 199, 199);
`;

const BtnBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditBtn = styled.button`
  background-color: transparent;

  padding: 0 0.4rem;
  padding-bottom: 0.3rem;
`;

const EditCompleteBtn = styled.button`
  background-color: transparent;

  padding: 0 0.4rem;
`;

const DeleteBtn = styled.button`
  background-color: transparent;

  padding: 0 0.4rem;
`;

export default Todo;
