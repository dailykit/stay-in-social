import styled from "styled-components";
import { theme } from "../../theme";
export const NavBar = styled.nav`
  height: 64px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
  .nav-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  .nav-list-item {
    list-style: none;
    font-size: ${theme.sizes.h4};
    padding: 8px;
    margin-left: 4rem;
    a {
      text-decoration: none;
      color: ${theme.colors.textColor4};
    }
    a:active: {
      color: ${theme.colors.textColor};
    }
  }
  .brand {
    margin-left: 8px;
    a {
      color: ${theme.colors.tertiaryColor};
    }
  }
  .activeLink {
    color: ${theme.colors.textColor} !important;
    padding-bottom: 8px;
    border-bottom: ${`2px solid ${theme.colors.textColor}`};
  }
  .spacer {
    display: flex;
    flex: 1;
  }
  .buttonWrapper {
    margin: 0 1rem;
    cursor: pointer;
  }
  .customBtn {
    height: 38px;
    font-size: ${theme.sizes.h6};
  }
`;
