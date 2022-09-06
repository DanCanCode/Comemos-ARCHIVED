import React, { useState } from "react";
import { Heading, Logo, PopUp, StyledLink, Text } from "../styledcomps";
import ImageBackground from "./ImageBackground";
import UserForm from "./UserForm";

const SignUp = () => {
  return (
    <div>
      <ImageBackground />
      <PopUp>
        <Heading>welcome to comemos!</Heading>
        <Logo src={"./public/images/logo.png"} />
        <Text>Share photos, find recipes, connect with friends!</Text>

        <UserForm />

        <Text>Already have an account?</Text>
        <StyledLink to={"/login"}>Login Here!</StyledLink>
      </PopUp>
    </div>
  );
};

export default SignUp;
