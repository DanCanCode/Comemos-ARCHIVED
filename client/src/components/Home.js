import React from "react";
import { Box, StyledLink } from "../styledcomps";

const Home = () => {
  return (
    <>
      <Box>
        <h1>welcome to comemos!</h1>
        <p>Post photos, share recipes, connect with friends! </p>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </Box>
    </>
  );
};

export default Home;
