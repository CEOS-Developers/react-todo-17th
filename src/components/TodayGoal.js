import React from 'react';
import styled from 'styled-components';
import { Font } from '../styles/font';
export default function TodayGoal() {
  return (
    <Box>
      <Label fontSize={'var(--font-size-md)'} color={'var(--darken-pink)'}>
        TODAY GOAL
      </Label>
      <TextInput type="text" />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  background-color: var(--light-pink);
  width: 100%;
  height: 30%;
  padding: 10px;
`;
/* 상속 받아서 사용하기 */
const TextInput = styled.input`
  border: none;
  background: transparent;
  height: 100%;
  font-size: var(--font-size-md);
`;

const Label = styled(Font)`
  font-weight: 500;
  letter-spacing: 3px;

  align-self: center;
`;
