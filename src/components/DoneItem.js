import React from 'react';
import styled from 'styled-components';

const TextBox = styled.div`
    width: 100%;
    border-color: white;
    color: white;
    font-size: 22px;
    font-weight: medium;
    height: 23px;
    margin: 0;
`
const DoneBox = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    margin-left: 10%;
    margin-top: 0.7rem;
`
const RtnBtn = styled.div`
    background-color: black;
    border: 1.5px solid red;
    border-radius: 5%;
    height: 23px;
    width: 60px;
    color : red;
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

const DoneItem = ({done, onRemove_dn, addTodoList})=>{
    const {id, text} = done;
    const onReturn = (id, text) =>{
        onRemove_dn(id);
        addTodoList(text);

    }
    
    return (
    <DoneBox>
        <RtnBtn onClick={() => onReturn(id, text)}>복귀</RtnBtn>
        <TextBox>{text}</TextBox>
        <DltBtn onClick={() => onRemove_dn(id)}>X</DltBtn>
    </DoneBox>
    );

}

export default DoneItem;