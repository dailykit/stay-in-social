import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  position: absolute;
  background: ${theme.colors.textColor};
  bottom: 4rem;
  right: 3rem;
  z-index: 10;
  width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  .back-to-top-wrapper {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
  }
  .back-to-top-link {
    margin-left: 4px;
    text-decoration: none;
    color: ${theme.colors.textColor4};
    font-size: ${theme.sizes.h7};
    font-weight: 500;
  }
`;
