import React from "react";
import { PopUp, StyledLink } from "../styledcomps";

const Home = () => {
  return (
    <>
      <PopUp>
        <h1>welcome to comemos!</h1>
        <p>Post photos, share recipes, connect with friends! </p>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </PopUp>
    </>
  );
};

export default Home;
