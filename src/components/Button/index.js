import React from "react";
import { StyledButton } from "./styles.js";

export default function Button({ className, children, ...props }) {
  console.log("background", props.backgroundColor);
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}
