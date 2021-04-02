import styled from "styled-components";
import { theme } from "../../theme";

export const BackDropDiv = styled.div`
  background: ${theme.colors.backDropColor};
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  cursor: pointer;
`;
