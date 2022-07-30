import React from "react";
import { Link } from "react-router-dom";

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
          Alreayd a member? <Link to={"/login"}>Login Here!</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
