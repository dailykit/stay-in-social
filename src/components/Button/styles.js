import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 125px;
  width: 100%;
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height || "38px"};
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
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
