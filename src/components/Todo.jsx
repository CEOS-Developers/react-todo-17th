import React, { useState } from 'react';

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [editing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditBtnClick = () => setIsEditing(true);
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
    <div>
      <li key={todo.id}>
        <input
          type="checkbox"
          id="checkbox"
          checked={todo.status === 'done'}
          onChange={handleCheckboxChange}
        />

        {editing ? (
          <input type="text" value={newText} onChange={handleInputChange} />
        ) : (
          <label for="checkbox">{todo.text}</label>
        )}

        <span>
          {editing ? (
            <button onClick={handleEditCompleteBtnClick}>✅</button>
          ) : (
            <button onClick={handleEditBtnClick}>✍</button>
          )}
          <button onClick={handleDeleteBtnClick}>❌</button>
        </span>
      </li>
    </div>
  );
};

export default Todo;
