import React, { useState } from "react";
import ImageBackground from "./ImageBackground";
import {
  ButtonInput,
  Form,
  PopUp,
  Logo,
  Text,
  Heading,
  StyledLink,
  UserIcon,
  EmailIcon,
  LockIcon,
  EyeIcon,
  EyeSlashIcon,
  Input,
  InputField,
} from "../styledcomps";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserForm = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.signup) {
      try {
        setError("");
        setLoading(true);
        await signup(userData.email, userData.password);
        useNavigate("/");
      } catch (error) {
        setError(error.message);
        console.log("ERROR", error.message);
      }
    } else if (props.login) {
      try {
        setError("");
        setLoading(true);
        await login(userData.email, userData.password);
        useNavigate("/");
      } catch (error) {
        setError(error.message);
        console.log("ERROR", error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <ImageBackground />
      <PopUp>
        <Heading>
          {props.signup ? "welcome to comemos!" : "welcome back!"}
        </Heading>
        <Logo src={"./public/images/logo.png"} />

        <Form onSubmit={handleSubmit}>
          {props.signup && (
            <InputField>
              <UserIcon />
              <Input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
              />
            </InputField>
          )}

          <InputField>
            <EmailIcon />
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </InputField>

          <InputField>
            <LockIcon />
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            {showPassword ? (
              <EyeIcon
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
              />
            ) : (
              <EyeSlashIcon
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
              />
            )}
          </InputField>

          <ButtonInput disabled={loading} type="submit" value="Submit" />
        </Form>

        <Text>
          {props.signup ? "Already have an account?" : "New to Comemos?"}
        </Text>
        <StyledLink to={props.signup ? "/login" : "/signup"}>
          {props.signup ? "Log in" : "Sign up"}
        </StyledLink>
      </PopUp>
    </div>
  );
};

export default UserForm;
