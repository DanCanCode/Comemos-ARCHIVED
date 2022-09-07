import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const ButtonInput = styled.input`
  background-color: ${(props) => props.color || "#EF3054"};
  border-radius: 8px;
  border-style: none;
  color: #ffffff;
  font-size: 14px;
  padding: 10px;
  margin: 5px;
  transition: 0.4s;

  &:hover,
  &:active {
    background-color: ${(props) => props.color || "#BD2642"};
    transform: scale(0.8);
    transition: 0.4s;
  }
`;

export const EmailIcon = styled(FaEnvelope)`
  color: #808080;
  font-size: 18px;
  position: absolute;
  padding: 10px 8px;
`;

export const LockIcon = styled(FaLock)`
  color: #808080;
  font-size: 18px;
  position: absolute;
  padding: 10px 8px;
`;

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

export const Input = styled.input`
  padding: 10px 30px;
  font-size: 14px;
`;

export const InputField = styled.div`
  margin: 10px 0;
`;

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
  padding: 30px 25px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLink = styled(Link)`
  align-self: center;
  background-color: ${(props) => props.inputColor || "#254441"};
  border-radius: 8px;
  color: #ffffff;
  display: inline-block;
  font-family: sans-serif;
  font-size: 14px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  transition: 0.4s;

  &:hover,
  &:active {
    background-color: ${(props) => props.inputColor || "#152725"};
    transform: scale(0.8);
    transition: 0.4s;
  }
`;

export const Text = styled.p`
  overflow-wrap: break-word;
  text-align: center;
  margin: 10px auto;
  width: 75%;
`;
