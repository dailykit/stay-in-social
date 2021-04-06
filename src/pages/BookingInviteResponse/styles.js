import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  margin-bottom: 12rem;
  filter: ${({ isCelebrating }) => isCelebrating && "blur(4px)"};
  .host-img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin: 0 8px;
    border-radius: 50%;
  }
  .invitation-head {
    font-size: ${theme.sizes.h2};
    font-weight: 600;
    color: ${theme.colors.textColor4};
    text-align: center;
  }
  .below-para {
    font-size: ${theme.sizes.h7};
    font-weight: 400;
    color: ${theme.colors.textColor4};
    text-align: center;
  }
  .normal-heading {
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.textColor4};
    margin-bottom: 20px;
  }

  .kit-includes-div {
    padding: 1rem;
    background: ${theme.colors.textColor9};
    margin-bottom: 2rem;
    .kit-img {
      width: 50px;
      height: 50px;
    }
    .kit-head {
      font-size: ${theme.sizes.h8};
      font-weight: 400;
      font-style: italic;
      color: ${theme.colors.textColor4};
      margin-left: 8px;
    }
    .kit-info {
      font-size: ${theme.sizes.h8};
      font-weight: 700;
      color: ${theme.colors.textColor};
      text-align: center;
    }
  }
  .heading-before {
    font-size: ${theme.sizes.h4};
    font-weight: 300;
    color: ${theme.colors.textColor4};
    text-align: center;
    margin-bottom: 20px;
  }
  .sub-heading-before {
    font-size: ${theme.sizes.h6};
    font-weight: 500;
    color: ${theme.colors.textColor4};
    text-align: center;
    margin-bottom: 12px;
  }
  .accept-form-div {
    margin-bottom: 4rem;
  }
  .customInput {
    margin-bottom: 20px;
    color: ${theme.colors.textColor4};
  }
  .small-head {
    font-size: ${theme.sizes.h7};
    font-weight: 500;
    color: ${theme.colors.textColor4};
    margin-bottom: 12px;
  }

  .address-wrapper {
    margin: 1rem 0;
    margin-bottom: 2rem;
    padding: 8px;
    border: 1px solid ${theme.colors.textColor};
    color: ${theme.colors.textColor};
    cursor: pointer;
  }

  .slots-wrapper {
    margin-bottom: 8rem;
  }

  .slot-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.textColor4};
    background: ${theme.colors.mainBackground};
    box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
      3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
      3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3),
      inset -1px -1px 2px rgba(21, 23, 30, 0.5);
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 12px;
    .slot-time {
      font-size: ${theme.sizes.h6};
      font-weight: 500;
      color: ${theme.colors.textColor4};
      margin-left: 8px;
    }
    .vote-count {
      font-size: ${theme.sizes.h11};
      font-weight: 400;
      font-style: italic;
      color: ${theme.colors.textColor4};
    }
  }
  .footer-accept-btn-div {
    background: ${theme.colors.mainBackground};
    box-shadow: 0px -6px 9px 3px rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    padding: 1rem;
    width: 100%;
    .poll-expiry-msg {
      font-size: ${theme.sizes.h7};
      font-weight: 400;
      font-style: italic;
      color: ${theme.colors.textColor4};
      text-align: center;
      margin-bottom: 8px;
    }
    .custom-accept-btn {
      height: 48px;
    }
  }
  .modal-content-div {
    color: ${theme.colors.textColor4};
    padding: 1rem;
    .pinImg {
      width: 50px;
      height: 50px;
      display: block;
      margin: 1rem auto;
    }
    .response-head {
      font-size: ${theme.sizes.h3};
      font-weight: 800;
      color: ${theme.colors.textColor4};
      margin-bottom: 22px;
      text-align: center;
    }
    .response-sub-head {
      font-size: ${theme.sizes.h6};
      font-weight: 500;
      color: ${theme.colors.textColor4};
      margin-bottom: 2rem;
      text-align: center;
    }
    .custom-response-input {
      color: ${theme.colors.textColor4};
      margin-bottom: 20px;
    }
    .custom-done-btn-wrapper {
      background: ${theme.colors.mainBackground};
      position: absolute;
      bottom: 2rem;
      left: 0;
      z-index: 5;
      padding: 1rem;
      width: 100%;
    }
    .custom-done-btn {
      height: 48px;
    }
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

  @media (min-width: 769px) {
    width: 60%;
    height: 100%;
    margin: 2rem auto;
    background: #212530;
    box-shadow: 1px 1px 2px rgba(38, 43, 56, 0.3),
      -1px -1px 2px rgba(28, 31, 40, 0.5),
      inset -16px 16px 32px rgba(28, 31, 40, 0.2),
      inset 16px -16px 32px rgba(28, 31, 40, 0.2),
      inset -16px -16px 32px rgba(38, 43, 56, 0.9),
      inset 16px 16px 40px rgba(28, 31, 40, 0.9);
    padding: 1rem;
    position: relative;
    .footer-sticky-btn-div {
      bottom: 2rem;
    }
  }
`;

export const StyledWrap = styled.div`
  .response-done {
    margin-top: 4rem;
    padding: 1rem;
    img {
      width: 94px;
      height: 94px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      font-size: ${theme.sizes.h3};
      font-weight: 700;
      color: ${theme.colors.textColor4};
      text-align: center;
      margin-bottom: 25px;
    }
    p {
      font-size: ${theme.sizes.h8};
      font-weight: 600;
      color: ${theme.colors.textColor4};
      text-align: center;
    }
  }
`;
