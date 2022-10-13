import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { createGlobalStyle } from "styled-components";
import PartyConfetti from "../../../public/fonts/PartyConfetti.ttf";
import Welcome from "./Welcome";
import UserForm from "./UserForm";
import Explore from "./Explore";
import Posts from "./Posts";
import Profile from "./Profile";
import { AuthProvider } from "../context/AuthContext";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: #FFFFFF;
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

p, a {
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
          <Route exact path="/" element={<Welcome />} />
          <Route path="/signup" element={<UserForm signup />} />
          <Route path="/login" element={<UserForm login />} />
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
