import React from "react";
import TodoItem from "./TodoItem"
import styled, { css } from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: hidden auto;
  ${({ type }) =>
    type == "done" &&
    css`
      text-decoration: line-through;
    `}
`;

const ListBox = ({type, title, toDos, onDelete, onCheck}) => {
   return(
    <div>
        <h2>{title}</h2>
        <List type={type}>
            {toDos && toDos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onDelete={onDelete}
                    onCheck={onCheck}
                />
            ))}
        </List>
    </div>
   );
};

export default ListBox;
