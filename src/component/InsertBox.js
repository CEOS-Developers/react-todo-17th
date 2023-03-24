import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;
`;

const InsertBox = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      setValue('');
      e.preventDefault();
    },
    [value]
  );

  return (
    <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="오늘은 무엇을 해볼까?"
          required
          maxLength={25}
          value={value}
          onChange={onChange}
        />  
    </Form>
  );
};

export default InsertBox;
