import React, { useEffect } from "react";
import ImageBackground from "./ImageBackground";
import { Heading, Logo, PopUp, StyledLink, Text } from "../styledcomps";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, []);

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

export default Welcome;
