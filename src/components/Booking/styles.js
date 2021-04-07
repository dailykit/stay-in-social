import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: ${({ isCelebrating }) => isCelebrating && "blur(4px)"};
  margin-bottom: 5rem;
  .modal-content-div {
    font-size: ${theme.sizes.h8};
    font-weight: 600;
    color: ${theme.colors.textColor4};
    background: ${theme.colors.mainBackground};
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    small {
      font-size: ${theme.sizes.h12};
    }
  }
  .top-heading {
    font-size: ${theme.sizes.h3};
    font-weight: 400;
    color: ${theme.colors.textColor4};
    text-transform: uppercase;
    margin-bottom: 28px;
    text-align: center;
  }
  .heading {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor4};
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;
  }
  .customBtn {
    margin-left: 8px;
    height: 48px;
    text-transform: none;
    font-weight: 600;
  }
  .customAddressBtn {
    height: 38px;
    text-transform: none;
    font-weight: 600;
    width: auto;
    padding: 0 1rem;
  }
  .customAddressInput {
    margin-bottom: 1rem;
    color: ${theme.colors.textColor4};
  }
  .address-head {
    font-size: ${theme.sizes.h6};
    font-weight: 500;
    color: ${theme.colors.textColor4};
    margin: 1rem;
    text-align: left;
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
    bottom: 2px;
    left: 0;
    z-index: 5;
    width: 100%;
    background: ${theme.colors.mainBackground};
    padding: 1rem;
  }
  .nextBtn {
    height: 48px;
    font-size: ${theme.sizes.h8};
    padding: 0 8px;
  }
  .previousBtn {
    margin: 0;
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    cursor: pointer;
  }
  .availableDate {
    height: 100%;
    overflow: auto;
  }
  .minHead {
    font-size: ${theme.sizes.h7};
    font-weight: 500;
  }
  .guest {
    font-size: ${theme.sizes.h8};
    font-weight: normal;
    display: inline-block;
  }
  .minCost {
    margin-left: 4px;
    display: inline-block;
    font-size: ${theme.sizes.h4};
    font-weight: normal;
  }
  .normal-p {
    margin: 0 1rem;
    font-size: ${theme.sizes.h6};
    color: ${theme.colors.textColor4};
    line-height: ${theme.sizes.h3};
  }
  .change-head {
    color: ${theme.colors.textColor};
    cursor: pointer;
  }

  @media (min-width: 769px) {
    .footerNextBtnWrapper {
      position: sticky;
    }
  }
`;

export const Wrap = styled.div`
  .small-head {
    font-size: ${theme.sizes.h8};
    font-weight: 400;
    color: ${theme.colors.textColor4};
  }
  .minGuest {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor4};
  }
  .counter-head {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor4};
    text-transform: uppercase;
  }
  .breakdown-head {
    font-size: ${theme.sizes.h6};
    font-weight: 700;
    color: ${theme.colors.textColor};
    cursor: pointer;
  }
  .counter-wrap {
    background: ${theme.colors.mainBackground};
    box-shadow: 1px 1px 2px rgba(50, 56, 72, 0.3),
      -1px -1px 2px rgba(17, 19, 24, 0.5),
      inset -5px 5px 10px rgba(17, 19, 24, 0.2),
      inset 5px -5px 10px rgba(17, 19, 24, 0.2),
      inset -5px -5px 10px rgba(50, 56, 72, 0.9),
      inset 5px 5px 13px rgba(17, 19, 24, 0.9);
    border-radius: 4px;
    padding: 1rem 0;
  }
  .minGuest-b {
    font-size: ${theme.sizes.h2};
    font-weight: 700;
    color: ${theme.colors.textColor4};
  }
  .discount-info {
    text-align: right;
    font-size: ${theme.sizes.h6};
    font-weight: 500;
    color: ${theme.colors.tertiaryColor};
    margin: 10px 0;
  }
  .checkbox-wrap {
    display: flex;
    background: ${theme.colors.mainBackground};
    box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
      3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
      3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3),
      inset -1px -1px 2px rgba(21, 23, 30, 0.5);
    border-radius: 4px;
    padding: 1rem;
    .checkbox-label {
      margin-left: 1rem;
      font-size: ${theme.sizes.h6};
      font-weight: 500;
      color: ${theme.colors.textColor4};
    }
  }
  .booking-info {
    padding: 1rem;
    background: ${theme.colors.mainBackground};
    box-shadow: -1px 1px 2px rgba(27, 30, 39, 0.2),
      1px -1px 2px rgba(27, 30, 39, 0.2), -1px -1px 2px rgba(39, 44, 57, 0.9),
      1px 1px 3px rgba(27, 30, 39, 0.9), inset 1px 1px 2px rgba(39, 44, 57, 0.3),
      inset -1px -1px 2px rgba(27, 30, 39, 0.5);
    border-radius: 4px;
    p {
      font-size: ${theme.sizes.h6};
      color: ${theme.colors.textColor4};
      line-height: ${theme.sizes.h3};
    }
  }
  .counter-update {
    padding: 1rem;
    margin: 28px 0;
    background: ${theme.colors.mainBackground};
    box-shadow: -1px 1px 2px rgba(27, 30, 39, 0.2),
      1px -1px 2px rgba(27, 30, 39, 0.2), -1px -1px 2px rgba(39, 44, 57, 0.9),
      1px 1px 3px rgba(27, 30, 39, 0.9), inset 1px 1px 2px rgba(39, 44, 57, 0.3),
      inset -1px -1px 2px rgba(27, 30, 39, 0.5);
    border-radius: 4px;
    p {
      font-size: ${theme.sizes.h6};
      color: ${theme.colors.textColor4};
      line-height: ${theme.sizes.h3};
    }
    small {
      font-size: ${theme.sizes.h7};
      font-weight: 300;
      color: ${theme.colors.textColor4};
    }
    .guest-count {
      font-size: ${theme.sizes.h2};
      font-weight: 700;
      color: ${theme.colors.textColor4};
    }
  }
  .update-address {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    .change-head {
      color: ${theme.colors.textColor};
      cursor: pointer;
    }
  }
  .table-wrap {
    font-size: ${theme.sizes.h6};
    font-weight: 500;
    margin-bottom: 2rem;
    color: ${theme.colors.textColor4};
    table {
      width: 100%;
      td {
        text-align: left;
        padding: 8px;
      }
      td:nth-child(even) {
        text-align: right;
      }
    }
  }
  .points-wrap {
    margin-bottom: 2rem;
    .extra-pts-wrap {
      margin-bottom: 1rem;
      color: ${theme.colors.textColor4};
      padding: 1rem;
      background: ${theme.colors.mainBackground};
      box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
        3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
        3px 3px 8px rgba(21, 23, 30, 0.9),
        inset 1px 1px 2px rgba(45, 51, 66, 0.3),
        inset -1px -1px 2px rgba(21, 23, 30, 0.5);
      border-radius: 4px;
      p {
        font-size: ${theme.sizes.h6};
        font-weight: 500;
      }
      small {
        font-size: ${theme.sizes.h7};
        font-weight: 300;
        color: ${theme.colors.textColor4};
        font-style: italic;
      }
      h1 {
        font-size: ${theme.sizes.h3};
        font-weight: 700;
        color: ${theme.colors.textColor4};
      }
    }
  }
  .coupon-wrapper {
    margin: 0 1rem;
    margin-bottom: 2rem;
    padding: 8px;
    border: 1px solid ${theme.colors.textColor};
    color: ${theme.colors.textColor};
    h1 {
      font-size: ${theme.sizes.h8};
      font-weight: 700;
    }
    small {
      font-size: ${theme.sizes.h7};
      font-weight: 300;
      font-style: italic;
    }
  }
  .total-sum {
    font-size: ${theme.sizes.h4};
    font-weight: 700;
    color: ${theme.colors.textColor4};
    margin: 0 1rem;
    margin-bottom: 8rem;
  }
  .add-address-p {
    font-size: ${theme.sizes.h7};
    font-weight: 500;
    color: ${theme.colors.textColor4};
    margin: 2rem 1rem 1rem;
  }
  .address-div {
    font-size: ${theme.sizes.h7};
    font-weight: 500;
    color: ${theme.colors.textColor4};
    background: ${theme.colors.mainBackground};
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem 0;
  }
`;
