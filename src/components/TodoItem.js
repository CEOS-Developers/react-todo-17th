import React from 'react';
import styled from 'styled-components';
import DoneItem from './DoneItem.js';


const TextBox = styled.div`
    width: 100%;
    border-color: white;
    color: white;
    font-size: 22px;
    font-weight: medium;
    height: 23px;
    margin: 0;
`
const TodoBox = styled.div`
    position: relative;
    display: flex;
    width: 82%;
    margin-left: 10%;
    margin-top: 0.7rem;
`
const ChkBtn = styled.div`
    background-color: black;
    border: 1.5px solid greenyellow;
    border-radius: 5%;
    height: 23px;
    width: 60px;
    color : greenyellow;
    font-size: 19px;
    font-weight: medium;
    margin-right: 25px;
    text-align: center;
`
const DltBtn = styled.div`
    background-color: black;
    border: none;
    border-radius: 5%;
    height: 22px;
    width: 22px;
    color : white;
    font-size: 20px;
    font-weight: medium;
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
        <DltBtn onClick={() => onRemove(id)}>X</DltBtn>
    </TodoBox>
    );

}

export default TodoItem;