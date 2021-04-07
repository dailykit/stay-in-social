import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  .flex-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
  }
  .slots-div {
    padding: 1rem;
    flex: 1;
    color: ${theme.colors.textColor4};
    height: 280px;
    overflow: auto;
    .share-btn-div {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      .custom-share-btn {
        padding: 0 2rem;
      }
    }
  }
  .slot-div-wrap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
    margin-bottom: 1rem;
  }
  .slot-div {
    padding: 1rem;
    background: ${theme.colors.mainBackground};
    box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
      3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
      3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3),
      inset -1px -1px 2px rgba(21, 23, 30, 0.5);
    border-radius: 12px;
  }
  .slot-info-head {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor4};
  }
  .slot-info-time {
    font-size: ${theme.sizes.h8};
    font-weight: 500;
    color: ${theme.colors.textColor4};
  }
  .vote-head {
    font-size: ${theme.sizes.h8};
    font-weight: 500;
    color: ${theme.colors.textColor};
  }
  .book-slot {
    text-align: center;
    font-weight: 800;
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.tertiaryColor};
    text-transform: uppercase;
    cursor: pointer;
  }
  @media (min-width: 769px) {
    .flex-container {
      flex-direction: row;
    }
    .slots-div {
      position: relative;
      .share-btn-div {
        justify-content: flex-end;
        position: sticky;
        bottom: -1rem;
        padding: 1rem;
        background: ${theme.colors.mainBackground};
        .custom-share-btn {
          width: auto;
          padding: 0 2rem;
        }
      }
    }
    .slot-div-wrap {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1rem;
    }
  }
`;
