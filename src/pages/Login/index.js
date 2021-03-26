import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { Wrapper, FormWrap } from "./styles";

export default function Login({ authBtnClassName, ...props }) {
  return (
    <Wrapper {...props}>
      <p class="redirectToSignup">
        Don't have an account? <Link to="/signup">SIGN UP</Link>
      </p>
      <h1 className="heading">Log In</h1>
      <FormWrap {...props}>
        <Input type="email" placeholder="Your email" className="customInput" />
        <Input
          type="password"
          placeholder="Enter password"
          className="customInput"
        />
        <p className="forgotPassword">Forgot Password?</p>

        <div className={`loginBtnWrap ${authBtnClassName}`}>
          <Button className="loginBtn">Log in</Button>
        </div>
      </FormWrap>
    </Wrapper>
  );
}
