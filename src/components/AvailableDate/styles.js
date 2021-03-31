import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
  .customBtn {
    height: 48px;
    text-transform: none;
    font-weight: 600;
    width: auto;
    padding: 0 1rem;
    margin: 0 0 1rem 1rem;
    .spanText {
      font-size: ${theme.sizes.h7};
      font-weight: 300;
      font-style: italic;
      color: ${theme.colors.textColor4};
      margin-right: 4px;
    }
    .time {
      font-size: ${theme.sizes.h8};
      font-weight: 500;
      color: ${theme.colors.textColor4};
    }
  }
  .date {
    font-size: ${theme.sizes.h6};
    font-weight: 500;
    color: ${theme.colors.textColor4};
    margin-bottom: 12px;
    text-align: left;
  }
`;
