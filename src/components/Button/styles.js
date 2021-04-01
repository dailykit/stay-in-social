import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height || "38px"};
  box-shadow: ${({ isMainShadow }) =>
    isMainShadow
      ? "-3px 3px 6px rgba(21, 23, 30, 0.2), 3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9), 3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3), inset -1px -1px 2px rgba(21, 23, 30, 0.5)"
      : "0px 8px 20px rgba(0, 0, 0, 0.35)"};
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ textColor }) => textColor || "#fff"};
  background: ${({ backgroundColor }) =>
    backgroundColor ||
    "linear-gradient(49.18deg, #F44D4D 0.74%, #EB98AD 102.71%)"};
  border: none;
  font-weight: 800;
  cursor: pointer;
`;

export const CircularButton = styled.button`
  width: ${({ customWidth }) => customWidth || "44px"};
  height: ${({ customHeight }) => customHeight || "44px"};
  text-align: center;
  font-size: 16px;
  color: #fff;
  background: #212530;
  box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
    3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
    3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3),
    inset -1px -1px 2px rgba(21, 23, 30, 0.5);
  border: 1px solid #212530;
  border-radius: 50%;
`;
