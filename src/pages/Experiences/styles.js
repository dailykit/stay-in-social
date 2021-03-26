import styled from "styled-components";
import { theme } from "../../theme";
import flamingo from "../../assets/images/Hero.png";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  .heading {
    font-size: ${theme.sizes.h1};
    color: ${theme.colors.textColor4};
    font-weight: 400;
    text-align: center;
    margin-bottom: 80px;
  }
  .experienceHeading {
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.textColor4};
    font-weight: 400;
    margin-left: 40px;
    margin-bottom: 20px;
  }
  @media (min-width: 769px) {
    .experienceHeading {
      margin-left: 40px;
      font-size: ${theme.sizes.h1};
    }
  }
`;
export const CardWrapper = styled.div`
  height: 267px;
  width: 350px;
  margin: 0 auto;
`;
export const CardWrapperForExpert = styled.div`
  margin: 0 1rem 1rem 1rem;
`;

export const GridViewWrapper = styled.div`
  margin-bottom: 168px;
  .explore {
    text-align: center;
    font-size: ${theme.sizes.h4};
    color: ${theme.colors.textColor};
    font-weight: 800;
    margin-right: 8px;
  }
  .customInput {
    margin-bottom: 1.5rem;
    color: ${theme.colors.textColor2};
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

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  grid-auto-rows: 228px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 283px;
  }
`;
export const GridViewForExpert = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  overflow-y: auto;
`;

export const CategoryTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .categoryTag {
    height: 48px;
    font-size: ${theme.sizes.h8};
    width: auto;
    padding: 0 1rem;
    margin: 0 0 1rem 1rem;
    text-transform: none;
    font-weight: 500;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 6rem;
  .explore {
    text-align: center;
    font-size: ${theme.sizes.h4};
    color: ${theme.colors.textColor};
    font-weight: 800;
    margin-right: 8px;
  }
`;
