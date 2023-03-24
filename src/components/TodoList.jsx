import React from 'react';
import Todo from './Todo';

const TodoList = ({ onDelete, onUpdate, filteredTodos }) => {
  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
