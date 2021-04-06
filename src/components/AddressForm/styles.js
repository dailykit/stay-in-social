import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
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
  .footer-submit-btn-div {
    background: ${theme.colors.mainBackground};
    box-shadow: 0px -6px 9px 3px rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 2rem;
    left: 0;
    z-index: 5;
    padding: 1rem;
    width: 100%;
    .custom-submit-button {
      height: 38px;
      color: ${theme.colors.textColor4};
    }
  }
`;
