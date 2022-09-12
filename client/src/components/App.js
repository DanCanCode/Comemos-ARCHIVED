import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import PartyConfetti from "../../../public/fonts/PartyConfetti.ttf";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Profile from "./Profile";
import { AuthProvider } from "../context/AuthContext";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: #FAF0E6;
}

@font-face {
  font-family: Party Confetti;
  font-style: normal;
  font-weight: 400;
  src: url(${PartyConfetti}) format('truetype');
}

h1, h2, h3, h4, h5, h6 {
  font-family: Party Confetti;
  text-align: center;
}

p {
  text-align: center;
  font-family: Helvetica, Futura, sans-serif;
}
`;

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
