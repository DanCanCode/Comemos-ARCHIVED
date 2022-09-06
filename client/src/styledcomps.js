import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

export const Image = styled.img`
  border-radius: 15px;
  box-shadow: 0 2px 12px 4px rgba(0, 0, 0, 0.4);
  max-width: 200px;
  margin: 24px 20px;
  transition: 0.6s;

  &:hover {
    transform: scale(0.8);
    transition: 0.6s;
  }
`;

export const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 200px;
`;

export const PopUp = styled.div`
  background-color: rgba(250, 250, 255, 0.8);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
