import styled from "styled-components";
import { theme } from "../../theme";

export const Wrap = styled.div`
  .booking-done {
    margin-top: 4rem;
    padding: 1rem;
    img {
      width: 94px;
      height: 94px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      font-size: ${theme.sizes.h3};
      font-weight: 700;
      color: ${theme.colors.textColor4};
      text-align: center;
    }
  }
`;
