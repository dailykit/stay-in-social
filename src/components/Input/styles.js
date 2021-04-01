import styled from "styled-components";
import { theme } from "../../theme";
export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background: ${theme.colors.mainBackground};
  box-shadow: 1px 1px 2px rgba(50, 56, 72, 0.3),
    -1px -1px 2px rgba(17, 19, 24, 0.5),
    inset -5px 5px 10px rgba(17, 19, 24, 0.2),
    inset 5px -5px 10px rgba(17, 19, 24, 0.2),
    inset -5px -5px 10px rgba(50, 56, 72, 0.9),
    inset 5px 5px 13px rgba(17, 19, 24, 0.9);
  border-radius: 4px;
  border: none;
  padding: 16px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${({ customWidth }) => customWidth || "16px"};
  height: ${({ customHeight }) => customHeight || "16px"};
  background: ${({ checked }) =>
    checked ? theme.colors.secondaryColor : theme.colors.textColor8};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
