import React, { useRef, useEffect } from "react";
import { theme } from "../../theme";
import { CrossIcon } from "../Icons";
import { ModalDiv } from "./styles";

export default function Modal({ children, isClose, ...props }) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        isClose();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, isClose]);
  return (
    <ModalDiv {...props} ref={wrapperRef}>
      <div className="modal-header">
        <div className="closeBtn" onClick={isClose}>
          <CrossIcon size="18" color={theme.colors.textColor} />
        </div>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer"></div>
    </ModalDiv>
  );
}
