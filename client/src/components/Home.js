import React from "react";
import ImageBackground from "./ImageBackground";
import { Heading, Logo, PopUp, StyledLink, Text } from "../styledcomps";

const Home = () => {
  return (
    <div>
      <ImageBackground />
      <PopUp>
        <Heading>welcome to comemos!</Heading>
        <Logo src={"./public/images/logo.png"} />
        <Text>Share photos, find recipes, connect with friends!</Text>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </PopUp>
    </div>
  );
};

export default Home;
