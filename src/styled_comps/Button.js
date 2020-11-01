import styled from "styled-components";

const Button = styled.button`
  background-color: #ce4747;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
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
    background-color: #cb6c6c;
  }
`;

export default Button;
