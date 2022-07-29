import React from "react";
import { StyledLink } from "../styledcomps";

const SignUp = () => {
  return (
    <>
      <div>
        <h2>Welcome to Comemos!</h2>

        <form>
          <label>Email:</label>
          <input type="text" id="email" name="email" />

          <label>Password:</label>
          <input type="text" id="password" name="password" />

          <input type="submit" value="Submit"></input>
        </form>

        <p>
          Alreayd a member? <StyledLink to={"/login"}>Login Here!</StyledLink>
        </p>
      </div>
    </>
  );
};

export default SignUp;
