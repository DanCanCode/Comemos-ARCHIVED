import React from "react";
import { StyledLink } from "../styledcomps";

const Home = () => {
  return (
    <>
      <h1>welcome to comemos!</h1>
      <p>Post photos, share recipes, connect with friends! </p>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </>
  );
};

export default Home;
