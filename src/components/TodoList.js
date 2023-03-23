import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";


const TodoList = ({todos, onRemove, addDoneList}) => {
    return (
        <div>
            {todos.map(todo =>(
                <TodoItem todo={todo} key = {todo.id} onRemove={onRemove} addDoneList={addDoneList}/>
                // 아 뭔가 이렇게 이중으로 안 넘기고 바로 지우는 방법도 있을 것 같은데...
            ))}
        </div>
    );
};

export default TodoList;