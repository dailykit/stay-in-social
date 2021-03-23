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
  }
  .signupBtnWrap {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 1rem;
    margin-bottom: 1rem;
    z-index: 3;
  }
  .signupBtn {
    height: 48px;
    font-size: ${theme.sizes.h8};
  }

  @media (min-width: 769px) {
    .signupBtnWrap {
      position: relative;
      padding: 0;
    }
  }
`;
