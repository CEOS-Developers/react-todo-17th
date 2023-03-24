import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: "GmarketSansMedium";
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
  border-radius: 15px;
  font-size: 15px;
  padding: 5px;
`;

const InsertBox = ({onInsert}) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
        onInsert(value);
        setValue("");
        e.preventDefault();
        },
        [onInsert, value]
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
