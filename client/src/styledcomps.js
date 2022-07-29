import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  background-color: #808080;
  border-radius: 10px;
`;

export const Button = styled.button`
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

export const StyledLink = styled(Link)`
  background-color: ${(props) => props.inputColor || "#E8E8E8"};
  border-radius: 1em;
  color: #ffffff;
  font-family: Arial, san-serif;
  padding: 1em;
  text-align: center;
  text-decoration: none;

  &:hover {
    transform: scale(0.5); //not working
    color: #808080;
  }
`;
