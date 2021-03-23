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
