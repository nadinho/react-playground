import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  height: 45px;
  width: 250px;
  outline: 2px solid black;
  font-size: 2.2rem;
  padding: 8px;
  &:focus {
    background-color: red;
  }
`;

function PasswordInput({ value }) {
  return <Input type="password" value={value}></Input>;
}

export default PasswordInput;
