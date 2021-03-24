import styled from "styled-components";
import { theme } from "../../../theme";
export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background: ${theme.colors.mainBackground};
  box-shadow: 0px 8px 12px 2px rgba(0, 0, 0, 0.32);
  border-radius: 16px;
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
  color: ${theme.colors.textColor2};
  width: 100%;
  .exp-name {
    margin: 1rem 0 0.5rem 0;
    font-size: ${theme.sizes.h4};
    font-weight: 500;
  }
  .exp-info: {
    font-size: ${theme.sizes.h8};
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
    }
  }
  .expertImgDiv {
    width: 24px;
    height: 24px;
  }
  .expert-img {
    border-radius: 50px;
  }
`;
