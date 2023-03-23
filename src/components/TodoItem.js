import React from 'react';
import styled from 'styled-components';


const TextBox = styled.div`
    width: 100%;
    border-color: white;
    color: white;
    font-size: 18px;
    font-weight: 250;
    height: 27px;
    margin: 0;
`
const TodoBox = styled.div`
    position: relative;
    width: 82%;
    height: 32%;
    margin-left: 10%;
    margin-top: 1rem;
`

const TodoItem = ({todo})=>{
    const {id, text} = todo;
    return (
    <TodoBox>
        <TextBox>{text}</TextBox>
    </TodoBox>
    );

}

export default TodoItem;