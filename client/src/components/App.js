import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import PartyConfetti from "../../../public/fonts/PartyConfetti.ttf";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Profile from "./Profile";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: aqua;
}

@font-face {
  font-family: Party Confetti;
  font-style: normal;
  font-weight: 400;
  src: url(${PartyConfetti}) format('truetype');
}

h1 {
  font-family: Party Confetti
}
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
