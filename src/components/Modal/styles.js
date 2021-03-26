import styled from "styled-components";
import { theme } from "../../theme";
export const ModalDiv = styled.div`
  width: 580px;
  height: 780px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;
  background: ${theme.colors.mainBackground};
  box-shadow: -31px 31px 62px rgba(20, 23, 30, 0.2),
    -31px 39px 78px rgba(20, 23, 30, 0.9);
  transform: ${({ isOpen }) =>
    isOpen ? "translate3d(0%, 0px, 0px)" : "translate3d(200%, 0px, 0px)"};
  transition: all 1s ease 0s;
  .modal-header {
    padding: 2rem 2rem 0 2rem;
    .closeBtn {
      width: 40px;
      height: 40px;
      background: ${theme.colors.mainBackground};
      box-shadow: 1px 1px 2px rgb(50 56 72 / 30%),
        -1px -1px 2px rgb(17 19 24 / 50%),
        inset -5px 5px 10px rgb(17 19 24 / 20%),
        inset 5px -5px 10px rgb(17 19 24 / 20%),
        inset -5px -5px 10px rgb(50 56 72 / 90%),
        inset 5px 5px 13px rgb(17 19 24 / 90%);
      border-radius: 50%;
      text-align: center;
      padding: 8px 0;
      cursor: pointer;
    }
  }
`;
