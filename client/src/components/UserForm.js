import React, { useState } from "react";
import {
  ButtonInput,
  Form,
  EmailIcon,
  LockIcon,
  Input,
  InputField,
} from "../styledcomps";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await useAuth.signup(userData.email, userData.password);
      //useNavigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={() => handleSubmit()}>
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

      <ButtonInput disabled={loading} type="submit" value="Submit" />
    </Form>
  );
};

export default UserForm;
