import React, { useState } from 'react';
import styled from 'styled-components';
import CherryBlossomSrc from '../assets/images/cherry-blossom.svg';

export default function TodoInput({ _addTask }) {
  const [inputValue, setInputValue] = useState('');

  const _submitTodo = () => {
    _addTask(inputValue);
    setInputValue('');
  };
  return (
    <Box>
      <TextInput
        type="text"
        placeholder="ENTER YOUR TODO"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <SvgIcon
        src={CherryBlossomSrc}
        width="30px"
        height="30px"
        onClick={_submitTodo}
      />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 100%;
`;

const TextInput = styled.input`
  border: 3px solid #ffdfda;
  width: 90%;
  text-align: center;
  ::placeholder {
    color: var(--darken-pink);
    letter-spacing: 3px;
    font-family: sans-serif;
  }
`;

const SvgIcon = styled.img`
  cursor: pointer;
`;
