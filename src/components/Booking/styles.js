import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 6rem;
  .heading {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor4};
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .customBtn {
    margin-left: 8px;
    height: 48px;
    text-transform: none;
    font-weight: 600;
  }
  .showAll {
    font-size: ${theme.sizes.h7};
    font-weight: 200;
    font-style: italic;
    color: ${theme.colors.textColor4};
  }
  .calendarSpan {
    background: ${theme.colors.mainBackground};
    box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
      3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
      3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3),
      inset -1px -1px 2px rgba(21, 23, 30, 0.5);
    border-radius: 4px;
    padding: 8px;
  }
  .footerNextBtnWrapper {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    background: ${theme.colors.mainBackground};
  }
  .nextBtn {
    height: 48px;
    font-size: ${theme.sizes.h8};
    margin: 1rem;
  }
  .availableDate {
    height: 100%;
    overflow: auto;
  }
`;
