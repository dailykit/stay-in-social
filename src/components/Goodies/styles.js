import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  .sub-heading {
    font-size: ${theme.sizes.h3};
    color: ${theme.colors.textColor4};
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }
  .subsub-heading {
    font-size: ${theme.sizes.h6};
    color: ${theme.colors.textColor4};
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  .box-open-img {
    margin-bottom: 40px;
  }
  .goodiesImgWrapper {
    width: 100px;
    background: none;
    .goodieName {
      font-size: ${theme.sizes.h7};
      color: ${theme.colors.textColor4};
      text-align: center;
    }
  }
  .about-exp {
    text-align: justify;
    font-size: ${theme.sizes.h6};
    color: ${theme.colors.textColor4};
    font-weight: 400;
    margin-bottom: 46px;
  }
  .readMore {
    border: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: ${theme.sizes.h4};
    color: ${theme.colors.textColor};
    background: none;
    cursor: pointer;
    margin-bottom: 56px;
  }
  @media (min-width: 769px) {
    .sub-heading {
      font-size: ${theme.sizes.h2};
    }
    .subsub-heading {
      font-size: ${theme.sizes.h9};
    }
    .about-exp {
      font-size: ${theme.sizes.h9};
    }
    .readMore {
      font-size: ${theme.sizes.h3};
    }
  }
`;
