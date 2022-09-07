import React, { useState } from "react";
import {
  ButtonInput,
  Form,
  EmailIcon,
  LockIcon,
  Input,
  InputField,
} from "../styledcomps";

const UserForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you pressed submit");
  };

  return (
    <Form>
      <InputField>
        <EmailIcon />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </InputField>

      <InputField>
        <LockIcon
          onClick={() =>
            setShowPassword((prevShowPassword) => !prevShowPassword)
          }
        />
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </InputField>

      <ButtonInput
        type="submit"
        value="Submit"
        onClick={() => handleSubmit()}
      />
    </Form>
  );
};

export default UserForm;
