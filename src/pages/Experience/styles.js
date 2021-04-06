import styled from "styled-components";
import { theme } from "../../theme";

export const StyledWrapper = styled.div`
  filter: ${({ isCelebrating }) => isCelebrating && "blur(4px)"};
  display: grid;
  height: calc(100vh - 64px);
  grid-column-gap: 2rem;
  grid-template-areas: ${({ isDesktopView }) =>
    isDesktopView ? " 'main main aside'" : " 'main main'"};
  > main {
    grid-area: main;
    overflow-y: auto;
    height: calc(100vh - 80px);
    width: 100%;
    padding: 1rem;
  }
  > aside {
    position: relative;
    height: 710px;
    overflow: auto;
    width: 450px;
    display: flex;
    grid-area: aside;
    padding: 1rem;
    flex-direction: column;
    background: ${theme.colors.mainBackground};
    box-shadow: -12px 12px 24px rgba(18, 21, 27, 0.2),
      12px -12px 24px rgba(18, 21, 27, 0.2),
      -12px -12px 24px rgba(48, 53, 69, 0.9),
      12px 12px 30px rgba(18, 21, 27, 0.9),
      inset 1px 1px 2px rgba(48, 53, 69, 0.3),
      inset -1px -1px 2px rgba(18, 21, 27, 0.5);
  }
  .footerBtnWrapper {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    background: ${theme.colors.mainBackground};
    @media (min-width: 769px) {
      display: none;
    }
  }
  a {
    margin: 1rem;
    width: 100%;
  }
  .customFooterBtn {
    height: 48px;
    width: 100%;
  }
  .modal-content {
    padding: 1rem;
  }
`;

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;

  .player-wrapper {
    width: 100%;
    height: 320px;
    margin-bottom: 28px;
    position: relative;
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
    position: relative;
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
      margin-bottom: 80px;
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
    .customPollBtn {
      width: auto;
      background: ${theme.colors.secondaryColor};
      padding: 0 8px;
      height: 30px;
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
        .activeHash {
          border-bottom: 2px solid ${theme.colors.textColor};
          color: ${theme.colors.textColor};
          padding-bottom: 10px;
        }
        a {
          text-decoration: none;
          color: ${theme.colors.textColor2};
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

export const GridViewWrapper = styled.div`
  margin-bottom: 1rem;
  .experienceHeading {
    font-size: ${theme.sizes.h3};
    color: ${theme.colors.textColor4};
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  .explore {
    text-align: center;
    font-size: ${theme.sizes.h4};
    color: ${theme.colors.textColor};
    font-weight: 800;
    margin-right: 8px;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
    margin-right: 40px;
  }

  .my-masonry-grid_column > div {
    margin: 0 0 40px 40px;
  }

  @media (min-width: 769px) {
    .exploreExperience {
      text-align: center;
      font-size: ${theme.sizes.h1};
      color: ${theme.colors.textColor};
      font-weight: 800;
    }
    .experienceHeading {
      font-size: ${theme.sizes.h1};
    }
  }
  @media (max-width: 769px) {
    .my-masonry-grid {
      margin-right: 1rem;
    }
    .my-masonry-grid_column > div {
      margin: 0 0 1rem 1rem;
    }
  }
`;

export const Wrap = styled.div`
  .booking-done {
    margin-top: 4rem;
    padding: 1rem;
    img {
      width: 94px;
      height: 94px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      font-size: ${theme.sizes.h3};
      font-weight: 700;
      color: ${theme.colors.textColor4};
      text-align: center;
    }
  }
`;
