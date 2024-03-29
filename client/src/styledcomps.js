import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaSearch,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaAt,
} from "react-icons/fa";

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

export const Container = styled.div`
  width: calc(100% - 350px);
  background-color: red;
  position: absolute;
  top: 0;
  left: 350px;
  min-height: 100vh;
`;

export const InnerContainer = styled.div`
  max-width: 950px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`;

export const AtIcon = styled(FaAt)`
  color: #808080;
  font-size: 18px;
  position: absolute;
  padding: 10px 8px;
`;

export const UserIcon = styled(FaUser)`
  color: #808080;
  font-size: 18px;
  position: absolute;
  padding: 10px 8px;
`;

export const EyeIcon = styled(FaEye)`
  color: #808080;
  font-size: 20px;
  position: absolute;
  padding: 10px 8px;
`;

export const EyeSlashIcon = styled(FaEyeSlash)`
  color: #808080;
  font-size: 20px;
  position: absolute;
  padding: 10px 8px;
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

export const SearchIcon = styled(FaSearch)`
  color: #808080;
  font-size: 18px;
  position: absolute;
  padding: 30px 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  letter-spacing: ${(props) => props.spacing || "0"};
  font-size: ${(props) => props.size || "32px"};
  margin: 0;
  margin-top: ${(props) => props.mT || "0"};
  margin-left: ${(props) => props.mL || "0"};
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


  animation: slide;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: ${(props) => props.dir || "normal"};
  animation-fill-mode: forwards;

  @keyframes slide {
    0% {
      left: 0;
      transform: translateX(-100%)
    }
    100% {
      left: 100%;
      transform: translateX(100%)
    }
`;

export const Input = styled.input`
  padding: 10px 30px;
  font-size: 14px;
`;

export const InputField = styled.div`
  margin: 10px 0;
`;

export const Logo = styled.img`
  max-width: ${(props) => props.size || "100px"};
  margin-left: ${(props) => props.mL || "auto"};
  margin-right: ${(props) => props.mR || "auto"};
  margin-top: ${(props) => props.mT || "0"};
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  position: fixed;
  width: 350px;
  height: 100vh;
`;

export const PopUp = styled.div`
  background-color: rgba(250, 250, 255, 0.9);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: fadeIn;
  animation-duration: 3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Search = styled(Input)`
  border-radius: 8px;
  border: 0;
  background-color: #f2f2f2;
  padding: 12px 40px;
  margin: 20px 0;

  &:focus {
    outline: 0;
  }
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
  color: ${(props) => props.color || "#000000"};
  font-weight: ${(props) => props.weight || "normal"};
  font-size: ${(props) => props.size || "16px"};
  overflow-wrap: ${(props) => props.overflowWrap || "break-word"};
  text-align: center;
  margin-top: ${(props) => props.mY || "10px"};
  margin-bottom: ${(props) => props.mB || props.mY || "10px"};
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => props.width || "75%"};
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  margin-top: ${(props) => props.mY || "10px"};
  margin-bottom: ${(props) => props.mB || props.mY || "10px"};
  margin-left: ${(props) => props.mX || "0"};
  margin-right: ${(props) => props.mX || "0"};
  padding-left: ${(props) => props.pX || "0"};
  padding-right: ${(props) => props.pX || "0"};
  border-right: ${(props) => props.bR || "none"};
`;

export const AnchorLink = styled(Link)`
  text-align: center;
  colr: #000000;
  text-decoration: none;
  margin: 10px 0 10px 50px;
  font-weight: 500;

  &:active {
    color: ${(props) => props.inputColor || "#ff0000"};
    border-right: 3px black;
    transform: scale(0.8);
    transition: 0.4s;
  }
`;
