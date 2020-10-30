import styled from "styled-components";

const Button = styled.button`
  background-color: #f31e1e;
  color: white;
  font-weight: 700;
  cursor: pointer;
  flex-basis: 20%;
  margin: 16px;
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 6px;
  transition-duration: 250ms;
  &:hover {
    transition-duration: 250ms;
    background-color: #ce3f3f;
  }
`;

export default Button;
