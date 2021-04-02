import React from "react";
import { theme } from "../../theme";
import { CrossIcon } from "../Icons";
import BackDrop from "../BackDrop";
import { ModalDiv } from "./styles";

export default function Modal({ children, type, close, ...props }) {
  const bottomDrawerStyle = {
    width: "100%",
    height: "50%",
    transform: props.isOpen
      ? "translate3d(0px, 100%, 0px)"
      : "translate3d(0px, 200%, 0px)",
    borderRadius: "50px 50px 0 0",
    boxShadow:
      props.isOpen &&
      "-31px 31px 62px rgba(20, 23, 30, 0.2), -31px -31px 78px rgba(20, 23, 30, 0.9)",
  };
  const sideDrawerStyle = {
    width: "50%",
    height: "780px",
    transform: props.isOpen
      ? "translate3d(0%, 0px, 0px)"
      : "translate3d(200%, 0px, 0px)",
  };
  return (
    <>
      <BackDrop show={props.isOpen} close={close} />
      <ModalDiv
        id="modall"
        {...props}
        style={type === "bottomDrawer" ? bottomDrawerStyle : sideDrawerStyle}
      >
        <div className="modal-header">
          <div className="closeBtn" onClick={close}>
            <CrossIcon size="18" color={theme.colors.textColor} />
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </ModalDiv>
    </>
  );
}
