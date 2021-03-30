import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  .player-wrapper {
    width: 100%;
    height: 320px;
    margin-bottom: 28px;
  }
  .heading {
    font-size: ${theme.sizes.h2};
    color: ${theme.colors.textColor4};
    font-weight: 800;
    margin-bottom: 20px;
  }
  .category {
    font-style: italic;
    font-size: ${theme.sizes.h6};
    color: ${theme.colors.textColor4};
  }
  .duration {
    font-weight: 500;
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.textColor4};
    margin-left: 8px;
  }
  @media (min-width: 769px) {
    .player-wrapper {
      height: 480px;
    }
    .heading {
      font-size: ${theme.sizes.h1};
    }
    .category {
      font-size: ${theme.sizes.h8};
    }
    .duration {
      font-size: ${theme.sizes.h9};
    }
  }
  section {
    text-align: center;
    padding: 2rem 1rem;
    .sub-heading {
      font-size: ${theme.sizes.h3};
      color: ${theme.colors.textColor4};
      font-weight: 400;
      text-align: center;
      margin-bottom: 20px;
    }
    .about-exp {
      text-align: center;
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
      .about-exp {
        font-size: ${theme.sizes.h9};
      }
      .readMore {
        font-size: ${theme.sizes.h3};
      }
    }
  }
`;

export const TabWrapper = styled.div`
  .tabOptions {
    position: relative;
    .scrollBtn {
      position: absolute;
      padding: 8px;
      cursor: pointer;
      z-index: 10;
      margin: 0 -8px;
      top: 0;
    }
    .scrollLeftBtn {
      left: 8px;
    }
    .scrollRightBtn {
      right: 8px;
    }
    .tab {
      position: relative;
      overflow: auto;
      width: 90%;
      height: 45px;
      scroll-behavior: smooth;
      scrollbar-width: none;
      margin: 0 auto;
      ul {
        width: max-content;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
      }
      li {
        list-style: none;
        font-size: ${theme.sizes.h6};
        padding: 8px;
        margin-left: 28px;
        a {
          text-decoration: none;
          color: ${theme.colors.textColor2};
          &:active,
          &:focus,
          &:hover {
            border-bottom: 2px solid ${theme.colors.textColor};
            color: ${theme.colors.textColor};
            padding-bottom: 10px;
          }
        }
      }
    }
  }
`;
