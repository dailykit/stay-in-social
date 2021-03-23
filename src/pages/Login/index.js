import React from "react";
import { Button, Input } from "../../components";
import { Wrapper } from "./styles";

export default function Login() {
  return (
    <Wrapper>
      <h1 className="heading">Log In</h1>
      <Input type="email" placeholder="Your email" className="customInput" />
      <Input type="text" placeholder="Enter password" className="customInput" />
      <p className="forgotPassword">Forgot Password?</p>

      <div className="loginBtnWrap">
        <Button className="loginBtn">Log in</Button>
      </div>
    </Wrapper>
  );
}
