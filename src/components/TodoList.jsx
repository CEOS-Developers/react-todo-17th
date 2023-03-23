import React from 'react';
import Todo from './Todo';

const TodoList = ({ onDelete, onUpdateStatus, filteredTodos }) => {
  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            onDelete={onDelete}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
