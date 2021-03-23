import React from "react";
import { StyledInput } from "./styles";

export default function Input({ className, children, ...props }) {
  return (
    <StyledInput className={className} {...props}>
      {children}
    </StyledInput>
  );
}
