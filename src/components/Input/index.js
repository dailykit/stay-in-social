import React from "react";
import {
  StyledInput,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./styles";

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default function Input({ className, children, ...props }) {
  if (props.type === "checkbox") {
    return <Checkbox className={className} {...props} />;
  } else {
    return (
      <StyledInput className={className} {...props}>
        {children}
      </StyledInput>
    );
  }
}
