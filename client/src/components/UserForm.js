import React, { useState } from "react";
import { Form } from "../styledcomps";
import { FaEnvelope, FaLock } from "react-icons/fa";

const UserForm = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Form>
        <div>
          <FaEnvelope
            style={{
              color: "gray",
              fontSize: "20px",
              position: "absolute",
              marginLeft: "5px",
            }}
          />
          <input type="text" name="email" placeholder="Email" />
        </div>

        <div>
          <FaLock
            style={{ color: "gray", fontSize: "20px", position: "absolute" }}
          />
          <input type="text" name="password" placeholder="Password" />
        </div>

        <input type="submit" value="Submit"></input>
      </Form>
    </>
  );
};

export default UserForm;
