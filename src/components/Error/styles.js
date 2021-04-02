import styled from "styled-components";
import { theme } from "../../theme";

export const ErrorDiv = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ margin }) => margin};
  span {
    height: 20px;
    width: 20px;
    display: flex;
    margin-right: 4px;
    align-items: center;
    justify-content: center;
  }
  p {
    color: ${theme.colors.tertiaryColor};
    font-size: ${theme.sizes.h7};
  }
`;
