import styled from "styled-components";
import { theme } from "../../../theme";
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background: ${theme.colors.mainBackground};
  box-shadow: ${({ boxShadow }) =>
    boxShadow === "true"
      ? "0px 8px 12px 2px rgba(0, 0, 0, 0.32)"
      : "none" || "0px 8px 12px 2px rgba(0, 0, 0, 0.32)"};
  border-radius: 16px;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (min-width: 769px) {
    height: 400px;
  }
`;

export const CardBody = styled.div`
  color: ${theme.colors.textColor2};
  width: 100%;
  .exp-name {
    margin: 4px 0 4px 0;
    font-size: ${theme.sizes.h8};
    font-weight: 500;
    text-align: left;
  }

  .duration {
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
      font-size: ${theme.sizes.h7};
    }
  }
  .expert-info-wrapper {
    display: flex;
    align-items: center;
    .expertImgDiv {
      width: 14px;
      height: 14px;
      height: 100%;
    }
    .expert-name {
      font-size: ${theme.sizes.h6};
      font-weight: 500;
      color: ${theme.colors.textColor4};
      margin-left: 8px;
    }
    .expert-img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
  @media (min-width: 769px) {
    .exp-name {
      margin: 1rem 0 0.5rem 0;
      font-size: ${theme.sizes.h4};
    }
    .expert-name {
      font-size: ${theme.sizes.h8};
    }
    .expert-info-wrapper {
      .expertImgDiv {
        width: 24px;
        height: 24px;
      }
    }
    .duration {
      span {
        font-size: ${theme.sizes.h8};
      }
    }
  }
`;
