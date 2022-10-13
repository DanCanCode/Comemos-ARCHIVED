import React from "react";
import Navbar from "./Navbar";
import { Search, SearchIcon, Container, InnerContainer } from "../styledcomps";

const Explore = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <InnerContainer>
          <SearchIcon />
          <Search type="text" name="search" placeholder="Search" />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default Explore;
