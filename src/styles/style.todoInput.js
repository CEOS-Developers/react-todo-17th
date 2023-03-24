import styled from 'styled-components';

export const TodoInputWrapper = styled.form`
    width:400px;
    height:60px;
    background-color: rgba( 255, 255, 255, 0.8);
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
`

export const TodoInputText = styled.input`
    width : 80%;
    padding:5px;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
`

export const TodoInputButton = styled.button`
    font-size:20px;
    cursor:pointer;
`