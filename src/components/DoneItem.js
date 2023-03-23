import React from 'react';
import styled from 'styled-components';


const TextBox = styled.div`
    width: 100%;
    border-color: white;
    color: white;
    font-size: 20px;
    font-weight: 250;
    height: 27px;
    margin: 0;
`
const DoneBox = styled.div`
    position: relative;
    display: flex;
    width: 82%;
    height: 32%;
    margin-left: 10%;
    margin-top: 1rem;
`
const RtnBtn = styled.div`
    background-color: black;
    border: 1px solid red;
    border-radius: 5%;
    height: 22px;
    width: 60px;
    color : red;
    font-size: 18px;
    font-weight: 100;
    margin-right: 25px;
    text-align: center;
`

const DoneItem = ({done, onRemove_dn})=>{
    const {id, text} = done;
    
    return (
    <DoneBox>
        <RtnBtn onClick={() => onRemove_dn(id)}>완료</RtnBtn>
        <TextBox>{text}</TextBox>
    </DoneBox>
    );

}

export default DoneItem;