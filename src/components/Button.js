import styled from "@emotion/styled";

const Button = styled.button`
  background: #ff968d;
  color: #ffffff;
  border: none;
  box-shadow: 0px 3px 3px grey;
  border-radius: 15px;
  font-size: ${props => getButtonSizebyFontSize(props)};
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #cf6b87;
  }
`;

const getButtonSizebyFontSize = props => {
  const size = {
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
    xxl: "3rem"
  };
  return size[props.size];
};

Button.defaultProps = {
  type: "button"
};

export default Button;
