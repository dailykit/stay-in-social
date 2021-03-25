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
  .signupBtnWrap {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 1rem;
    z-index: 3;
    margin: 1rem 0;
  }
  .signupBtn {
    height: 48px;
    font-size: ${theme.sizes.h8};
  }

  .redirectToLogin {
    display: block;
    color: ${theme.colors.textColor2};
    font-size: ${theme.sizes.h6};
    margin-bottom: 6rem;
    text-align: right;
    margin-right: 1rem;
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: ${theme.colors.textColor};
      font-weight: 800;
    }
  }

  @media (min-width: 769px) {
    .signupBtnWrap {
      position: relative;
      padding: 0;
      margin-top: 2rem;
    }
    .redirectToLogin {
      display: none;
    }
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 769px) {
    width: 60%;
  }
`;
