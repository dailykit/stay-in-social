import React from "react";
import { StyledButton } from "./styles.js";

export default function Button({ className, children, ...props }) {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}
