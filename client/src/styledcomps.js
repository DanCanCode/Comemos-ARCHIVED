import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-bottom: 0;
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

export const InputField = styled.div``;

export const Logo = styled.img`
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const PopUp = styled.div`
  background-color: rgba(250, 250, 255, 0.9);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLink = styled(Link)`
  align-self: center;
  background-color: ${(props) => props.inputColor || "#273469"};
  border-radius: 12px;
  color: #ffffff;
  display: inline-block;
  font-family: Arial, san-serif;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    transform: scale(0.8);
    transition: 0.4s;
  }
`;

export const Text = styled.p`
  font-weight: bold;
  overflow-wrap: break-word;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;
