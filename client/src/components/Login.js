import React from "react";
import { Heading, Logo, PopUp, StyledLink, Text } from "../styledcomps";
import ImageBackground from "./ImageBackground";
import UserForm from "./UserForm";

const Login = () => {
  return (
    <div>
      <ImageBackground />
      <PopUp>
        <Heading>welcome back!</Heading>
        <Logo src={"./public/images/logo.png"} />
        <Text>Share photos, find recipes, connect with friends!</Text>

        <UserForm />

        <Text>New to Comemos?</Text>
        <StyledLink to={"/signup"}>Sign up Here!</StyledLink>
      </PopUp>
    </div>
  );
};

export default Login;
