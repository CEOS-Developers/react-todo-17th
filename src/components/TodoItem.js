import React from 'react';
import styled from 'styled-components';
import DoneItem from './DoneItem.js';


const TextBox = styled.div`
    width: 100%;
    border-color: white;
    color: white;
    font-size: 20px;
    font-weight: 250;
    height: 27px;
    margin: 0;
`
const TodoBox = styled.div`
    position: relative;
    display: flex;
    width: 82%;
    height: 32%;
    margin-left: 10%;
    margin-top: 1rem;
`
const ChkBtn = styled.div`
    background-color: black;
    border: 1px solid greenyellow;
    border-radius: 5%;
    height: 22px;
    width: 60px;
    color : greenyellow;
    font-size: 18px;
    font-weight: 100;
    margin-right: 25px;
    text-align: center;
`

const TodoItem = ({todo, onRemove, addDoneList})=>{
    const {id, text} = todo;
    const addDone = (text, id) =>{
        onRemove(id);
        return addDoneList(id, text)
    }
    return (
    <TodoBox>
        <ChkBtn onClick={() => {addDone(text, id)}}>완료</ChkBtn>
        <TextBox>{text}</TextBox>
    </TodoBox>
    );

}

export default TodoItem;