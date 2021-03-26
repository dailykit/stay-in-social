import styled from "styled-components";
import { theme } from "../../theme";
export const Wrapper = styled.div`
  .heading {
    font-size: ${theme.sizes.h2};
    font-weight: 800;
    color: ${theme.colors.textColor4};
    text-align: center;
    margin: 2rem;
  }
  .customInput {
    margin-bottom: 1.5rem;
    color: ${theme.colors.textColor2};
  }
  .loginBtnWrap {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 1rem;
    margin-bottom: 1rem;
    z-index: 3;
  }
  .loginBtn {
    height: 48px;
    font-size: ${theme.sizes.h8};
    width: ${({ isOpen }) => isOpen && "90%"};
  }
  .forgotPassword {
    color: ${theme.colors.textColor4};
    margin-bottom: 4rem;
    text-align: right;
    margin-right: 1rem;
    cursor: pointer;
  }

  .redirectToSignup {
    display: block;
    color: ${theme.colors.textColor2};
    font-size: ${theme.sizes.h6};
    margin-bottom: 6rem;
    text-align: right;
    margin-right: 1rem;
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: ${theme.colors.tertiaryColor};
      font-weight: 800;
    }
  }

  @media (min-width: 769px) {
    .loginBtnWrap {
      position: relative;
      padding: 0;
      z-index: 0;
    }
    .redirectToSignup {
      display: none;
    }
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 769px) {
    width: ${({ isOpen }) => (isOpen ? "80%" : "65%")};
  }
`;
