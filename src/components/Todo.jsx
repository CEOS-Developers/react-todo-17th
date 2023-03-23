import React from 'react';

const Todo = ({ todo, onDelete, onUpdateStatus }) => {
  const handleClick = () => onDelete(todo);
  const handleChange = (e) =>
    onUpdateStatus({
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
          onChange={handleChange}
        />
        <label for="checkbox">{todo.text}</label>
        <span>
          <button onClick={handleClick}>❌</button>
        </span>
      </li>
    </div>
  );
};

export default Todo;
