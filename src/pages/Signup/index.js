import React from "react";
import { Button, Input } from "../../components";
import { Wrapper } from "./styles";

export default function Signup() {
  return (
    <Wrapper>
      <h1 className="heading">Sign Up</h1>
      <Input type="text" placeholder="Your name" className="customInput" />
      <Input type="email" placeholder="Your email" className="customInput" />
      <Input type="text" placeholder="Enter password" className="customInput" />
      <Input
        type="password"
        placeholder="Confirm password"
        className="customInput"
      />
      <div className="signupBtnWrap">
        <Button className="signupBtn">Sign Up</Button>
      </div>
    </Wrapper>
  );
}
