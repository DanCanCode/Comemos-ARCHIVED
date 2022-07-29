import React from "react";
import { StyledLink } from "../styledcomps";

const Home = () => {
  return (
    <>
      <h1>Welcome to Comemos</h1>
      <p>Post photos, share recipes, connect with friends! </p>
      <LinkButton to="/signup">Sign Up</LinkButton>
    </>
  );
};

export default Home;
