import {React, useState} from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    margin-left: 10%;
    margin-top: 1rem;
    width:80%;
    height: 35px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    position: relative;
    display: flex;
`
const TextInput = styled.input`
    width: 90%;
    height: 32px;
    text-align: center;
    background-color: black;
    font-size: 15px;
    color: gray;
    border-style:none; 
`
const InputButton = styled.button`
    position: relative;
    background-color: white;
    border: solid 0.5px white;
    width: 10%;
    height: 35px;
    text-align: center;
    color: black;
    font-size: 28px;
`


const TodoInput = ({addTodoList}) => {
    const [value, setValue] = useState("");
    const onChange = e => {
        setValue(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        addTodoList(value);
        setValue("");
    }
    return(
        <form onSubmit={onSubmit}>
            <InputBox>
                <TextInput 
                placeholder="&emsp;할 일을 입력해주세요" 
                value={value}
                onChange={onChange}
                ></TextInput>
                <InputButton>+</InputButton>
            </InputBox>
        </form>
    );
}

export default TodoInput;