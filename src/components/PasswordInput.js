import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  height: 45px;
  width: 250px;
  outline: 2px solid black;
  font-size: 2.2rem;
  padding: 8px;
  &:focus {
    background-color: hsl(${props => props.bgColor}, 100%, 50%);
  }
`;

function PasswordInput({ value }) {
  const setValue = React.useState("");
  function changeBgColor() {
    return Math.min(value.length * 10, 120);
  }
  return (
    <Input
      type="password"
      value={value}
      onChange={event => setValue(event.target.value)}
      bgColor={changeBgColor}
    ></Input>
  );
}

export default PasswordInput;
