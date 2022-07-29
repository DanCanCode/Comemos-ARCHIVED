import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  border-radius: 10px;
  background-color: #808080;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
