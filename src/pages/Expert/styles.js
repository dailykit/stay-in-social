import styled from "styled-components";
import { theme } from "../../theme.js";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
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
