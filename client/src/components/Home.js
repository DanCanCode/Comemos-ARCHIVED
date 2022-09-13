import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";
import { Search, SearchIcon, Container, InnerContainer } from "../styledcomps";

const Home = () => {
  const { currentUser } = useAuth();

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

export default Home;
