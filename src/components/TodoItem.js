import React from 'react';
import styled from 'styled-components';
import {MdCheckBoxOutlineBlank} from "react-icons/md";
import {BsSquareFill} from "react-icons/bs";


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
    width: 90%;
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
    margin-left : 10px;
`
const RedBox = styled.div`
    color : red;
    height: 25px;
    width : 25px;
    border: 1px white;
`

const TodoItem = ({todo, onRemove, addDoneList, onChecked})=>{
    const {id, text, checked} = todo;
    const addDone = (text, id) =>{
        onRemove(id);
        return addDoneList(id, text)
    }
    return (
    <TodoBox>
        <ChkBtn onClick={() => {addDone(text, id)}}>완료</ChkBtn>
        <TextBox>{text}</TextBox>
        <RedBox>{checked ? (
            <BsSquareFill 
                onClick={()=>{
                    onChecked(id);
                }}
            /> 
        ): (<MdCheckBoxOutlineBlank
        onClick={() => {
            onChecked(id);
        }}
        />
    )}</RedBox>
        <DltBtn onClick={() => onRemove(id)}>X</DltBtn>
    </TodoBox>
    );

}

export default TodoItem;