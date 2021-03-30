import styled from "styled-components";
import { theme } from "../../theme.js";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  .expert {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    margin-bottom: 43px;
  }
  .expertDesc {
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

export const GridViewWrapper = styled.div`
  margin-bottom: 168px;
  .experienceHeading {
    font-size: ${theme.sizes.h3};
    color: ${theme.colors.textColor4};
    font-weight: 400;
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
  @media (max-width: 800px) {
    .my-masonry-grid {
      margin-right: 1rem;
    }
    .my-masonry-grid_column > div {
      margin: 0 0 1rem 1rem;
    }
  }
`;
