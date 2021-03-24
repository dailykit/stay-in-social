import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { Wrapper, FormWrap } from "./styles";

export default function Login() {
  return (
    <Wrapper>
      <p class="redirectToSignup">
        Don't have an account? <Link to="/signup">SIGN UP</Link>
      </p>
      <h1 className="heading">Log In</h1>
      <FormWrap>
        <Input type="email" placeholder="Your email" className="customInput" />
        <Input
          type="password"
          placeholder="Enter password"
          className="customInput"
        />
        <p className="forgotPassword">Forgot Password?</p>

        <div className="loginBtnWrap">
          <Button className="loginBtn">Log in</Button>
        </div>
      </FormWrap>
    </Wrapper>
  );
}
