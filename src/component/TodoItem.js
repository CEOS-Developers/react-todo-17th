import React from "react";
import styled from "styled-components";
import { BsPatchCheck, BsPatchCheckFill, BsEraserFill } from "react-icons/bs";

const Button = styled.div`
  border: 0;
  background: none;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 30vh;
  .text {
    margin: 0rem 0.5rem;
    flex: 1;
  }
`;

const TodoItem = ({ todo, onDelete, onCheck }) => {
  const { id, text, checked } = todo;

  return (
    <Item>
      <Button onClick={() => onCheck(id)}>
        {checked ? <BsPatchCheckFill /> : <BsPatchCheck/>}
      </Button>
      <div className="text">{text}</div>
      <Button onClick={() => onDelete(id)}>
        <BsEraserFill/>
      </Button>
    </Item>
  );
};

export default TodoItem;