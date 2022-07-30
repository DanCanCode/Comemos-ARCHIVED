import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  background-color: rgba(250, 250, 255, 0.8);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
`;

export const Button = styled.button`
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

export const StyledLink = styled(Link)`
  align-self: center;
  background-color: ${(props) => props.inputColor || "#273469"};
  border-radius: 1em;
  color: #ffffff;
  display: inline-block;
  font-family: Arial, san-serif;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    transform: scale(0.8);
    transition: 0.4s;
  }
`;
