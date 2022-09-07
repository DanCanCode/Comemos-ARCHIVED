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
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <Form>
      <InputField>
        <EmailIcon />
        <Input type="text" name="email" placeholder="Email" />
      </InputField>

      <InputField>
        <LockIcon />
        <Input type="text" name="password" placeholder="Password" />
      </InputField>

      <ButtonInput type="submit" value="Submit"></ButtonInput>
    </Form>
  );
};

export default UserForm;
