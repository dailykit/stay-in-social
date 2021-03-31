import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .expertImg {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  .expertName {
    font-size: ${theme.sizes.h3};
    color: ${theme.colors.textColor4};
    font-weight: 800;
    margin-bottom: 8px;
  }
  .expertCategory {
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.textColor4};
    font-weight: 400;
    margin-bottom: 10px;
  }
  .expertExp {
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.textColor4};
    font-weight: 400;
    margin-bottom: 43px;
  }
  .expertDesc {
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
    .expertImg {
      width: 150px;
      height: 150px;
    }
    .expertName {
      font-size: ${theme.sizes.h1};
    }
    .expertCategory {
      font-size: ${theme.sizes.h3};
    }
    .expertDesc {
      font-size: ${theme.sizes.h9};
    }
    .readMore {
      font-size: ${theme.sizes.h3};
    }
  }
`;
