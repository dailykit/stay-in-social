import styled from "styled-components";
import { theme } from "../../../theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background: ${theme.colors.mainBackground};
  box-shadow: 0px 8px 12px 2px rgba(0, 0, 0, 0.32);
  border-radius: 16px;
  cursor: pointer;
  .card-heading {
    font-size: ${theme.sizes.h8};
    font-weight: 600;
    color: ${theme.colors.textColor4};
    margin-bottom: 12px;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CardBody = styled.div`
  color: #fafafa;
  width: 100%;
  .goForward {
    color: ${theme.colors.textColor};
  }

  .exp-name {
    margin: 4px 0 4px 0;
    font-size: ${theme.sizes.h8};
    font-weight: 500;
    text-align: left;
  }
  .exp-info {
    font-weight: 800;
    font-size: ${theme.sizes.h7};
    span {
      font-weight: 400;
      font-size: ${theme.sizes.h7};
    }
  }
  .book-exp {
    text-align: center;
    font-weight: 800;
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.tertiaryColor};
    text-transform: uppercase;
    cursor: pointer;
  }
  .duration {
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
      font-size: ${theme.sizes.h7};
    }
  }
  .expertImgDiv {
    width: 14px;
    height: 14px;
    margin-right: 4px;
    .expert-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .viewReceipt {
    text-decoration: underline;
    cursor: pointer;
    margin-left: 4px;
  }

  @media (min-width: 769px) {
    .exp-name {
      margin: 1rem 0 0.5rem 0;
      font-size: ${theme.sizes.h4};
    }
    .exp-info {
      font-size: ${theme.sizes.h8};
      font-weight: 600;
    }
    .duration {
      span {
        font-size: ${theme.sizes.h8};
      }
    }
    .book-exp {
      font-size: ${theme.sizes.h8};
    }
    .expertImgDiv {
      width: 24px;
      height: 24px;
    }
  }
`;
