import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { Wrapper, FormWrap } from "./styles";

export default function Signup({ authBtnClassName, ...props }) {
  return (
    <Wrapper {...props}>
      <p className="redirectToLogin">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      <h1 className="heading">Sign Up</h1>
      <FormWrap {...props}>
        <Input type="text" placeholder="Your name" className="customInput" />
        <Input type="email" placeholder="Your email" className="customInput" />
        <Input
          type="password"
          placeholder="Enter password"
          className="customInput"
        />
        <Input
          type="password"
          placeholder="Confirm password"
          className="customInput"
        />
        <div className={`signupBtnWrap ${authBtnClassName}`}>
          <Button className="signupBtn">Sign Up</Button>
        </div>
      </FormWrap>
    </Wrapper>
  );
}
